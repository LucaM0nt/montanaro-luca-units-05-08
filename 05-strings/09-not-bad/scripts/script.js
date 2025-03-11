/**
 * @file script.js
 * @description This file contains the JavaScript code for the Not Bad exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function notBad takes a string parameter and replaces the substring 'not ... bad' with 'good' if 'not' appears before 'bad'.
 * 
 * function notBad - Replaces the substring 'not ... bad' with 'good' if 'not' appears before 'bad'.
 * 
 * The notBad function takes one parameter: str.
 * It returns the modified string with 'not ... bad' replaced by 'good' if 'not' appears before 'bad'.
 */

/**
 * This function replaces the substring 'not ... bad' with 'good' if 'not' appears before 'bad'.
 * @param {string} str - The string to be modified.
 * @returns {string} - The modified string with 'not ... bad' replaced by 'good' if 'not' appears before 'bad'.
 * @example
 * console.log(notBad('This dinner is not that bad!')); // "This dinner is good!"
 * console.log(notBad('This movie is not so bad.')); // "This movie is good."
 * console.log(notBad('This tea is not hot.')); // "This tea is not hot."
 */
function notBad(str) {
  let notIndex = str.search('not');
  let badIndex = str.search('bad');

  if (notIndex < badIndex) {
    return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
  }

  return str;
}