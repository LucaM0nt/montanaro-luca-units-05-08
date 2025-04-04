/**
 * @file script.js
 * @description This file contains the implementation of a function 
 * to calculate the day of the month for a given date, subtracting a specified number of days.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates how to manipulate dates in JavaScript using the `Date` object.
 * The `getDateAgo` function calculates the day of the month for a date 
 * that is a specified number of days in the past.
 * If a negative number of days is provided, the function returns an error message.
 */

/**
 * Calculates the day of the month for a date that is a specified number of days in the past.
 * @param {Date} date - The starting date.
 * @param {number} days - The number of days to subtract from the date. Must be a positive number.
 * @returns {number|string} - Returns the day of the month for 
 * the calculated date, or an error message if the input is invalid.
 * @example
 * let today = new Date();
 * console.log(getDateAgo(today, 1)); // Logs the day of the month for yesterday
 * console.log(getDateAgo(today, -1)); // Logs "Invalid day, use positive numbers"
 */
function getDateAgo(date, days) {
    if (days < 0) return 'Invalid day, use positive numbers';
    let newDate = new Date(date);
    // setDate changes only the day of the month, getDate returns the day of the month
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();
}

// Example usage
let today = new Date();
console.log(getDateAgo(today, 1));  // Logs the day of the month for yesterday
console.log(getDateAgo(today, -1)); // Logs "Invalid day, use positive numbers"