/**
 * @file regex-replace.js
 * @description This file contains the JavaScript code for replacing a character in a string using the regex method.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This exercise demonstrates the use of regular expressions in JavaScript to replace a character in a string.
 * The function `replaceWithRegex` takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 *
 * function replaceWithRegex - Replaces a character in a string using the regex method.
 *
 * The replaceWithRegex function takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 */

/**
 * Replaces a character in a string using the regex method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithRegex("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithRegex(str, index, replacement) {
  return str.replace(new RegExp(`(.{${index}}).`), `$1${replacement}`);
}

console.log("This is the result of the replaceWithRegex function:");
console.log(replaceWithRegex("Abracadabra", 3, "X")); // "AbrXcadabra"
