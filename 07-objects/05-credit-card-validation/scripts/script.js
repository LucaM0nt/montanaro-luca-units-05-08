/**
 * @file script.js
 * @description This file contains the JavaScript code for validating credit card numbers.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of objects, strings, and arrays in JavaScript to validate credit card numbers.
 * The `validateCreditCard` function checks if a credit card number meets specific criteria:
 * - It must contain exactly 16 digits.
 * - The last digit must be even.
 * - The sum of all digits must be greater than 16.
 * - All digits cannot be the same.
 * 
 * function validateCreditCard - Validates a credit card number based on the above criteria.
 * 
 * The validateCreditCard function takes a credit card number as a parameter.
 * It returns an object containing the credit card number, its validity, and any errors found during validation.
 */

/**
 * Validates a credit card number based on specific criteria.
 * @param {string} creditCard - The credit card number to validate.
 * @returns {void} - Logs the validation result to the console.
 * @example
 * validateCreditCard("9999-7777-8888-0000");
 * validateCreditCard("6666/6666/6666/1666");
 */
function validateCreditCard(creditCard) {
  /**
   * Object to store validation results.
   * @type {Object}
   * @property {string} number - The original credit card number.
   * @property {boolean} isValid - Whether the credit card number is valid.
   * @property {string} error - Any errors found during validation.
   */
  let creditCardValidation = {
    number: creditCard,
    isValid: true,
    error: "",
  };

  // Remove all non-digit characters
  const creditCardNumber = creditCard.replace(/\D/g, "");

  // Check if the credit card number has 16 digits
  if (creditCardNumber.length !== 16) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += `Credit card number must be 16 digits, all of them must be numbers.\n`;
  }

  // Check if the last digit is even
  if (creditCardNumber[creditCardNumber.length - 1] % 2 !== 0) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += "The final digit must be even.\n";
  }

  // Check if the sum of all digits is greater than 16
  let sum = 0;
  creditCardNumber.split("").forEach((digit) => {
    sum += parseInt(digit);
  });
  if (sum <= 16) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += `The sum of all digits must be greater than 16.\n`;
  }

  // Check if all digits are not the same
  const uniqueDigits = new Set(creditCardNumber);
  if (uniqueDigits.size === 1) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += "All digits cannot be the same.\n";
  }

  // If no errors, set a success message
  if (creditCardValidation.error === "") {
    creditCardValidation.error = "No errors, credit card number is valid.\n";
  }

  // Log the validation result
  const message = `
  ================================================
  = number : ${creditCardValidation.number}
  = isValid : ${creditCardValidation.isValid}
  = error : ${creditCardValidation.error.trim()}
  ================================================
  `;
  console.log(message);
}

// Example usage
validateCreditCard("9999-7777-8888-0000");
validateCreditCard("6666/6666/6666/1666");
validateCreditCard("a92332119c011112");
validateCreditCard("4444444444444444");
validateCreditCard("1111111111111110");
validateCreditCard("6666~6546~6666~3331");
validateCreditCard("aaaa-bbbb-cccc-dddd");