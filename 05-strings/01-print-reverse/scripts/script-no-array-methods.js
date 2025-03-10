/**
 * @file script-no-array-methods.js
 * @description This file contains the JavaScript code for the Print Reverse exercise without using array methods.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript without using array methods.
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
 * This function reverses the input string and prints it to the console without using array methods.
 * @param {string} str - The string to be reversed.
 * @returns {void}
 * @example
 * printReverse("Hello World"); // "dlroW olleH"
 */
function printReverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    console.log(reversed);
}

console.log("Il seguente è l'output del file script-no-array-methods.js:");
// Calling the function with different arguments to print different reversed strings.
printReverse("Hello World"); // "dlroW olleH"