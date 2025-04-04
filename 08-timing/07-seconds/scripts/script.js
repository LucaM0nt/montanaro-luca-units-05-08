/**
 * @file script.js
 * @description This file contains functions 
 * to calculate the number of seconds that have passed today and the number of seconds remaining until tomorrow.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates how to work with the `Date` object in JavaScript to perform time-based calculations.
 * The `getSecondsToday` function calculates how many seconds have passed since the start of the current day.
 * The `getSecondsToTomorrow` function calculates how many seconds are left until the start of the next day.
 */

/**
 * Calculates the number of seconds remaining until tomorrow.
 * @returns {string} - A message indicating the number of seconds left until tomorrow.
 * @example
 * console.log(getSecondsToTomorrow()); // Logs "There are X seconds left until tomorrow."
 */
function getSecondsToTomorrow() {
  let now = new Date();
  // I get the date of tomorrow at midnight. Omitting the time gets the time at midnight (00:00:00).
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let secondsToTomorrow = Math.round((tomorrow - now) / 1000);
  return `There are ${secondsToTomorrow} seconds left until tomorrow.`;
}

/**
 * Calculates the number of seconds that have passed today.
 * @returns {string} - A message indicating the number of seconds that have passed today.
 * @example
 * console.log(getSecondsToday()); // Logs "X seconds have passed today."
 */
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let secondsToday = Math.round((now - today) / 1000);
  return `${secondsToday} seconds have passed today.`;
}

// Example usage
console.log(getSecondsToday());
console.log(getSecondsToTomorrow());