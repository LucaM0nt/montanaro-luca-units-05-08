/**
 * @file script-base.js
 * @description This file contains the JavaScript code for the Palindrome exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function reverse is reused from the previous exercise (02-reverse) to reverse a string.
 * The function isPalindrome takes a string parameter and checks if it is a palindrome.
 * 
 * function reverse - Reverses the input string and returns it.
 * function isPalindrome - Checks if the input string is a palindrome.
 * 
 * The reverse function takes one parameter: str.
 * It returns the reversed string.
 * 
 * The isPalindrome function takes one parameter: str.
 * It returns true if the string is a palindrome, false otherwise.
 */

/**
 * This function reverses the input string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 * @example
 * console.log(reverse("Hello World")); // "dlroW olleH"
 */
function reverse(str){
    return(str.split('').reverse().join(''))
};

/**
 * This function checks if the input string is a palindrome.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 * @example
 * console.log(isPalindrome("madam")); // true
 * console.log(isPalindrome("hello")); // false
 */
function isPalindrome(str){
    return str === reverse(str)
};

console.log("The following is the output of the script-base.js file:");
// Calling the function with different arguments to get different reversed strings.
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false