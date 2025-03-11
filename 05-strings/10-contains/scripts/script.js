/**
 * @file script.js
 * @description This file contains the JavaScript code for the Contains exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function aContainsb takes two string parameters and checks if the first string contains the second string.
 * 
 * function aContainsb - Checks if the first string contains the second string.
 * 
 * The aContainsb function takes two parameters: stringA and stringB.
 * It returns true if stringA contains stringB, false otherwise.
 */

/**
 * This function checks if stringA contains stringB.
 * @param {string} stringA - The string to be searched.
 * @param {string} stringB - The string to search for.
 * @returns {boolean} - True if stringA contains stringB, false otherwise.
 * @example
 * console.log(aContainsb("Another hello world", "hell")); // true
 * console.log(aContainsb("Another hello world", "ciao")); // false
 */
function aContainsb(stringA, stringB) {
  return stringA.includes(stringB);
}

console.log("The following is the output of the aContainsb function:");
// Calling the function with different arguments to check if stringA contains stringB.
console.log(aContainsb("Another hello world", "hell")); // true
console.log(aContainsb("Another hello world", "ciao")); // false