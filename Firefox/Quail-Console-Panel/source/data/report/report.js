/*
* This script controls and populates the report, using data retrieved from
* the main addon script. The options menu has different methods to sort/organize
* the report.
* 
* METHODS:
* initReport: lets the main addon know the report has loaded and inits the main listener
*               for the relevant data from the main script
* initMenu: initializes the options menu event listeners
* populateHeader: populates the header for the report, which includes the url of the page tested
*               and the totals of each severity for the results
* populatePage: populates the main content of the report sorted according to the parameter sSort.
*               Iterates through and places each list element of failed tests in the appropiate section
* getPlaceInPage: Helper function for populatePage which finds the correct section for the test to be 
*               appended to
*/
var oAccessibilityReport = 
{
    oAccessibilityTests: {}, //Holds the entire tests object
    oReportResults: {}, //Holds the results from the tested webpage
    oReportSeverity: {}, //Holds the severities given by each test
    initReport: function()
    {
        var report = this;
        self.port.emit( "reportReady" ); // Let main addon know report is ready for data
        self.port.on( "reportData", function( oTests, oResults, oSeverity, sURL )
        {
            // Upon receiving data, loads into variables and begins populating page
            $('h2 span').html(sURL);
            report.oReportResults = oResults;
            report.oReportSeverity = oSeverity;
            report.oAccessibilityTests = oTests;
            report.initMenu();
            report.populateHeader();
            report.populatePage( 'severity' );
        });
    },
    initMenu: function()
    {
        var report = this;
        var $menu = $( '#options-menu' );
        $( '#options' ).on( 'click', function()
        {
            $menu.toggleClass('open'); // Toggles the option menu to be visible or not
        });
        $( '#options-apply' ).on( 'click', function() // Apply button is clicked event listener
        {
            var sSortVal = $('#options-sort').val(); // Get the desired sort method from the dropdown menu
            var oDisplay = // Get the desired filters from the checkboxes
            {
                severe: $('#display-severe')[0].checked, // Will be true if checked, means user wants to hide severe test failures
                moderate: $('#display-moderate')[0].checked,
                suggestion: $('#display-suggestion')[0].checked
            };
            switch( sSortVal ) // Depending on the value given, change the main sections displayed to prepare for sorting
            {
                case 'severity':
                    $('.report-content').html("<div class='border-box severe'><div class='title'>Severe</div><div class='description'>(Full certainty that elements are not accessible to the necessary standards)</div><div class='test-block severe'></div></div><div class='border-box moderate'><div class='title'>Moderate</div><div class='description'>(Some certainty that elements have failed to meet accessibility standards, though possible false positives)</div><div class='test-block moderate'></div></div><div class='border-box suggestion'><div class='title'>Suggestions</div><div class='description'>(These standards cannot be tested for but here a suggestions for elements that should be followed)</div><div class='test-block suggestion'></div></div><div class='border-box passed'><div class='title'>Tests Passed</div><div class='description'>(Tests run that the webpage passed)</div><div class='test-block passed'></div></div>");
                    console.log('severity sort');
                    break;
                case 'standards':
                    $('.report-content').html("<div class='border-box'><div class='title'>Both WCAG & 508</div><div class='test-block both'></div></div><div class='border-box'><div class='title'>WCAG</div><div class='test-block wcag'></div></div><div class='border-box'><div class='title'>Section 508</div><div class='test-block five'></div></div><div class='border-box'><div class='title'>Neither 508 or WCAG</div><div class='test-block neither'></div></div>");
                    console.log('standards sort');
                    break;
                case 'tag':
                    $('.report-content').html("<div class='border-box'><div class='title'>Color</div><div class='description'>(Tests relevant to the colors used)</div><div class='test-block tag-color'></div></div><div class='border-box'><div class='title'>Links</div><div class='description'>(Standards for the readability and usability of links on a page)</div><div class='test-block tag-link'></div></div><div class='border-box'><div class='title'>Images</div><div class='description'>(Standards for images in relation to portraying information)</div><div class='test-block tag-image tag-imagemap'></div></div><div class='border-box'><div class='title'>Forms</div><div class='description'>(Standards for input forms)</div><div class='test-block tag-form'></div></div><div class='border-box'><div class='title'>Tables</div><div class='description'>(Standards for Table contents and formatting)</div><div class='test-block tag-table'></div></div><div class='border-box'><div class='title'>Javascript</div><div class='description'>(Standards related to acceessible javascript)</div><div class='test-block tag-javascript'></div></div><div class='border-box'><div class='title'>Objects</div><div class='description'>(Objects such as embed or iframe)</div><div class='test-block tag-objects'></div></div><div class='border-box'><div class='title'>Generic Content</div><div class='description'>(Content standards for a web page)</div><div class='test-block tag-content'></div></div><div class='border-box'><div class='title'>Document</div><div class='description'>(Specific issues with the way the html document is written)</div><div class='test-block tag-document'></div></div>");
                    console.log('tag sort');
                    break;
                default:
            }
            report.populatePage( sSortVal ); // Populate the content section based on the sort
            for( var prop in oDisplay) // This filters all tests by the desired traits
            {
                var $item = $('[data-severity="'+prop+'"]');
                if( !oDisplay[prop] )
                {
                    $item.hide();
                }
                else
                {
                    $item.show();
                }
            }
        });
    },
    populateHeader: function()
    {
        var report = this;
        var iTotalFailed = report.oReportResults.totals.severe + report.oReportResults.totals.moderate + report.oReportResults.totals.suggestion; //finds total failed manually
        $('.results-totals.total').html('Total Failed: ' + iTotalFailed); // Populates the boxes with totals
        $('.results-totals.total-severe').html('Severe: ' + report.oReportResults.totals.severe);
        $('.results-totals.total-moderate').html('Moderate: ' + report.oReportResults.totals.moderate);
        $('.results-totals.total-suggestion').html('Suggestions: ' + report.oReportResults.totals.suggestion);
        $('.test-block').each( function()
        {
            $(this).html(""); //Cleans up html test data and any gibberish that may be left there
        });
    },
    populatePage: function( sSort )
    {
        var report = this;
        console.log('Populating report');
        for(var sTestId in report.oReportResults.results)
        {
            var thisTest = report.oReportResults.results[sTestId]; // Get the test from the results object
            var sDescription = sTestId; // Initially put description as just the test id incase no other data is avaiable about test
            var $eBlock = report.getPlaceInPage( sSort, thisTest, sTestId, report.oReportSeverity[sTestId] ); // Get the appropiate destination for the list element based on sort and severity
            var sWcag = ''; // Initially standards strings are empty
            var s508 = '';
            if( 'description' in report.oAccessibilityTests[sTestId] )
            {
                sDescription = report.oAccessibilityTests[sTestId].description.en; // If a description exists use that
            }
            if( 'guidelines' in report.oAccessibilityTests[sTestId] )
            {
                // If guidelines exist fill the appropiate string with them
                if( 'wcag' in report.oAccessibilityTests[sTestId].guidelines )
                {
                    for( var version in report.oAccessibilityTests[sTestId].guidelines.wcag )
                    {
                        sWcag = '<span>WCAG ' + version + ': '; // All this just has to do with how they're formatted in the oAccessibilityTests object
                        for( i = 0; i < report.oAccessibilityTests[sTestId].guidelines.wcag[version].techniques.length; i++ ) // just places the appropiate data in a span
                        {
                            sWcag = sWcag + ' ' + report.oAccessibilityTests[sTestId].guidelines.wcag[version].techniques[i];
                        }
                        sWcag = sWcag + '</span>';
                    }
                }
                if( '508' in report.oAccessibilityTests[sTestId].guidelines )
                {
                    s508 = '<span>Section 508: '; // Same shit as above
                    for( i = 0; i < report.oAccessibilityTests[sTestId].guidelines['508'].length; i++ )
                    {
                        s508 = s508 + ' ' + report.oAccessibilityTests[sTestId].guidelines['508'][i];
                    }
                    s508 = s508 + '</span>';
                }
            }
            if( sWcag != '' || s508 != '' ) // If the test is part of either standards
            {
                // append this to the loaction found in getPlaceInPage()
                $eBlock.append('<div class="test-item" data-severity="' + report.oReportSeverity[sTestId] + '"><h4><span class="totalnum">' + thisTest.elements.length + '</span><span class="testid">' + sTestId + '</span>  ' + sDescription + '</h4><p>Relevant standards: ' + sWcag + s508 + '</p></div>');
            }
            else
            {
                // else also append this, but it doesn't include sWcag or s508, optomizes space, otherwise there are weird uneven blank lines
                $eBlock.append('<div class="test-item" data-severity="' + report.oReportSeverity[sTestId] + '"><h4><span class="totalnum">' + thisTest.elements.length + '</span><span class="testid">' + sTestId + '</span>  ' + sDescription + '</h4></div>');
            }
        }
    },
    getPlaceInPage: function(sSort,oTest,sTestId,sSeverity)
    {
        var $eBlock; // place for future position in DOM
        var report = this;
        if( oTest.elements.length >= 1 )
        {
            switch( sSort )
            {
                case 'severity':
                    $eBlock = $('.test-block.' + sSeverity); // Simply places it in the block with the appropiate severity
                    break;
                case 'standards':
                    // Has to test for each block individually
                    if( ('wcag' in report.oAccessibilityTests[sTestId].guidelines) && ('508' in report.oAccessibilityTests[sTestId].guidelines) )
                    {
                        $eBlock = $('.test-block.both');
                    }
                    else if( 'wcag' in report.oAccessibilityTests[sTestId].guidelines )
                    {
                        $eBlock = $('.test-block.wcag');
                    }
                    else if( '508' in report.oAccessibilityTests[sTestId].guidelines )
                    {
                        $eBlock = $('.test-block.five');
                    }
                    else
                    {
                        $eBlock = $('.test-block.neither');
                    }
                    break;
                case 'tag':
                    // Iterates through each tag until it finds the right one
                    aTags = report.oAccessibilityTests[sTestId].tags;
                    $('.test-block').each( function(e)
                    {
                        for(var i = 0; i < aTags.length; i++)
                        {
                            if( $(this).hasClass('tag-'+aTags[i]) )
                            {
                                $eBlock = $('.test-block.tag-' + aTags[i]);
                                return false;
                            }
                        }
                    });
                    break;
                default:
                    // You dun goofed somewhere
                    console.error('ERROR: called unavailable sort option');
            }
        }
        else
        {   // Otherwise goes in the passed test section
            $eBlock = $('.test-block.passed');
        }
        return $eBlock;
    }
};
$(document).ready( function()
{
    oAccessibilityReport.initReport();
});