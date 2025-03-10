/**
 * @file script.js
 * @description This file contains the JavaScript code for the Capitalize exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function capital takes a string parameter and capitalizes the first letter.
 * The function capital2 takes a string parameter and capitalizes the first letter of each word.
 * The second function has been called capital2 because of the assignment requirements.
 * That's not an appropriate name for this function. 
 * A better name would be capitalAll.
 * 
 * function capital - Capitalizes the first letter of the input string.
 * function capital2 - Capitalizes the first letter of each word in the input string.
 * 
 * The capital function takes one parameter: str.
 * It returns the string with the first letter capitalized.
 * 
 * The capital2 function takes one parameter: str.
 * It returns the string with the first letter of each word capitalized.
 */

/**
 * This function capitalizes the first letter of the input string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 * @example
 * console.log(capital('ciao')); // Ciao
 */
function capital (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log("The following is the output of the capital function:");
console.log(capital('ciao')) // Ciao

/**
 * This function capitalizes the first letter of each word in the input string.
 * This function has been called capital2 because of the assignment requirements, but that's not an appropriate name for this function. * A better name would be capitalAll.
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 * @example
 * console.log(capital2('ciao come va')); // Ciao Come Va
 */
function capital2 (str) {
  return str.split(' ').map(capital).join(' ');
}

console.log("The following is the output of the capital2 function:");
console.log(capital2('ciao come va')) // Ciao Come Va