/**
 * @file script.js
 * @description This file contains the JavaScript code 
 * for demonstrating the use of `setTimeout` and `clearTimeout` functions.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates how to schedule a function to execute 
 * after a delay using `setTimeout` and how to cancel it using `clearTimeout`.
 * The `squareNumber` function calculates the square of a number and logs the result.
 * A timer is set to call `squareNumber` after 10 seconds, but it is canceled 
 * after 5 seconds using the `cancelTimer` function.
 */

/**
 * Calculates the square of a number and logs the result.
 * @param {number} num - The number to be squared.
 * @returns {number} - Returns the square of the number.
 * @example
 * squareNumber(4); // Logs "The result of squaring the number 4 is 16" and returns 16
 */
function squareNumber(num) {
  let squaredNumber = num * num;
  console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
  return squaredNumber;
}

/**
* Timer ID for the `setTimeout` call to execute `squareNumber`.
* @type {number}
*/
const timerId = setTimeout(squareNumber, 10000, 4);

/**
* Cancels the timer set for the `squareNumber` function and logs a message.
* @returns {void}
* @example
* cancelTimer(); // Logs "Timer canceled!"
*/
function cancelTimer() {
  clearTimeout(timerId);
  console.log("Timer canceled!");
}

// Set a timeout to cancel the timer after 5 seconds
setTimeout(cancelTimer, 5000);