/**
 * @file script-interval.js
 * @description This file contains the JavaScript code 
 * for logging a list of random animals to the console with a delay between each log using `setInterval`.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of the `setInterval` 
 * function in JavaScript to create a delay between logging items in an array.
 * Unlike the `setTimeout` approach, this script uses `setInterval` 
 * to repeatedly log items from the array until all items have been logged.
 * The `randomAnimals` array contains a list of 30 animal names.
 * Each animal name is logged to the console with a delay of 1 second between each log.
 */

/**
 * Array of random animal names.
 * @type {string[]}
 */
let randomAnimals = [
    "dog", "cat", "horse", "cow", "pig", "chicken", "goat", "sheep", "duck", "goose",
    "turkey", "rabbit", "deer", "elk", "moose", "bear", "wolf", "fox", "coyote",
    "bobcat", "mountain lion", "raccoon", "opossum", "dolphin", "fish", "lizard",
    "snake", "turtle", "frog", "toad"
];

/**
 * Index variable to track the current animal being logged.
 * @type {number}
 */
let i = 0;

/**
 * Logs each animal in the `randomAnimals` array to the console with a delay of 1 second between each log.
 * Uses `setInterval` to repeatedly log items from the array until all items have been logged.
 * @returns {void}
 */
const intervalId = setInterval(() => {
    if (i < randomAnimals.length) {
        console.log(randomAnimals[i]); // Logs the current animal in the array
        i++; // Increment the index to log the next animal
    } else {
        clearInterval(intervalId); // Stops the interval when all animals have been logged
    }
}, 1000); // Interval of 1 second between each log