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
    oActiveBorders: {aTestList: [], oElementList: {}, iTotal: 0, oToolTipList: {}}, // aTestLists contains the active tests, oHLPos contains an object containing a list of the current positions of highlights
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
        self.port.on( "highlightOn", function( aTestIds )
        {
            worker.applyBorders( aTestIds );
        });

        // Turns off the borders and tooltips for elements that failed testID
        self.port.on( "highlightOff", function( sTestId )
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
    getDomHierarchy: function( aTestIds )
    {
        var $oElement, oDomPositions;
        oDomPositions = {};     
        for( j = 0; j < aTestIds.length; j++ )
        {
            var sTestId = aTestIds[j];
            var oResults = this.oTestResults.results[sTestId];
            oDomPositions[sTestId] = {};
            // Iterates through and grabs parents for each element, puts them in oDomPositions 
            for( i = 0; i < oResults.elements.length; i++ )
            {
                $oElement = $(oResults.elements[i]);
                oDomPositions[sTestId][i] = [];
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
                    oDomPositions[sTestId][i].push( sEleEntry );
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
                    oDomPositions[sTestId][i].push( sEntry );
                });
                oDomPositions[sTestId][i].reverse();
            }
        }
        self.port.emit( "foundInDom", aTestIds, oDomPositions );
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
    applyBorders: function( aTestIds )
    {
        for( j = 0; j < aTestIds.length; j++ )
        {
            var sTestId = aTestIds[j];
            var oResults = this.oTestResults.results[sTestId];
            var oElement, $oElement, oPos;
            var iInvisTotal = 0;
            var worker = this;
            // Sets test to active
            worker.oActiveBorders.aTestList.push(sTestId);
            // Iterates through elements that failed test
            for( i = 0; i < oResults.elements.length; i++ )
            {
                oElement = oResults.elements[i];
                $oElement = $(oElement);
                // Check to make sure element is visible
                if( !$oElement.is(":visible") )
                {
                    iInvisTotal = iInvisTotal + 1;
                }
                // Get position of element (offset to document)
                else
                {
                    var iHeight, iWidth, iEleId;
                    var bMakeNew = true;
                    oPos = $oElement.offset();
                    iHeight = $oElement.outerHeight();
                    iWidth = $oElement.outerWidth();
                    oPos.top = oPos.top - (iHeight - $oElement.innerHeight());
                    oPos.top = oPos.top - 6;
                    oPos.left = oPos.left - 6;
                    // Check to make see if a new highlight needs to be made
                    for( var index in worker.oActiveBorders.oElementList )
                    {
                        if( oPos.top === worker.oActiveBorders.oElementList[index].top && oPos.left === worker.oActiveBorders.oElementList[index].left )
                        {
                            bMakeNew = false;
                            iEleId = index;
                        }
                    }
                    if( bMakeNew )
                    {
                        worker.oActiveBorders.iTotal = worker.oActiveBorders.iTotal + 1;
                        worker.oActiveBorders.oElementList['quail-ele-id-' + worker.oActiveBorders.iTotal] = oPos;
                        $('body').append( "<div class='quail-test-overlay-highlight severe' id='quail-ele-id-" + worker.oActiveBorders.iTotal + "'></div>" );
                        $('#quail-ele-id-' + worker.oActiveBorders.iTotal).css({"left": oPos.left + 'px',"top": oPos.top + 'px', "height": iHeight + 'px', "width": iWidth + 'px'});
                        worker.oActiveBorders.oToolTipList['quail-ele-id-' + worker.oActiveBorders.iTotal] = [sTestId];
                    }
                    else
                    {
                        worker.oActiveBorders.oToolTipList[iEleId].push(sTestId);
                    }
                }
            }
        }
        if ( iInvisTotal > 0 )
        {
            var sAlert = iInvisTotal + " total elements could not be highlighted due to visibility";
            self.port.emit( "panelAlert", sAlert );
        }
        worker.initToolTips();
    },
    removeBorders: function( aTestIds )
    {
        var worker = this;
        for( i = 0; i < aTestIds.length; i++ )
        {
            var sTestId = aTestIds[i];
            var index = worker.oActiveBorders.aTestList.indexOf(sTestId);
            if( index === -1 ) { console.log("Error: test Id not found in border array"); }
            worker.oActiveBorders.aTestList.splice(index,1);
            for( var iEleId in worker.oActiveBorders.oToolTipList )
            {
                var iTestIndex = worker.oActiveBorders.oToolTipList[iEleId].indexOf(sTestId)
                if( iTestIndex >= 0 )
                {
                    worker.oActiveBorders.oToolTipList[iEleId].splice( iTestIndex, 1 );
                    if( worker.oActiveBorders.oToolTipList[iEleId].length === 0 )
                    {
                        $('#' + iEleId).remove();
                        delete worker.oActiveBorders.oElementList[iEleId];
                        delete worker.oActiveBorders.oToolTipList[iEleId];
                        worker.oActiveBorders.iTotal = worker.oActiveBorders.iTotal - 1;
                    }
                }
            }
        }
    },
    initToolTips: function()
    {
        var worker = this;
        // Checks for tools tips being on, and then updates tooltip div html to hold tooltip info, and displays
        $( '.quail-test-overlay-highlight' ).mouseenter( function()
        {
            $( 'body' ).append( '<div class="quail-test-tooltip"></div>' );
            $( '.quail-test-tooltip' ).html( '' );
            var sEleId = $( this ).attr( 'id' );
            var aTestTooltips = worker.oActiveBorders.oToolTipList[sEleId];
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
            $( '.quail-test-tooltip' ).css({ left: 3 });
            $( '.quail-test-tooltip' ).show();
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