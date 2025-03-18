/**
 * @file string-to-array.js
 * @description This file contains the JavaScript code for replacing a character in a string using the array method.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This exercise demonstrates the use of converting a string to an array in JavaScript to replace a character.
 * The function `replaceWithArray` takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 *
 * function replaceWithArray - Replaces a character in a string by converting it to an array.
 *
 * The replaceWithArray function takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 */

/**
 * Replaces a character in a string by converting it to an array.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithArray("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithArray(str, index, replacement) {
  let arr = str.split("");
  arr[index] = replacement;
  return arr.join("");
}

console.log("This is the result of the replaceWithArray function:");
console.log(replaceWithArray("Abracadabra", 3, "X")); // "AbrXcadabra"
