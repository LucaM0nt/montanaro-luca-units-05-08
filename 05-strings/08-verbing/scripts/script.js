/**
 * @file script.js
 * @description This file contains the JavaScript code for the Verbing exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function verbing takes a string parameter and modifies it according to specific rules.
 * 
 * function verbing - Modifies the input string based on its length and ending.
 * 
 * The verbing function takes one parameter: str.
 * It returns the modified string based on the following rules:
 * - If the string length is at least 3 and it ends with 'ing', 'ly' is added to the end.
 * - If the string length is at least 3 and it does not end with 'ing', 'ing' is added to the end.
 * - If the string length is less than 3, the string is returned unchanged.
 */

/**
 * This function modifies the input string based on its length and ending.
 * @param {string} str - The string to be modified.
 * @returns {string} - The modified string.
 * @example
 * verbing("play"); // "playing"
 * verbing("playing"); // "playingly"
 * verbing("go"); // "go"
 */
function verbing(str) {
    if (str.length >= 3) {
        if (str.slice(-3) === 'ing') {
            return str + 'ly';
        } else {
            return str + 'ing';
        }
    } else {
        return str;
    }
}

console.log(verbing("play")); // "playing"
console.log(verbing("playing")); // "playingly"
console.log(verbing("go")); // "go")