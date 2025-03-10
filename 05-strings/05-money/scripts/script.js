/**
 * @file script.js
 * @description This file contains the JavaScript code for the Money conversion exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation and basic arithmetic operations in JavaScript.
 * The function dollarsConverter takes a dollar amount and converts it to euros.
 * The function money takes a dollar amount and returns a string describing the conversion to euros.
 * 
 * function dollarsConverter - Converts the input dollar amount to euros.
 * function money - Returns a string describing the conversion of the input dollar amount to euros.
 * 
 * The dollarsConverter function takes one parameter: dollarsAmount.
 * It returns the equivalent amount in euros.
 * 
 * The money function takes one parameter: amount.
 * It returns a string describing the conversion of the amount to euros.
 */

/**
 * This function converts the input dollar amount to euros.
 * @param {number} dollarsAmount - The amount in dollars to be converted.
 * @returns {number} - The equivalent amount in euros or 'Invalid input' if the input is invalid.
 * @example
 * console.log(dollarsConverter(100)); // 91
 */
function dollarsConverter(dollarsAmount) {
    if (typeof dollarsAmount !== 'number') {
        return 'Invalid input';
    } else if (dollarsAmount <= 0) {
        return 'Invalid input';
    } else {
        const euroAmount = dollarsAmount * 0.91;
        return euroAmount;
    }
}

/**
 * This function returns a string describing the conversion of the input dollar amount to euros.
 * @param {number} amount - The amount in dollars to be converted.
 * @returns {string} - A string describing the conversion of the amount to euros or 'Invalid input' if the input is invalid.
 * @example
 * console.log(money(100)); // "100 dollars are 91 euros"
 * console.log(money(1)); // "1 dollar is 0.91 euros"
 * console.log(money(1000001)); // "1000001 dollars are 910000.91 euros ;)"
 */
function money(amount) {
    if (typeof amount !== 'number') {
        return 'Invalid input';
    } else if (amount <= 0) {
        return 'Invalid input';
    } else if (amount === 1) {
        return `${amount} dollar is ${amount * 0.91} euros`;
    } else if (amount > 1000000) {
        return `${amount} dollars are ${amount * 0.91} euros ;)`;
    } else {
        return `${amount} dollars are ${amount * 0.91} euros`;
    }
}

console.log(money(100)); // 100 dollars are 91 euros
console.log(money(1)); // 1 dollar is 0.91 euros
console.log(money(1000001)); // 1000001 dollars are 910000.91 euros ;)