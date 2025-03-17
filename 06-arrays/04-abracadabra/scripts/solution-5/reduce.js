/**
 * @file reduce.js
 * @description This file contains the JavaScript code for replacing a character in a string using the reduce method.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of the reduce method in JavaScript to replace a character in a string.
 * The function `replaceWithReduce` takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 * 
 * function replaceWithReduce - Replaces a character in a string using the reduce method.
 * 
 * The replaceWithReduce function takes three parameters: str, index, and replacement.
 * It returns a new string with the character at the specified index replaced by the replacement character.
 */

/**
 * Replaces a character in a string using the reduce method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithReduce("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithReduce(str, index, replacement) {
    return [...str].reduce((acc, _, i) => acc + (i === index ? replacement : str.charAt(i)), '');
}

console.log("This is the result of the replaceWithReduce function:");
console.log(replaceWithReduce("Abracadabra", 3, "X")); // "AbrXcadabra"