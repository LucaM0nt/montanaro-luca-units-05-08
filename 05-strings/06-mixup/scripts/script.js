/**
 * @file script.js
 * @description This file contains the JavaScript code for the Mixup exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function mixup takes two string parameters and swaps the first character of each string.
 * 
 * function mixup - Swaps the first character of each input string and concatenates the results.
 * 
 * The mixup function takes two parameters: str1 and str2.
 * It returns a new string with the first characters of str1 and str2 swapped.
 */

/**
 * This function swaps the first character of each input string and concatenates the results.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} - The new string with the first characters of str1 and str2 swapped.
 * @example
 * console.log(mixup('ciao', 'gatto')); // giao catto
 * console.log(mixup('hello', 'world')); // wello horld
 */
function mixup(str1, str2) {
  return str1.slice(0, 1) + str2.slice(1) + ' ' + str2.slice(0, 1) + str1.slice(1);
}

console.log(mixup('ciao', 'gatto')); // giao catto
console.log(mixup('hello', 'world')); // wello horld