/**
 * Set up any number of triggerable functions. A single function can contain one or more calls to updateGoogleSheetFromStarRez(). For instance, if you want to run several reports daily at the same time, you could combine the calls into one function, then trigger the function.
 *
 * Use Google Scripts triggers to set a schedule. See: https://developers.google.com/apps-script/guides/triggers/installable#managing_triggers_manually
 *
 * The updateExample function can be used as a template to copy/paste additional functions that will be triggered individually.
 */

function updateExample() {
    "use strict";
    // Make a JSON object that will hold all of the options
    var options = {

        // Required: Google Sheets spreadsheetId (or spreadsheetUrl)
        "spreadsheetId": "YOUR_GOOGLE_SHEET_URL_HERE",

        // Required: StarRez ReportID to run and load into Google Sheet.
        "reportId": "100",

        // Optional: Set values of any parameters/variables on the report.
        "requestBody": {
            "Testing": 1
        },

        // Optional: Load report data into a specific sheet (by index or name) within the spreadsheet. Defaults to first sheet, if not specified.
        "sheet": "TestSheet"
    };

    // Call the update function to run it
    updateGoogleSheetFromStarRez(options);

    /**
     * Note that you can make related calls by just changing the options that are different. For example:
     *
     * options.requestBody.Testing = 0;
     * options.sheet = "Non-Test Sheet";
     * updateGoogleSheetFromStarRez(options);
     */
}
