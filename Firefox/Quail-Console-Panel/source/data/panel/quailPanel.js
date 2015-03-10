'use strict';

var oQuailPanel = 
{
    tempDescript: 'This is a temporary descript to be used to fill up standard descriptions before I transcribe the whole shebang',
    $Loader: {},
    // oAccessibilityTests holds the object containing the list of quail accessibility tests
    //that will be filled using an ajax call
    oAccessibilityTests: {},
    oAccessibilityStandards: {},
    oReportData: {},
    // Holds the test ids relevent to each standard, WCAG, five (508), and other misc ones
    oTestIds : { wcag: [], five: [], misc: [] },
    bFirstMessage: true,
    mainPort: {},
    /* initiatePanel:
    * initiatePanel sets up all the event listeners necessary for basic panel functionality
    *  such as tabs, collapsible lists, menu buttons etc.
    */
    initiatePanel: function(  )
    {
        var thisP = this; // short for this Panel, shit gets weird with the this's        
        window.addEventListener( "message", function( event ) 
        {
            thisP.mainPort = event.ports[0];
            thisP.handleMessage( event.data );
            thisP.mainPort.onmessage = thisP.receiveMessage;
        } );

        thisP.$Loader = $( '.loading' );
        
        // Upon clicking of one the tabs, allows being able to switch to said tab
        $( '.tab-links span' ).on( 'click', function( event )  
        {
            thisP.handleTabClick( $( this ), event );
        } );
        // Upon clicking of the expand/colapsel list button, does appropiate action to list
        //within the tests tab
        $( '.list-label' ).on( 'click', function( event )
        {
            thisP.handleCollapsibleList( $( this ), event );
        } );
        // Controls the 'Select' button within the tests tab, a simple toggle feature
        $( '.list-button' ).on( 'click', function()
        {
            $( this ).toggleClass( 'active' );
        });
        // Menu button controls, selects all, clears all selections or submits the tests to handler
        $( '.menu-button' ).on( 'click', function(  ) 
        {
            thisP.handleMainButton( $( this ) );
        } );
        $( '.help' ).on( 'click', function()
        {
            thisP.messageAddon( "help", [] );
        });   
    },
    /* getAccessibilityTests:
    * the list of accessibiility tests exists in accessibilityTests.js, which is sourced in the 
    * html file for the panel. Grabs the test object and passes it to the main addon script
    */
    getAccessibilityTests: function(  )
    {
        // Once main.js has prepared for the panel to be displayed, ajax call to get
        //the object of quail accessibility tests from server at url
        var thisP = this;
        thisP.oAccessibilityTests = quailTests;
        thisP.oAccessibilityStandards = accessStandards;
        thisP.populateTestIds();
        $( '.content' ).show(  );
        thisP.messageAddon(  "accessTests", [thisP.oAccessibilityTests]  );
    },

    populateTestIds: function()
    {
        var panel = this;
        for(var sTestId in panel.oAccessibilityTests)
        {
            var thisTest = panel.oAccessibilityTests[sTestId];
            if( 'guidelines' in thisTest )
            {
                var bPushed = false;
                if( 'wcag' in thisTest.guidelines )
                {
                    panel.oTestIds.wcag.push(sTestId);
                    bPushed = true;
                }
                if( '508' in thisTest.guidelines )
                {
                    panel.oTestIds.five.push(sTestId);
                    bPushed = true;
                }
                if( !bPushed )
                {
                    panel.oTestIds.misc.push(sTestId);
                }
            }
            else
            {
                panel.oTestIds.misc.push(sTestId);
            }
        }
    },

    /* populateResultsTab:
    * Populates and displays the results tab upon receiving the completion of a quail test
    * Display the total number of tests failed based on severity, as well as listing each test ( sorted by severity )
    * Each list item has the test id, a test description as well a button to elaborate on the DOMs hierarchy
    * Clicking a list item will highlight it within the panel and also put borders around the corresponding elements in the tested page
    */
    populateResultsTab: function( oResults, oSeverity )
    {
        var thisP = this;
        // Displays totals of each severity
        var iTotalFailed = oResults.totals.severe + oResults.totals.moderate + oResults.totals.suggestion;
        $( '.results-totals.total' ).html( 'Total Failed: ' + iTotalFailed );
        $( '.results-totals.total-severe' ).html( 'Severe: ' + oResults.totals.severe );
        $( '.results-totals.total-moderate' ).html( 'Moderate: ' + oResults.totals.moderate );
        $( '.results-totals.total-suggestion' ).html( 'Suggestions: ' + oResults.totals.suggestion );
        // Populates results list with each test in results object that has at least one failure
        $( '.results-list' ).html( "" );
        $( '.results-list.sug' ).append( '<h4>Javascript Related Tests</h4>' );
        for( var sTestId in oResults.results )
        {
            var thisTest = oResults.results[sTestId];
            var bInWcag = false;
            var bIn508 = false;
            var sWcag, s508;
            var bShowWcag = $('#wcag').hasClass( 'active' );
            var bShow508 = $('#five').hasClass( 'active' );
            if(  thisTest.elements.length >= 1  )
            {
                var testDetails = thisP.oAccessibilityTests[sTestId];
                if( thisP.oTestIds.wcag.indexOf(sTestId) !== -1 && bShowWcag )
                {
                    bInWcag = true;
                    for( var version in testDetails.guidelines.wcag )
                    {
                        sWcag = 'WCAG-';
                        sWcag = sWcag + testDetails.guidelines.wcag[version].techniques[0];                        
                    }
                    thisP.addResultsItem( sTestId, thisTest, sWcag );
                }
                if( thisP.oTestIds.five.indexOf(sTestId) !== -1 &&  bShow508 )
                {
                    bIn508 = true;
                    s508 = '508-';
                    s508 = s508 + testDetails.guidelines['508'][0];
                    thisP.addResultsItem( sTestId, thisTest, s508 );
                }
            }
        }
        thisP.$Loader.hide();
        $( '.results-init' ).hide();
        $( '.results-list' ).show();
        // Change/remove current tab to active
        $( '.tab-links .results' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        // Shows the results tab and switches to it
        $( '.tab-div.tabResults' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        $( '#tabResults' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        // When a list item in the results list is click it toggles the borders in the active tab, through messaging to the handler
        $( '.hl' ).on( 'click', function(  event  )
        {
            var $button = $(this);
            var sStandard = $button.parent().attr('data-standard');
            var aTestIds = thisP.oReportData[sStandard].aTestIds;
            if( $button.toggleClass('active').hasClass('active') )
            {   
                thisP.messageAddon(  "highlightOn", [aTestIds]  );
            }
            else
            {
                thisP.messageAddon( "highlightOff", [aTestIds] );
            }
             
        });
        //When Find in DOM button is clicked sends message to handler to find all elements of that test within the DOM
        $( '.results-button.inspect' ).on(  'click', function(  ) 
        {
            var $button = $(this);
            var sStandard = $button.parent().attr('data-standard');
            var aTestIds = thisP.oReportData[sStandard].aTestIds;
            thisP.messageAddon(  "findInDom", [aTestIds]  );
            thisP.$Loader.show(  );
        } );
        // Catches anchors within the results list and makes them open new tab in browser instead of opening page in panel
        $( '.results-list a' ).on(  'click', function( e )
        {
            e.preventDefault(  );
            var sPageDestination = $( this ).attr( 'href' );
            thisP.messageAddon(  "pageOpen", [sPageDestination]  );
        } );
        $( '.menu-button.report' ).off(  );
        $( '.menu-button.report' ).on( 'click', function(  ) // super special because it can't exist until the results and severity are obtained
        {
            thisP.messageAddon(  "generateReport", [oResults , oSeverity]  );
        } );
    },
    /*
    * Populates the DOM hiearchy tab after receieving the 'gotDom' signal from main.js
    * Lists the element tag name and its respective classes and/or id in descending order
    * e.g. body > div.class1#id1 > span#id2 > a.class2
    * each list element contains the dom hierarchy ( as shown above ) and a button to show the doms respective element
    *within the html tab
    * oDomPositions is an array of arrays which holde the dom hierarchies
    */
    populateDomHierarchyTab: function( aTestIds,oDomPositions )
    {
        var thisP = this;
        for( var j = 0; j < aTestIds.length; j++ )
        {
            var sTestId = aTestIds[j];
            // Populate tab with oDomPositions
            $( '#tabDOM' ).append( '<span class="test-name">Test Name: <strong>' + sTestId + '</strong></span>' );
            $( '#tabDOM' ).append( '<div class="list-block"><ul class="dom-list" id="list-' + j + '"></ul></div>' );
            for( var index in oDomPositions[sTestId] )
            {
                oDomPositions[sTestId][index].splice( 1,1 );
                $( '.dom-list#list-' + j ).append( '<li test-id="' + sTestId + '" test-index="' + index + '">' + oDomPositions[sTestId][index].join( ' > ' ) + '<span class="show-code">View HTML</span></li>' );
            }
            // event listener to show the html tab
            $( '.show-code' ).on( 'click', function(  )
            {
                var i = $( this ).parent(  ).attr( 'test-index' );
                var test = $( this ).parent().attr( 'test-id' );
                $( '.tab-links .html-tab' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
                $( 'li.html-tab span' ).slideDown(  function(  )
                {
                    $( '#tabHTML' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
                    $( '.tab-div.tabHTML' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
                    thisP.messageAddon(  "getCode", [ oDomPositions[test][i] ]  ); //signals main.js to get the html code for the element described at poisiton i in the domPositions object
                } );
            } );
        }
        // Change/remove current tab to active
        $( '.tab-links .search-DOM' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        // Shows the DOM tab and switches to it
        $( 'li.search-DOM span' ).slideDown(  function(  )
        {  
            // Show tab
            $( '#tabDOM' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        });
        thisP.$Loader.hide();
    },

    /*
    * poapulateHtmlTab: inserts the code mirror into the view html tab that uses the html
    * text recieved from the main addon script. Also receives the start and end line numbers
    * of the desired element and highlights them
    */
    populateHtmlTab: function( sCode, aStartLine, aEndLine )
    {
        $( '#code-html' ).html( '' );
        var htmlCodeMirror = CodeMirror( document.getElementById( "code-html" ), {
            value: sCode,
            mode: "text/html",
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        } );
        htmlCodeMirror.setSize( null, '100%' );
        var iStartLine = aStartLine[0];
        var iEndLine = aEndLine[0];
        htmlCodeMirror.scrollIntoView( iStartLine,75 );
        for( var i = iStartLine; i < iEndLine; i++ )
        {
            htmlCodeMirror.addLineClass( i,'background','cm-highlight' );
        }
    },
    /*
    * Whenever a message is recieved from the addon script this is the method called.
    * Breaks message into its handle and the content data, then does a switch to call appropiate action
    * On first the data will be garbage so it just lets the main addon script it received the message successfully
    */
    handleMessage: function( oMessage )
    {
        var thisP = this;
        if(  this.bFirstMessage  )
        {
            this.messageAddon( "panelReady", [] );
            this.bFirstMessage = false;
        }
        else
        {
            this.messageAddon( "log",[oMessage.handle] );
            var sHandle = oMessage.handle;
            var oData = oMessage.message;
            switch(  sHandle  )
            {
                case 'getTests': //grab tests from file and send to main addon
                    thisP.getAccessibilityTests(  );
                    break;
                case 'accessTests': //tests are being recieved from main addon script
                    thisP.oAccessibilityTests = oData[0];
                    thisP.populateTestIds(  );
                    $( '.content' ).show(  );
                    break;
                case 'results': //got back test results can now populate results page
                    var oResults = oData[0];
                    var oSeverity = oData[1];
                    this.populateResultsTab( oResults, oSeverity );
                    break;
                case 'foundInDom': //got back the dom hierarchy for each failed element can now populate dom page
                    var sTestId = oData[0];
                    var oDomPositions = oData[1];
                    this.populateDomHierarchyTab( sTestId,oDomPositions );
                    break;
                case 'gotCode': //got back html code and line numbers from main addon script, used to display in code mirror
                    var sCode = oData[0];
                    var aStartLine = oData[1];
                    var aEndLine = oData[2];
                    this.populateHtmlTab( sCode,aStartLine,aEndLine );
                    break;
                case 'alert':
                    var sAlert = oData[0];
                    thisP.alertPanel( sAlert );
                    break;
                case 'workerReset':
                    thisP.workerReset();
                    break;
                default: //incorrect handler, sends a message to main addon to log this message
                    thisP.messageAddon( "log", ['No matching message handle'] );
            }
        }
    },
    /*
    * handleMainButton: if one of the main function buttons are clicked this function is called
    * determines actions to take by assessing the class of the button and going from there
    * TODO: may just switch to using id's, i feel like that would be better...
    */
    handleMainButton: function( $button )
    {
        var thisP = this
        // Submit button, gathers selected rules into the guideline and sends signal to main.js to begin testing
        if(  $button.hasClass( 'submit' )  )
        {
            var sCustomSelector = 'body';
            var aGuideline = thisP.gatherSelected();
            if(  $( '#inputCustomScope' ).val(  ).length > 0  )
            {
                sCustomSelector = $( '#inputCustomScope' ).val(  );
            }
            thisP.messageAddon(  "submit" , [aGuideline, sCustomSelector]  );
            thisP.$Loader.show(  );
        }
        else if(  $button.hasClass( 'disable-img' )  )
        {
            thisP.messageAddon(  "disableImages", []  );
        }
    },
    /*
    * simple method that handles the tab functionlity
    */
    handleTabClick: function( $tab, event )
    {
        var currentAttrValue = $tab.attr( 'href' );
 
        // Show/Hide Tabs
        $( '#' + currentAttrValue ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        $( '.tab-div.' + currentAttrValue ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
 
        // Change/remove current tab to active
        $tab.parent( 'li' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
 
        event.preventDefault(  );
    },
    alertPanel: function( sAlert )
    {
        this.$Loader.hide();
        var $alert = $( '.panel-alert' );
        $alert.html( sAlert + '<span class="close"></span>' );
        $( '.panel-alert .close' ).on( 'click', function()
        {
            $alert.slideUp();
        });
        $alert.slideDown();
    },
    workerReset: function()
    {
        var thisP = this;
        this.$Loader.hide();
        if( $('.results').hasClass('active'))
        {
            thisP.alertPanel( 'Warning: Inspections and Highlighting no longer available' );
        }
    },
    /*
    * BELOW HERE ARE SOME HELPER FUNCTIONS TO MAKE LIFE EASIER
    * gatherSelected: help function for the submit test function, finds all the 'active' list elements and adds them to an array
    * addResultsItem: determines the standards relevant to a test and places them in the correct item on the report tab
    * messageAddon: takes the given handle and content and sends them to the main addon in the correct format
    * receiveMessage: instead of calling handleMessage directly the mainPort's receive message event listener calls this function
    *               necessary because it didn't like me called handleMessage directly for some reason
    */
    gatherSelected: function()
    {
        var aGuidelineTemp = [];
        var panel = this;
        $('.list-button').each(  function( i )
        {
            var sStandard = '';
            var $tests = $(this);
            if(  $tests.hasClass( 'active' ) )
            {
                sStandard = $tests.attr( 'id' );
                aGuidelineTemp = aGuidelineTemp.concat( panel.oTestIds[sStandard] );
            }
        } );
        var oSeen = {};
        var aGuideline = [];
        var iCount = 0;
        for( var i = 0; i < aGuidelineTemp.length; i++ )
        {
            var sItem = aGuidelineTemp[i];
            if( oSeen[sItem] !== 1 )
            {
                oSeen[sItem] = 1;
                aGuideline[iCount] = sItem;
                iCount++;
            }
        }
        return aGuideline;
    },
    addResultsItem: function( sTestId, thisTest, sStandard )
    {
        var $listItem = $( '.results-list div[data-standard="' + sStandard + '"]' );
        var thisP = this;
        if( $listItem.length )
        {
            thisP.oReportData[sStandard].iTotal = thisP.oReportData[sStandard].iTotal + thisTest.elements.length;
            thisP.oReportData[sStandard].aTestIds.push(sTestId);
            $listItem.children('.results-num-ele').html( thisP.oReportData[sStandard].iTotal + ' elements' );
        }
        else
        {
            thisP.oReportData[sStandard] = { iTotal: thisTest.elements.length, aTestIds: [sTestId] };
            var sNewListItem = '<div data-standard="' + sStandard + '">';
            sNewListItem = sNewListItem + '<a class="results-button left" href="http://quailjs.org/#/guidelines/wcag">' + sStandard + '</a>';
            sNewListItem = sNewListItem + '<span class="results-button left hl">Highlight</span><span class="results-button right inspect">Inspect</span>';
            sNewListItem = sNewListItem + '<p>' + thisP.oAccessibilityStandards[sStandard] + '<span class="results-num-ele">' + thisTest.elements.length + ' elements</span></p></div>'
            if( thisP.oAccessibilityStandards[sStandard].indexOf('script') === -1 )
            {
                $( '.results-list.sev' ).append( sNewListItem );
            }
            else
            {
                $( '.results-list.sug' ).append( sNewListItem );
            }
        }
    },
    messageAddon: function(  sMessageHandle, oData  )
    {
        var oMessage = 
        {
            handle: sMessageHandle,
            message: oData
        };
        this.mainPort.postMessage( oMessage );
    },
    receiveMessage: function( event )
    {
        oQuailPanel.handleMessage( event.data );
    }
}

$( document ).ready( function(  )
{   
    // Load the panel, object does the rest.
    oQuailPanel.initiatePanel(  );
} );