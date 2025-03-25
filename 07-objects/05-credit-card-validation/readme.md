# Credit Card Validation Exercise 💳

This exercise demonstrates how to validate credit card numbers in JavaScript using objects, strings, and arrays. The script checks if a credit card number meets specific criteria and logs the validation results.

## Assignment 📝

> 1. Write a function called “validateCreditCard” that checks credit card
numbers according to the following rules:
> - Number must be 16 digits, all of them must be numbers
> - You must have at least two different digits represented (all of the digits cannot be the same)
> - The final digit must be even
> - The sum of all the digits must be greater than 16
> 2. The following credit card numbers are valid:
> - 9999-9999-8888-0000
> - 6666-6666-6666-1666
> 3. The following credit card numbers are invalid:
> - a923-3211-9c01-1112 invalid characters
> - 4444-4444-4444-4444 only one type of number
> - 1111-1111-1111-1110 sum less than 16
> - 6666-6666-6666-6661 odd final number  
>  
> **Hint**  
> - Remove the dash '-' from the input string before checking if the input credit card number is valid

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functionality 📋

### File: `script.js`

**Purpose**: Validates credit card numbers based on specific criteria.

**Key Features**:
1. **Validation Criteria**:
   - The credit card number must contain exactly 16 digits.
   - The last digit must be even.
   - The sum of all digits must be greater than 16.
   - All digits cannot be the same.

2. **Validation Results**:
   - The function returns an object containing:
     - The original credit card number.
     - A boolean indicating whether the number is valid.
     - A string describing any errors found during validation.

3. **Logging**:
   - The validation results are logged to the console in a formatted message.

## Example Output 📤

```js
validateCreditCard("9999-7777-8888-0000");
validateCreditCard("4444444444444444");
```

When the script is executed, the following output is logged to the console:

```
================================================
= number : 9999-7777-8888-0000
= isValid : true
= error : No errors, credit card number is valid.
================================================

================================================
= number : 4444444444444444
= isValid : false
= error : All digits cannot be the same.
================================================
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)