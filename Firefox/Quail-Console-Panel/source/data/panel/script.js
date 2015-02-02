'use strict';

var oQuailPanel = 
{
    bStored: false,
    // oAccessibilityTests holds the object containing the list of quail accessibility tests
    //that will be filled using an ajax call
    oAccessibilityTests: {},
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
        $( '.list-button' ).on( 'click', function(  )
        {
            var $thisList = $( this ).next( 'ul' );
            if(  $( this ).toggleClass( 'active' ).hasClass( 'active' )  )
            {
                $thisList.children(  ).addClass( 'active' );
            }
            else
            {
                $thisList.children(  ).removeClass( 'active' );
            }
        } );
        // Menu button controls, selects all, clears all selections or submits the tests to handler
        $( '.menu-button' ).on( 'click', function(  ) 
        {
            thisP.handleMainButton( $( this ) );
        } );        
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
        // var url = 'http://mockups/accessibilityTests.json';
        // $.ajax( {
        //     url: url,
        //     dataType: 'json',
        //     data: {},
        //     success: function( oData )
        //     {
        //         thisP.oAccessibilityTests = oData;
        //     },
        //     error: function( oData )
        //     {
        //         console.error( 'Failed to load JSON object' );
        //     },
        //     complete: function( oData )
        //     {
        //         // Upon completion populate the tests tab of the panel with the tests
        //         //and then let the handler know it can display now
        //         thisP.populateTestsTab(  );
        //         $( '.content' ).show(  );
        //         thisP.messageAddon(  "accessTests", [oData.responseJSON]  );
        //     }
        // } );
        thisP.oAccessibilityTests = quailTests;
        thisP.populateTestsTab(  );
        $( '.content' ).show(  );
        thisP.messageAddon(  "accessTests", [thisP.oAccessibilityTests]  );
    },

    /* populateTestsTab:
    * Populates the test tab upon recieving the list of test from the ajax call
    * Each list itme displays the test id and a description of the test
    * They are placed into list blocks based on the tag of the test
    */
    populateTestsTab: function(  )
    {
        var thisP = this;
        var oAccessibilityTests = this.oAccessibilityTests;
        // iterates through the accessibility tests object and creates a list element for each one, in their respective list block
        for( var prop in oAccessibilityTests )
        {
            var sId, sDescription, aTags, i;
            sId = prop;
            aTags = oAccessibilityTests[prop].tags;
            sDescription = sId;
            if(  'description' in oAccessibilityTests[prop]  )
            {
                sDescription = oAccessibilityTests[prop].description.en;
            }
            $( '#tabAll .list-block' ).each(  function( e )
            {
                for(  i = 0; i < aTags.length; i++ )
                {
                    var $oListBlock = $( this );
                    if(  $oListBlock.hasClass( 'tag-'+aTags[i] )  )
                    {
                        $oListBlock.find( '.collapsible-list' ).append( '<li id="' + sId + '"><strong>' + sId + ' : </strong>'+ sDescription + '</li>' );
                        return false;
                    }
                }
            } );
        }
        // Upon clicking on a list item within the tests tab, selects the list itme
        // ( This selection highlights the item to let it know its selected, and adds it to the guidelines array )
        $( '.collapsible-list li' ).on( 'click', function(  )
        {
            console.log( 'select test1' );
            thisP.selectListItem( $( this ) );
        } );
        // Catches anchors within the collapsible list and makes them open new tab in browser instead of opening page in panel
        // Necessary because of links within the test descriptions
        $( '.collapsible-list li a' ).on(  'click', function( event )
        {
            event.preventDefault(  );
            var sPageDestination = $( this ).attr( 'href' );
            thisP.messageAddon(  "pageOpen", [sPageDestination]  );
        } );
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
        $( '.results-list' ).html( " " );
        for( var sTestId in oResults.results )
        {
            var thisTest = oResults.results[sTestId];
            if(  thisTest.elements.length >= 1  )
            {
                var sDescription = sTestId;
                if(  'description' in this.oAccessibilityTests[sTestId]  )
                {
                    sDescription = this.oAccessibilityTests[sTestId].description.en;
                }
                $( '.results-list.' + oSeverity[sTestId] ).append( '<li id="' + sTestId + '"><span class="results-totals total-' + oSeverity[sTestId] + '">' + thisTest.elements.length + '</span><span class="show-dom">Find in DOM</span><strong>' + sTestId + ': </strong>'+ sDescription + '</li>' );
            }
            
        }
        $( '.loading' ).hide(  );
        // Change/remove current tab to active
        $( '.tab-links .results' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        // Shows the results tab and switches to it
        $( 'li.results span' ).slideDown(  function(  )
        {
            // Show results tab
            $( '.tab-div.tabResults' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
            $( '#tabResults' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        } );
        // When a list item in the results list is click it toggles the borders in the active tab, through messaging to the handler
        $( '.results-list li' ).on( 'click', function(  event  )
        {
            var sTestId = $( this ).attr( 'id' );
            // If the find in Dom button is clicked it makes active if inactive
            if(  $( event.target ).hasClass( 'show-dom' )  )
            {
                if(  !$( this ).hasClass( 'active' )  )
                {
                    $( this ).addClass( 'active' );
                    thisP.messageAddon(  "testOn", [sTestId, oSeverity[sTestId]]  );
                }
            }
            else if(  $( this ).toggleClass( 'active' ).hasClass( 'active' )  )
            {
                thisP.messageAddon(  "testOn", [sTestId, oSeverity[sTestId]]  );
            }
            else
            {
                thisP.messageAddon(  "testOff", [sTestId]  );
            }
        } );
        // When Find in DOM button is clicked sends message to handler to find all elements of that test within the DOM
        $( '.show-dom' ).on(  'click', function(  ) 
        {
            var sTestId = $( this ).parent( 'li' ).attr( 'id' );
            thisP.messageAddon(  "findInDom", [sTestId]  );
            $( '.loading' ).show(  );
        } );
        // Catches anchors within the results list and makes them open new tab in browser instead of opening page in panel
        $( '.results-list li a' ).on(  'click', function( e )
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
    populateDomHierarchyTab: function( sTestId,oDomPositions )
    {
        var thisP = this;
        $( '.loading' ).hide(  );
        // Change/remove current tab to active
        $( '.tab-links .search-DOM' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
        // Shows the DOM tab and switches to it
        $( 'li.search-DOM span' ).slideDown(  function(  )
        {  
            // Show tab
            $( '#tabDOM' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
            // Populate tab with oDomPositions
            $( '.test-name' ).html( 'Test Name: <strong>' + sTestId + '</strong>' );
            $( '.dom-list' ).html( '' );
            for( var index in oDomPositions )
            {
                oDomPositions[index].splice( 1,1 );
                $( '.dom-list' ).append( '<li test-id="' + sTestId + '" test-index="' + index + '">' + oDomPositions[index].join( ' > ' ) + '<span class="show-code">View HTML</span></li>' );
            }
            // event listener to show the html tab
            $( '.show-code' ).on( 'click', function(  )
            {
                var i = $( this ).parent(  ).attr( 'test-index' );
                $( '.tab-links .html-tab' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
                $( 'li.html-tab span' ).slideDown(  function(  )
                {
                    $( '#tabHTML' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
                    $( '.tab-div.tabHTML' ).addClass( 'active' ).siblings(  ).removeClass( 'active' );
                    thisP.messageAddon(  "getCode", [oDomPositions[i]]  ); //signals main.js to get the html code for the element described at poisiton i in the domPositions object
                } );
            } );
        } );
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
                    thisP.populateTestsTab(  );
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
            var aGuideline = [];
            var sCustomSelector = 'body';
            this.gatherSelected(  $( '#tabAll' ), aGuideline  );
            if(  $( '#inputCustomTest' ).val(  ).length > 0  )
            {
                sCustomSelector = $( '#inputCustomTest' ).val(  );
            }
            thisP.messageAddon(  "submit" , [aGuideline, sCustomSelector]  );
            $( '.loading' ).show(  );
        }
        // Select all tests
        else if(  $button.hasClass( 'select-all' )  )
        {
            $( '#tabAll li' ).addClass( 'active' );
            $( '#tabAll .list-button' ).addClass( 'active' );
        }
        // Clear the entirety of the selection @TODO: Maybe clear scope as well?
        else if(  $button.hasClass( 'clear' )  )
        {
            $( '#tabAll li' ).removeClass( 'active' );
            $( '#tabAll .list-button' ).removeClass( 'active' );
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
    /*
    * toggles the collapsible lists to display or hide their content when the label is clicked
    */
    handleCollapsibleList: function( $listLink, event )
    {
        var $thisList
        if(  $listLink.parent(  ).parent(  ).is( '#tabResults' )  ) //tests to see if its in results tab or other, kind of jerryrigged this, closest(  ) didn't work :( 
        {
            $thisList = $listLink.next( 'ul' );
        }
        else
        {
            $thisList = $listLink.next(  ).next( 'ul' );
        }
        // Show/Hide list 
        $thisList.toggleClass( 'open' ).toggle(  );
        // Toggles label to be + or -
        $listLink.toggleClass( 'open' );
    },
    /*
    * BELOW HERE ARE SOME HELPER FUNCTIONS TO MAKE LIFE EASIER
    * selectListItem: called when a li element within the collapsible list is clicked, toggles 'active' class on it
    * gatherSelected: help function for the submit test function, finds all the 'active' list elements and adds them to an array
    * messageAddon: takes the given handle and content and sends them to the main addon in the correct format
    * receiveMessage: instead of calling handleMessage directly the mainPort's receive message event listener calls this function
    *               necessary because it didn't like me called handleMessage directly for some reason
    */
    selectListItem: function( $listItem )
    {
        console.log( 'select test2' );
        $listItem.toggleClass( 'active' );
        var $listBlock = $listItem.parent(  ).parent(  );
        $listBlock.find( '.list-button' ).removeClass( 'active' );
    },
    gatherSelected: function(  list, guideline  )
    {
        var total = 0;
        if(  typeof guideline === 'undefined'  )
        {
            guideline = [];
        }
        list.find( 'li' ).each(  function( i )
        {
            if(  $( this ).hasClass( 'active' ) )
            {
                total++;
                guideline.push( $( this ).attr( 'id' ) );
            }
        } );
        return total;
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