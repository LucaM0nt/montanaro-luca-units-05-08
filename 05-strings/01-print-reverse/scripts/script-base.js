/**
 * @file script-base.js
 * @description This file contains the JavaScript code for the Print Reverse exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function printReverse takes a string parameter and prints the reversed string.
 * 
 * function printReverse - Reverses the input string and prints it to the console.
 * 
 * The printReverse function takes one parameter: str.
 * It prints the reversed string to the console.
 * 
 * By calling the function with different arguments, you can print different reversed strings.
 */

/**
 * This function reverses the input string and prints it to the console.
 * @param {string} str - The string to be reversed.
 * @returns {void}
 * @example
 * printReverse("Hello World"); // "dlroW olleH"
 */
function printReverse(str) {
    console.log(str.split('').reverse().join(''));
}

console.log("Il seguente è l'output del file script-base.js:");
// Calling the function with different arguments to print different reversed strings.
printReverse("Hello World"); // "dlroW olleH"