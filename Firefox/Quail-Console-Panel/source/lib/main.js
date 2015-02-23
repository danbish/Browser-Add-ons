//Variables holding links to sdk files used to run the toggle button, the panel,
//the web page worker and the data for the plugin.
const { Panel } = require( 'dev/panel' );
const { Class } = require( 'sdk/core/heritage' );
const { Tool } = require( 'dev/toolbox' );
const { MessageChannel } = require( 'sdk/messaging' );
// const oStorage = require('sdk/simple-storage');

const sdkTabs = require( 'sdk/tabs' );
const sdkPageMod = require('sdk/page-mod');
const data = require( 'sdk/self' ).data;

// Attaches tooltip css file to every allowable website (local files won't work)
sdkPageMod.PageMod(
{
    include: '*',
    contentStyleFile: data.url( 'worker/worker.css' )
});

/* Main Object containing the variables and methods to run the addon
*  Methods:
*       workerInit: initializes the worker script that runs the test on the page and handles highlighting/tooltips
*                   and then sets up the message listeners for the worker
*       handleMessage: Takes a message that has been received from the panel script and parses it into the message handle
*                   and the message data
*       messagePanel: Creates a message from a given message handle and some data that will be sent to the panel script
*       workerRefresh: refreshes worker script to reset testing
*       channelInit: initializes channel used for message passing to the panel script
*/
var oQuailAddon = 
{
    oChannel: {},
    mainPort: {},
    panelPort: {},
    oWorker: {},
    bInitWorker: true,
    bTestable: false, // only true when tab is a testable web page, set in worker refresh
    //List of tests that are currently being highlighted
    aActiveList: {},
    //Holds accessibility tests object, recieved from panel ajax request
    oAccessibilityTests: {},
    //Initialize the addon
    addonInit: function()
    {
        // var thisP = this;
        // if( oStorage.storage.bStored )
        // {
        //     console.log("Grabbing tests from local storage");
        //     thisP.oAccessibilityTests = oStorage.storage.oTestList;
        //     thisP.messagePanel('accessTests', [thisP.oAccessibilityTests]);
        // }
        // else
        // {
        //     console.log("Grabbing tests from server");
            this.messagePanel( 'getTests',[] );
        // }
    },
    //Initialize worker function
    workerInit: function()
    {
        var thisP = this;
        // attach worker script to page
        console.log( "Create New Worker" );
        thisP.oWorker = sdkTabs.activeTab.attach(
        {
            contentScriptFile: [data.url( 'libs/jquery-2.1.1.min.js' ), data.url( 'worker/worker.js' ), data.url( 'libs/quail.jquery.min.js')],
        });
        thisP.oWorker.port.on("readyToTest",function(aGuideline, sCustomSelector)
        {
            console.log( "Beginning test" );
            thisP.oWorker.port.emit( "beginTest", aGuideline, sCustomSelector );
        });
        // Upon completion of tests, sends results to the panel to be updated into results tab
        thisP.oWorker.port.on( "complete", function( oResults, oSeverity )
        {
            console.log( "Test Complete" );
            thisP.messagePanel( "results", [oResults, oSeverity] )
        });
        // Returns results of searching in DOM to the panel to be displayed
        thisP.oWorker.port.on( "foundInDom", function( sTestId, oDomPositions )
        {
            thisP.messagePanel( "foundInDom", [sTestId, oDomPositions] );
        });
        // thisP.oWorker has found the HTML code and the start and stop lines of where to highlight
        thisP.oWorker.port.on( "gotCode", function(sCode, aStartLine, aEndLine)
        {
            console.log( "Got Code" );
            thisP.messagePanel( "gotCode", [sCode, aStartLine, aEndLine] );
        });
        // Need to set up an alert in the panel to alert user of important info
        thisP.oWorker.port.on( "panelAlert", function( sAlert )
        {
            thisP.messagePanel( "alert", [sAlert] );
        });
        thisP.bInitWorker = false;
    },
    handleMessage: function( oMessage )
    {
        var thisP = this;
        var sHandle = oMessage.handle;
        var oData = oMessage.message;
        switch( sHandle )
        {
            case 'log':
                console.log("PanelLog: " + oData[0]);
                break;
            case 'panelReady':
                thisP.addonInit();
                break;
            case 'accessTests':
            // Panel has successfully rendered and script is loaded, data received contains the list of tests from an ajax call to server
                thisP.oAccessibilityTests = oData[0];
                // oStorage.storage.oTestList = thisP.oAccessibilityTests;
                // oStorage.storage.bStored = true;
                break;
            case 'submit':
            // Submit test button was triggered in panel, takes list of desired guidelines and submits test to worker script to be completed
                if( thisP.bTestable )
                {
                    var aGuideline = oData[0];
                    var sCustomSelector = oData[1];
                    console.log('Submitting data');
                    thisP.oWorker.port.emit( "init", thisP.aActiveList, thisP.oAccessibilityTests, aGuideline, sCustomSelector );
                }
                else
                {
                    console.log('Cannot test: non-viable webpage');
                    thisP.messagePanel( "alert", ["Could not complete test on current web page: not valid web page"]);
                }
                break;
            case 'highlightOn':
            // Turn on borders for the selected test, gotten from data
                var aTestIds = oData[0];
                for( i = 0; i < aTestIds.length; i++ )
                {
                    this.aActiveList[aTestIds[i]] = true; //Keeps tabs on what tests are active so they can be disabled if panel is closed
                    console.log("Turn on test for " + aTestIds[i]);
                }
                this.oWorker.port.emit( "highlightOn", aTestIds );
                break;
            case 'highlightOff':
            // Turn off borders for the selected test
                var aTestIds = oData[0];
                for( i = 0; i < aTestIds.length; i++ )
                {
                    delete this.aActiveList[aTestIds[i]];
                }
                this.oWorker.port.emit( "highlightOff", aTestIds );
                break;
            case 'findInDom':
            // Get a list of the elements that failed the selected tests and their position in the DOM
                var sTestId = oData[0];
                this.oWorker.port.emit( "findInDom", sTestId );
                break;
            case 'pageOpen':
            // A link has been clicked within the panel that should lead to a new tab
                var sPageDestination = oData[0];
                sdkTabs.open( sPageDestination );
                break;
            case 'disableImages':
            // Hide the images on the working web page
                this.oWorker.port.emit( "disableImages" );
                break;
            case 'generateReport':
            // Generate a report from the test results. Sends the results and severities to the generator script in a new report tab.
                console.log("Create Report");
                var oResults = oData[0];
                var oSeverity = oData[1];
                var sURL = sdkTabs.activeTab.url;
                // Open a new tab
                sdkTabs.open( 
                {
                    url: data.url( 'report/report.html' ),
                    //inBackground: true,
                    onLoad: function onOpen(tab)
                    {
                        // Create temporary worker for the report script
                        var worker2 = tab.attach(
                        {
                            contentScriptFile: [data.url( 'libs/jquery-2.1.1.min.js' ), data.url( 'report/report.js' )]
                        });
                        // Once script is ready, send it the necessary data to populate the report
                        worker2.port.on( "reportReady", function()
                        {
                            worker2.port.emit( "reportData", thisP.oAccessibilityTests, oResults, oSeverity, sURL );
                        });
                    }
                });
                break;
            case 'getCode':
            // Sends message to the work script to get the HTML Code and the line position of the element at sepcified position in DOM
                var oDomPosition = oData[0];
                console.log("Get HTML");
                this.oWorker.port.emit( "getCode", oDomPosition);
                break;
            default:
                console.error('No matching message handle');
        }
    },
    messagePanel: function(sMessageHandle,oData)
    {
        console.log('messaging panel: ' + sMessageHandle);
        // Create message object, contains the handle (e.g. "results") and the data of the message
        var oMessage = 
        {
            handle: sMessageHandle,
            message: oData
        };
        // Send message through the mainPort to the panel script
        this.mainPort.postMessage(oMessage);
    },
    workerRefresh: function(tab)
    {
        var thisO = this;
        thisO.aActiveList = {};
        if( tab !== 0 )
        {
            if( tab.url.indexOf("about:") === -1 )
            {
                thisO.bTestable = true;
            }
            else
            {
                thisO.bTestable = false;
            }
        }
        // if a worker doesn't exist, create a new worker
        if(thisO.bInitWorker)
        {
            oQuailAddon.workerInit();
            thisO.bInitWorker = false;
        }
        // if a worker exists, destroy it then create a new one
        else
        {
            thisO.oWorker.destroy();
            oQuailAddon.workerInit();
        }
    },
    channelInit: function()
    {
        var thisO = this;
        // Create message channel, each channel has 2 ports
        this.oChannel = new MessageChannel();
        // Addon side port
        this.mainPort = this.oChannel.port1;
        // Panel side port
        this.panelPort = this.oChannel.port2;
        // Start both ports
        this.mainPort.start();
        this.panelPort.start();
        // Function listener so messages received get handled by the correct method
        this.mainPort.onmessage = function(event)
        {
            thisO.handleMessage(event.data);
        }
    }
}

// Creates the actual panel within the dev console
const quailPanel = Class(
{
    extends: Panel,
    label: 'Quail Tests',
    tooltip: 'Run quail accessibility tests on a webpage',
    icon: data.url('icons/icon-64.png'),
    url: data.url( 'panel/quailPanel.html' ),
    setup: function(options)
    {
        // Not used now, but in the future will be used to communicate with the firefox built in debugging functionality
        this.debuggee = options.debuggee;
    },
    dispose: function()
    {
        this.debuggee = null;
    },
    onReady: function()
    {
        oQuailAddon.channelInit();
        oQuailAddon.workerRefresh(0);
        this.postMessage("init", [oQuailAddon.panelPort]);
    }
});

exports.quailPanel = quailPanel;

var quailTool = new Tool(
{
    panels: { quail: quailPanel }
});

// If new tab is loaded refreshes worker
sdkTabs.on( 'ready', function( tab )
{
    oQuailAddon.workerRefresh( tab );
});

// If changing tabs refreshes worker
sdkTabs.on('activate', function( tab )
{
    oQuailAddon.workerRefresh( tab );
});