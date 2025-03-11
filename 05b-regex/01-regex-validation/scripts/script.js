/**
 * @file script.js
 * @description This file contains the JavaScript code for the Regex Validation exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of regular expressions in JavaScript.
 * 
 * The function validateEmail takes an email string and checks if it is a valid email format.
 * The function validatePhoneNumber takes a phone number string and checks if it is a valid phone number format.
 * The function validatePassword takes a password string and checks if it meets the specified criteria.
 * The function validateURL takes a URL string and checks if it is a valid URL format.
 * 
 * The validateEmail function takes one parameter: email.
 * It returns true if the email is in a valid format, false otherwise.
 * 
 * The validatePhoneNumber function takes one parameter: phoneNumber.
 * It returns true if the phone number is in a valid format, false otherwise.
 * 
 * The validatePassword function takes one parameter: password.
 * It returns true if the password meets the specified criteria, false otherwise.
 * 
 * The validateURL function takes one parameter: url.
 * It returns true if the URL is in a valid format, false otherwise.
 */

/**
 * This function validates the email format.
 * @param {string} email - The email to be validated.
 * @returns {boolean} - True if the email is in a valid format, false otherwise.
 * @example
 * console.log(validateEmail("test@example.com")); // true
 */
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
}

/**
 * This function validates the phone number format.
 * @param {string} phoneNumber - The phone number to be validated.
 * @returns {boolean} - True if the phone number is in a valid format, false otherwise.
 * @example
 * console.log(validatePhoneNumber("+1-800-555-5555")); // true
 */
function validatePhoneNumber(phoneNumber) {
    return /^(\+?\d{1,3}[-.\s]?)?\d{1,4}([-.\s]?\d{1,4}){1,3}$/.test(phoneNumber);
}

/**
 * This function validates the password format.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password meets the specified criteria, false otherwise.
 * @example
 * console.log(validatePassword("Password1!")); // true
 */
function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}

/**
 * This function validates the URL format.
 * @param {string} url - The URL to be validated.
 * @returns {boolean} - True if the URL is in a valid format, false otherwise.
 * @example
 * console.log(validateURL("https://www.example.com/path?query=string#fragment")); // true
 */
function validateURL(url) {
    return /^(https?:\/\/)?([\w.-]+)\.[a-zA-Z]{2,}([\/?#][^\s]*)?$/.test(url);
}

// Test examples
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("test@example")); // false
console.log(validatePhoneNumber("+1-800-555-5555")); // true
console.log(validatePhoneNumber("800-555-5555")); // true
console.log(validatePhoneNumber("555-5555a")); // false
console.log(validatePassword("Password1!")); // true
console.log(validatePassword("password1!")); // false
console.log(validateURL("https://www.example.com/path?query=string#fragment")); // true
console.log(validateURL("www.example.com")); // true
console.log(validateURL("example.com")); // false