/**
 * @file for-loop.js
 * @description This file contains the JavaScript code for replacing a character in a string using a for loop.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of a for loop in JavaScript to replace a character in a string.
 * The function `replaceWithForLoop` takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 * 
 * function replaceWithForLoop - Replaces a character in a string using a for loop.
 * 
 * The replaceWithForLoop function takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 */

/**
 * Replaces a character in a string using a for loop.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithForLoop("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithForLoop(str, index, replacement) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += i === index ? replacement : str.charAt(i);
    }
    return result;
}

console.log("This is the result of the replaceWithForLoop function:");
console.log(replaceWithForLoop("Abracadabra", 3, "X")); // "AbrXcadabra"