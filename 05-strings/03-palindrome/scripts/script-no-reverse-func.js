/**
 * @file script-no-reverse-func.js
 * @description This file contains the JavaScript code for the Palindrome exercise without using the reverse function.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function isPalindrome takes a string parameter and checks if it is a palindrome without using the reverse function.
 * 
 * function isPalindrome - Checks if the input string is a palindrome without using the reverse function.
 * 
 * The isPalindrome function takes one parameter: str.
 * It returns true if the string is a palindrome, false otherwise.
 */

/**
 * This function checks if the input string is a palindrome without using the reverse function.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 * @example
 * console.log(isPalindrome("madam")); // true
 * console.log(isPalindrome("hello")); // false
 */
function isPalindrome(str){
    let strToCheck = str.split('').reverse().join('');
    return str === strToCheck;
}

console.log("The following is the output of the script-no-reverse-func.js file:");
// Calling the function with different arguments to get different reversed strings.
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false