/**
 * @file script.js
 * @description This file contains a function to display the current time in different locales using `setInterval`.
 * @date March 2025
 * @author Luca
 * 
 * @remarks
 * This script demonstrates how to use the `Date` object and the `toLocaleTimeString` method to display the current time in various locales.
 * The `printClock` function logs the current time in the specified locale, defaulting to 'en-GB' if no locale is provided.
 * Multiple intervals are set to display the time in German ('de-DE'), US English ('en-US'), and the default GB English ('en-GB') formats every second.
 */

/**
 * Logs the current time in the specified locale.
 * @param {string} [locale='en-GB'] - The locale to format the time string. Defaults to 'en-GB'.
 * @returns {void}
 * @example
 * printClock('de-DE'); // Logs the current time in German format (e.g., "00:00:00").
 * printClock('en-US'); // Logs the current time in US English format (e.g., "12:00:00 AM").
 * printClock();        // Logs the current time in GB English format (e.g., "00:00:00").
 */
function printClock(locale = 'en-GB') {
    console.log(new Date().toLocaleTimeString(locale, { hour12: false }));
}

// Set intervals to log the time in different locales every second
setInterval(() => printClock('de-DE'), 1000); // Logs time in German format
setInterval(() => printClock('en-US'), 1000); // Logs time in US English format
setInterval(() => printClock(), 1000);        // Logs time in GB English format

// Expected output (every second):
// 00:00:00    // German format
// 00:00:00    // US format
// 00:00:00    // GB format