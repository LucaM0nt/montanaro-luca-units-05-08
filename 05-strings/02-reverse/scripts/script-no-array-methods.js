/**
 * @file script-no-array-methods.js
 * @description This file contains the JavaScript code for the Print Reverse exercise without using array methods.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript without using array methods.
 * The function reverse takes a string parameter and returns the reversed string.
 * 
 * function reverse - Reverses the input string and returns it.
 * 
 * The reverse function takes one parameter: str.
 * It returns the reversed string.
 * 
 * By calling the function with different arguments, you can get different reversed strings.
 */

/**
 * This function reverses the input string without using array methods.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 * @example
 * console.log(reverse("Hello World")); // "dlroW olleH"
 */
function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

console.log("The following is the output of the script-no-array-methods.js file:");
// Calling the function with different arguments to get different reversed strings.
console.log(reverse("Hello World")); // "dlroW olleH"