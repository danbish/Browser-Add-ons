/*
* This is the worker script to be attached to a web page
* It's main function is to complete the tests and return the results
* to the addon script
* METHODS:
* workerInitListeners: Setup the listeners for the port to the addon script
* runAccessbilityTest: Taking the given guideline (array of testnames) and custom
*                   jQuery selector run the quail tests on the web page
* getDomHierarchy: Iterate through the DOM of the page get the hierarchy of elements
*                   that failed the given test id. Results in the form "div.class > img > a#id"
* getHTMLCode: Gets the html source for the page using an ajax call (to make sure its unedited by script)
*                   and then gets the line number of the element at the given dom position
* applyBorders: Turns on borders for all elements that failed the given test id
* removeBorders: Turns off borders for all elements that failed the given test id
* initToolTips: initialize the event listners (hover) so that tool tips display on newly turned on
*                   test elements 
*/
var oTestWorker = 
{
    oAccessibilityTests: {},
    oTestResults: {},
    oActiveBorders: {},
    workerInitListeners: function()
    {
        var worker = this;
        self.port.on( "init", function( aActiveTests, oData, aGuideline, sCustomSelector )
        {
            console.log( 'Initializing test' );
            for( var sTest in aActiveTests )
            {
                worker.removeBorders( sTest );
            }
            worker.oAccessibilityTests = oData;
            self.port.emit( "readyToTest", aGuideline, sCustomSelector );
        });

        // Begins the testing using the selected tests in aGuideline in the scope in sCustomSelector
        self.port.on( "beginTest", function( aGuideline, sCustomSelector )
        {
           worker.runAccessibilityTest( aGuideline, sCustomSelector ); 
        });

        //Turns on borders and tooltips for the elements that failed testID
        self.port.on( "testOn", function( sTestId, sSeverity )
        {
            worker.applyBorders( sTestId, sSeverity );
        });

        // Turns off the borders and tooltips for elements that failed testID
        self.port.on( "testOff", function( sTestId )
        {
            worker.removeBorders( sTestId );
        });

        // Finds the position of all elements that failed sTestId in the DOM
        self.port.on( "findInDom", function( sTestId )
        {
            worker.getDomHierarchy( sTestId );
        });

        // Hiding them images
        self.port.on( "disableImages", function()
        {
            $('img').hide();
        });

        self.port.on( "getCode", function( oDomPosition )
        {
            worker.getHTMLCode( oDomPosition );
        });
    },
    runAccessibilityTest: function( aGuideline, sCustomSelector )
    {
        var worker = this;
        // oSeverity will contain an associative arrray effectivley, with oSeverity[sTestId] containing the severity of said test
        var oSeverity = new Object();
        var oRunTests = worker.oAccessibilityTests;
        var sSelector = 'body';
        // Makes sure the jquery selector will actually work
        try
        {
            var $testSelector = $( sCustomSelector );
            sSelector = sCustomSelector;
        }
        catch(err)
        {
            alert('Error:\nThe selector ' + sCustomSelector + ' probably didnt work');

        }
        worker.oTestResults = { results: { }, totals: { moderate: 0, severe: 0, suggestion: 0 } };
        for( i = 0; i < aGuideline.length; i++ )
        {
            worker.oTestResults.results[ aGuideline[i] ] = { elements: [] };
        }
        // Quail Tests
        $( sSelector ).quail(
        {
            jsonPath : 'quail',
            guideline: aGuideline,
            accessibilityTests : oRunTests,
            testFailed : function( event )
            {
                // Attributes for when the tool tip needs to be on
                $( event.element ).attr( 'quail-test-highlights', '0' );
                $( event.element ).attr( 'quail-test-use', 'off' );
                oSeverity[ event.testName ] = event.severity;
                worker.oTestResults.results[ event.testName ].elements.push( event.element );
                worker.oTestResults.totals[ event.severity ]++;
            },
            complete: function( oResults )
            {
                // Tell main.js test is complete, also save test results
                self.port.emit( "complete", worker.oTestResults, oSeverity );
            }
        });
    },
    getDomHierarchy: function( sTestId )
    {
        var oResults = this.oTestResults.results[sTestId];
        var $oElement, oDomPositions;
        oDomPositions = {};
        // Iterates through and grabs parents for each element, puts them in oDomPositions 
        for( i = 0; i < oResults.elements.length; i++ )
        {
            $oElement = $(oResults.elements[i]);
            oDomPositions[i] = [];
            var sEleEntry = '';
            if( $oElement.prop( 'nodeName' ) )
            {
                sEleEntry = $oElement.prop( 'nodeName' ).toLowerCase( );
            }
            if( $oElement.prop( 'className' ) )
            {
                sEleEntry += '.' + $oElement.prop( 'className' ).replace( / /g, '.' );
            }
            if( $oElement.attr( 'id' ) )
            {
                sEleEntry += '#' + $oElement.attr( 'id' );
            }
            if( sEleEntry !== '' )
            {
                oDomPositions[i].push( sEleEntry );
            }
            $oElement.parents().not( 'html' ).each( function() 
            {
                var thisEle = this;
                var sEntry = thisEle.tagName.toLowerCase();
                if( thisEle.className )
                {
                    sEntry += "." + thisEle.className.replace(/ /g, '.');
                }
                if( thisEle.id )
                {
                    sEntry += "#" + thisEle.id;
                }
                oDomPositions[i].push( sEntry );
            });
            oDomPositions[i].reverse();
        }
        self.port.emit( "foundInDom", sTestId, oDomPositions );
    },
    getHTMLCode: function( oDomPosition )
    {
        console.log( "Getting Code" );
        var sSourceHtml;
        // ajax get to find get untampered html code of working web page
        $.ajax(
        {
            url: location.href,
            type: 'get',
            dataType: 'text',
            success: function( data ) 
            {
                sSourceHtml = data;
                var aLines = data.split( /\r?\n/ );
                // now sanitize the raw html so you don't get false hits in code or comments
                var bInsideNode = false;
                var sNodeTag = '';
                var sCloseTag = 
                {
                    xmp: '<\\/\\s*xmp\\s*>',
                    script: '<\\/\\s*script\\s*>',
                    '!--': '-->'
                };
                var sCleanedHtml = $.map( aLines, function( line ) 
                {
                    if ( bInsideNode && line.match( sCloseTag[ sNodeTag ] ) ) 
                    {
                        var re = new RegExp( '.*(' + sCloseTag[ sNodeTag ] + ')', 'i' );
                        line = line.replace( re, "$1" );
                        bInsideNode = false;
                    } else if ( bInsideNode ) {
                        line = '';
                    }
                    if ( line.match( /<(script|!--)/ ) ) 
                    {
                        sNodeTag = RegExp.$1;
                        line = line.replace(/<(script|xmp|!--)[^>]*.*(<(\/(script|xmp)|--)?>)/i, "<$1>$2");
                        var re = new RegExp( sCloseTag[sNodeTag], 'i' );
                        bInsideNode = ! ( re ).test( line );
                    }
                    return line;
                });
                // find nodes within the DOM hierarchy at given oDomPositions
                var $jNode = $( oDomPosition.join(' ') );
                var $nodes = [ $jNode ];
                // now find each desired node in both the DOM and the sSourceHtml
                var aStartLineNumbers = $.map( $nodes, function( $node ) 
                {
                    var tag = $node[0].tagName;
                    var tags = $( tag );
                    var index = tags.index( $node ) + 1;
                    var iLineCount = 0;
                    for ( var i = 0; i < sCleanedHtml.length; i++ ) 
                    {
                        var re = new RegExp( '<' + tag, 'gi' );
                        var aMatches = sCleanedHtml[i].match( re );
                        if ( aMatches && aMatches.length ) 
                        {
                            iLineCount += aMatches.length;
                            if ( iLineCount >= index ) 
                            {
                                return i;
                            }
                        }
                    }
                    return iLineCount;
                });

                ///
                aEndLineNumbers = [ aStartLineNumbers[0] + 1 ];
                console.log( "Finished..." );
                self.port.emit( "gotCode", sSourceHtml, aStartLineNumbers, aEndLineNumbers );
            },
        });   
    },
    applyBorders: function( sTestId, sSeverity )
    {
        var oResults = this.oTestResults.results[sTestId];
        var $oElement;
        // Iterates through elements that failed test
        for( i = 0; i < oResults.elements.length; i++ )
        {
            $oElement = $( oResults.elements[i] );
            // Updates attr describing how many tests are actively showing borders for this element
            var iNumTestsOn = parseInt( $oElement.attr( 'quail-test-highlights' ) );
            iNumTestsOn++;
            $oElement.attr( 'quail-test-highlights',iNumTestsOn.toString() );
            // Adds border with appropiate color
            switch( sSeverity )
            {
                case 'severe':
                    $oElement.css( { "outline": "2px dashed red", "padding": "3px" } );
                    break;
                case 'moderate':
                    $oElement.css( { "outline": "2px dashed orange", "padding": "3px" } );
                    break;
                case 'suggestion':
                    $oElement.css( { "outline": "2px dashed lightgreen", "padding": "3px" } );
                    break;
            }
            // Updates test tooltip attribute that describes which tests element needs to display tooltips for
            var sTooltipTests = $oElement.attr( 'quail-test-tooltip' );
            if( sTooltipTests === undefined  || sTooltipTests === '' )
            {
                sTooltipTests = sTestId;
            }
            else
            {
                sTooltipTests = sTooltipTests + ' ' + sTestId;
            }
            $oElement.attr( 'quail-test-tooltip', sTooltipTests );
            // Notifies that tooltips for this element are active
            $oElement.attr( 'quail-test-use','on' );
        }

        this.initToolTips();
    },
    removeBorders: function( sTestId )
    {
        var oResults = this.oTestResults.results[sTestId];
        var $oElement;
        for( i = 0; i < oResults.elements.length; i++ )
        {
            $oElement = $( oResults.elements[i] );
            // Updates test highlights tooltip which holds number of tests showing borders on this element
            var iNumTestsOn = parseInt( $oElement.attr( 'quail-test-highlights' ) );
            if( iNumTestsOn > 0)
            {
                iNumTestsOn--;
            }
            // Checks to make sure other tests aren't still active, if so leaves borders on
            if( iNumTestsOn === 0 )
            {
                $oElement.css( { "outline": "", "padding": "" } );
                $oElement.attr( 'quail-test-use', 'off' );
            }
            $oElement.attr( 'quail-test-highlights', iNumTestsOn.toString() );
            // Takes tests out of test tooltip attr and removes the test id being turned off
            var aTestTooltips = $oElement.attr( 'quail-test-tooltip' ).split( ' ' );
            var index = $.inArray( sTestId, aTestTooltips );
            aTestTooltips.splice( index, 1 );
            $oElement.attr( 'quail-test-tooltip', aTestTooltips.join( ' ' ) );
        }
    },
    initToolTips: function()
    {
        var worker = this;
        // Checks for tools tips being on, and then updates tooltip div html to hold tooltip info, and displays
        $( '[quail-test-use="on"]' ).mouseenter( function()
        {
            $( 'body' ).append( '<div class="quail-test-tooltip"></div>' );
            $( '.quail-test-tooltip' ).html( '' );
            var aTestTooltips = $( this ).attr( 'quail-test-tooltip' );
            if( aTestTooltips !== '' )
            {
                // Means tooltip needs to be shown
                // So takes list of test ids residing in the attr and splits into array
                aTestTooltips = aTestTooltips.split( ' ' );
                for( i = 0; i < aTestTooltips.length; i++ )
                {
                    // Adds each descritption
                    var sTestId = aTestTooltips[i];
                    var sDescription = sTestId;
                    if( 'title' in worker.oAccessibilityTests[sTestId] )
                    {
                        sDescription = worker.oAccessibilityTests[sTestId].title.en;
                    }
                    $( '.quail-test-tooltip' ).append('<p>' + sDescription + '</p>');
                }
                $( '.quail-test-tooltip' ).show();
            }
        // On mousemove places tooltip div at mouse position, accounting for screen position so it's always showing
        }).mousemove( function( mousePos )
        {
            iLeft = mousePos.pageX + 15;
            iTop = mousePos.pageY + 15;
            if( iLeft > ( $( window ).width() - 200 ) )
            {
                iLeft -= 270;
            }
            if( iTop > ( $( window ).height() - $( '.quail-test-tooltip' ).height() ) )
            {
                iTop -= $( '.quail-test-tooltip' ).height() + 20;
            }

            $( '.quail-test-tooltip' ).css({ left: iLeft, top: iTop});
        // On mouseleave hides the tooltip
        }).mouseleave( function()
        {
            $( '.quail-test-tooltip' ).hide();
            $( '.quail-test-tooltip' ).remove();
        });
    }
}

$(document).ready( function() 
{
    oTestWorker.workerInitListeners();
});