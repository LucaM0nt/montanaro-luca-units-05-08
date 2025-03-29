/**
 * @file script-localestring.js
 * @description This file contains a function to format a date into a human-readable string based on the time difference from the current date.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates how to calculate the difference between two dates and format the result into a human-readable string.
 * The `formatDate` function handles four cases:
 * 1. If the difference is less than 1 second, it returns "right now".
 * 2. If the difference is less than 60 seconds, it returns the number of seconds ago.
 * 3. If the difference is less than 1 hour, it returns the number of minutes ago.
 * 4. Otherwise, it formats the date using `toLocaleString` with the 'en-GB' locale.
 */

/**
 * Formats a date into a human-readable string based on the time difference from the current date.
 * @param {Date} date - The date to format.
 * @returns {string} - A formatted string representing the time difference or the date in 'DD.MM.YY HH:mm' format.
 * @example
 * console.log(formatDate(new Date(new Date() - 500))); // "right now"
 * console.log(formatDate(new Date(new Date() - 30000))); // "30 sec. ago"
 * console.log(formatDate(new Date(new Date() - 1800000))); // "30 min. ago"
 * console.log(formatDate(new Date('2024-03-26T14:30:00'))); // e.g. "26.03.24 14:30"
 */
function formatDate(date) {
    const now = new Date();
    const diff = (now - date) / 1000;

    if (diff < 1) {
        return "right now";
    } else if (diff < 60) {
        return `${Math.floor(diff)} sec. ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} min. ago`;
    } else {
        return date.toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', '');
    }
}

console.log ("using script-localestring.js");
// Example usage:
console.log(formatDate(new Date(new Date() - 500))); // "right now"
console.log(formatDate(new Date(new Date() - 30000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 1800000))); // "30 min. ago"
console.log(formatDate(new Date('2024-03-26T14:30:00'))); // e.g. "26.03.24 14:30"