/**
 * @file script-timeout.js
 * @description This file contains the JavaScript code 
 * for logging a list of random animals to the console with a delay between each log.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of the `setTimeout` 
 * function in JavaScript to create a delay between logging items in an array.
 * Unlike the `setInterval` approach, this script uses `setTimeout` 
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
 * Timer variable to track the delay for each `setTimeout` call.
 * @type {number}
 */
let timer = 0;

/**
 * Logs each animal in the `randomAnimals` array to the console with a delay of 1 second between each log.
 * @returns {void}
 */
randomAnimals.forEach((animal) => {
    setTimeout(() => console.log(animal), timer);
    timer += 1000; // Increment the timer by 1 second for each animal
});