/**
 * @file script.js
 * @description This file contains the implementation of a custom 
 * `setInterval` function (`setMyInterval`) and its corresponding `clearMyInterval` function.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates how to create a custom implementation of `setInterval` using `setTimeout`.
 * The `setMyInterval` function repeatedly executes a callback function at a specified delay.
 * The `clearMyInterval` function stops the repeated execution by clearing the timeout.
 */

/**
 * Creates a custom interval that repeatedly executes a callback function after a specified delay.
 * @param {Function} callback - The function to be executed repeatedly.
 * @param {number} delay - The delay in milliseconds between each execution of the callback.
 * @returns {Object} - An object containing the interval ID, which can be used to clear the interval.
 * @example
 * const myIntervalId = setMyInterval(() => console.log("Hello"), 2000); // Logs "Hello" every 2 seconds
 */
function setMyInterval(callback, delay) {
    const interval = { id: null };

    function repeat() {
        callback();
        interval.id = setTimeout(repeat, delay);
    }

    interval.id = setTimeout(repeat, delay);
    return interval;
}

/**
 * Stops a custom interval created by `setMyInterval`.
 * @param {Object} interval - The interval object returned by `setMyInterval`.
 * @returns {void}
 * @example
 * const myIntervalId = setMyInterval(() => console.log("Hello"), 2000);
 * setTimeout(() => clearMyInterval(myIntervalId), 8000); // Stops the interval after 8 seconds
 */
function clearMyInterval(interval) {
    clearTimeout(interval.id);
}

// Example usage

/**
 * Logs "Hello" to the console.
 * @returns {void}
 */
function sayHello() {
    console.log("Hello");
}

const myIntervalId = setMyInterval(sayHello, 2000); // Logs "Hello" every 2 seconds

// Clears the interval after 8 seconds
setTimeout(() => clearMyInterval(myIntervalId), 8000);