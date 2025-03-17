/**
 * @file script.js
 * @description This file contains the JavaScript code for listing top color choices.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of arrays and the forEach method in JavaScript.
 * The array `topChoices` contains a list of favorite colors.
 * The `forEach` method is used to iterate over the array and log each color choice with its ranking.
 * 
 * function logTopChoices - Logs each top color choice with its ranking.
 * 
 * The logTopChoices function takes two parameters: topChoice and index.
 * It logs the color choice and its ranking to the console.
 */

/**
 * Array of top color choices.
 * @type {string[]}
 */
let topChoices = ['violet', 'blue', 'orange'];

/**
 * Logs each top color choice with its ranking.
 * @param {string} topChoice - The color choice.
 * @param {number} index - The index of the color choice in the array.
 * @returns {void}
 * @example
 * topChoices.forEach(logTopChoices);
 */
function logTopChoices(topChoice, index) {
  console.log(`My #${index + 1} choice is ${topChoice}`);
}

// Iterate over the array and log each color choice with its ranking
topChoices.forEach(logTopChoices);