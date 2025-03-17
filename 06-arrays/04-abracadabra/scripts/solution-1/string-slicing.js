/**
 * @file string-slicing.js
 * @description This file contains the JavaScript code for replacing a character in a string using the slice method.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of the slice method in JavaScript to replace a character in a string.
 * The function `replaceWithSlice` takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 * 
 * function replaceWithSlice - Replaces a character in a string using the slice method.
 * 
 * The replaceWithSlice function takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 */

/**
 * Replaces a character in a string using the slice method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * replaceWithSlice("Abracadabra", 3, "X"); // "AbrXcadabra"
 */
function replaceWithSlice(str, index, replacement) {
    return str.slice(0, index) + replacement + str.slice(index + 1);
}
console.log("This is the result of the replaceWithSlice function:");
console.log(replaceWithSlice("Abracadabra", 3, "X")); // "AbrXcadabra"