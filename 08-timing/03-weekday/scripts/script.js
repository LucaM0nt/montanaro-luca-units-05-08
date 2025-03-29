/**
 * @file script.js
 * @description This file contains the JavaScript code for determining the day of the week in different languages.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates how to use arrays and the `Date` object to retrieve the current day of the week in short format.
 * It supports English (`en`) and Italian (`it`) languages. If an unsupported language is provided, it returns an error message.
 */

/**
 * Array of short weekday names in English.
 * @type {string[]}
 */
const weekdaysShortEng = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

/**
 * Array of short weekday names in Italian.
 * @type {string[]}
 */
const weekdaysShortIt = ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA'];

/**
 * Gets the short name of the current weekday in the specified language.
 * @param {Date} date - The date object to retrieve the day of the week from.
 * @param {string} lang - The language code ('en' for English, 'it' for Italian).
 * @returns {string} - The short name of the weekday in the specified language, or an error message if the language is invalid.
 * @example
 * let currentDate = new Date();
 * console.log(getWeekDay(currentDate, 'it')); // Logs: 'DO'
 * console.log(getWeekDay(currentDate, 'en')); // Logs: 'SU'
 * console.log(getWeekDay(currentDate, 'es')); // Logs: 'Invalid language'
 */
function getWeekDay(date, lang) {
    switch (lang) {
        case 'it':
            return weekdaysShortIt[date.getDay()];
        case 'en':
            return weekdaysShortEng[date.getDay()];
        default:
            return 'Invalid language';
    }
}

// Example usage
let currentDate = new Date();
console.log("Italian short day");  
console.log(getWeekDay(currentDate, 'it'));  // Logs: 'DO'
console.log("English short day");  
console.log(getWeekDay(currentDate, 'en'));  // Logs: 'SU'
console.log(getWeekDay(currentDate, 'es'));  // Logs: 'Invalid language'