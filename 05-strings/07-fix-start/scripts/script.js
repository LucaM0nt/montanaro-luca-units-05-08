/**
 * @file script.js
 * @description This file contains the JavaScript code for the FixStart exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function fixStart takes a string parameter and replaces all occurrences of its first character (except the first one) with '*'.
 * 
 * function fixStart - Replaces all occurrences of the first character in the input string (except the first one) with '*'.
 * 
 * The fixStart function takes one parameter: str.
 * It returns the modified string with '*' replacing all occurrences of the first character except the first one.
 */

/**
 * This function replaces all occurrences of the first character in the input string (except the first one) with '*'.
 * @param {string} str - The string to be modified.
 * @returns {string} - The modified string with '*' replacing all occurrences of the first character except the first one.
 * @example
 * console.log(fixStart('babble')); // ba**le
 * console.log(fixStart('aardvark')); // a*rdv*rk
 */
function fixStart(str) {
    let firstLetter = str.charAt(0);
    let result = firstLetter;

    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) === firstLetter) {
            result += '*';
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(fixStart('babble')); // ba**le
console.log(fixStart('google')); // goo*le
console.log(fixStart('apple')); // apple
console.log(fixStart('alaska')); // al*sk*
console.log(fixStart('tattoo')); // tat**o