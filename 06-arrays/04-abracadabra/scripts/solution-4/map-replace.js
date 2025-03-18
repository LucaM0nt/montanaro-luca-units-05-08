/**
 * @file map-replace.js
 * @description This file contains the JavaScript code for replacing a character in a string using the map method.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This exercise demonstrates the use of the map method in JavaScript to replace a character in a string.
 * The function `replaceWithMap` takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 *
 * function replaceWithMap - Replaces a character in a string using the map method.
 *
 * The replaceWithMap function takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 */

/**
 * Replaces a character in a string using the map method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithMap("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithMap(str, index, replacement) {
  return [...str]
    .map((char, i) => (i === index ? replacement : str.charAt(i)))
    .join("");
}

console.log("This is the result of the replaceWithMap function:");
console.log(replaceWithMap("Abracadabra", 3, "X")); // "AbrXcadabra"
