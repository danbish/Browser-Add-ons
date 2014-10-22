var { ToggleButton } = require( 'sdk/ui/button/toggle' );
var panels = require( 'sdk/panel' );
var tabs = require( 'sdk/tabs' );
var data = require( 'sdk/self' ).data;

//Creates togglebutton that toggles selection panel
var button = ToggleButton(
{
    id: "show-panel",
    label: "Display Panel",
    icon: 
    {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onChange: handleChange
});

//The initiation of the selection panel, positioned at the bottom of the screen
var panel = panels.Panel(
{
    contentURL: data.url( 'panel/panel.html' ),
    contentScriptFile: [data.url( 'lib/jquery-2.1.1.min.js' ), data.url( 'panel/script.js' )],
    onHide: handleHide,
    position: {bottom: 0, left: 5, right: 5},
    focus: false
});

//Once submit button is hit, sends the guideline and any options to the active tab
panel.port.on( "submit", function( aGuideline, sCustomSelector )
{
    worker = tabs.activeTab.attach(
    {
        contentScriptFile: [data.url( 'lib/jquery-2.1.1.min.js' ), data.url( 'accessible.js' ), data.url( 'lib/quail.jquery.min.js')]
    });
    worker.port.emit( "beginTest", aGuideline, sCustomSelector );
    // Upon completion of tests, sends results to the panel to be updated into results tab
    worker.port.on( "complete", function( oResults, oSeverity )
    {
        panel.port.emit( "results", oResults, oSeverity )
    });
    // Once a testID has been selected in the panel, sends signal to turn on borders in active tab
    panel.port.on( "testOn", function( testID, sSeverity )
    {
        worker.port.emit( "testOn", testID, sSeverity );
    });
    // Once a testID has been deselected, sends signal to turn off border
    panel.port.on( "testOff", function( testID )
    {
        worker.port.emit( "testOff", testID );
    });
});
    

//Shows panel while button is toggled on
function handleChange( state )
{
    if( state.checked )
    {
        panel.show();
    }
}

//Hides panel when button is toggled off
function handleHide()
{
    button.state( 'window', {checked: false} );
}