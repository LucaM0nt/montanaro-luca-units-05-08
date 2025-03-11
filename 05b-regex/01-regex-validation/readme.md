# Regex Validation Exercise ✅

This exercise demonstrates the use of regular expressions in JavaScript. The `validateEmail` function takes an email string and checks if it is a valid email format. The `validatePhoneNumber` function takes a phone number string and checks if it is a valid phone number format. The `validatePassword` function takes a password string and checks if it meets the specified criteria. The `validateURL` function takes a URL string and checks if it is a valid URL format.

## Assignment 📝

> Write regular expressions to validate the following inputs
> 1. Email Address
> Expected pattern: [any characters]@[any characters].[2-4 letters]
> 2. Phone Number
> Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]
> 3. Password
> Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character]
> 4. URL
> Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query string]#[optional fragment]
> **Note**: Invent multiple test cases to thoroughly test your regular expressions

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

| Function                  | Description                                                                                           | Output                                                   | Example Output |
|---------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------|
| `validateEmail(email)`    | This function validates the email format.                                                             | Returns `true` if the email is in a valid format, `false` otherwise.    | `console.log(validateEmail("test@example.com")); // true` |
| `validatePhoneNumber(phoneNumber)` | This function validates the phone number format.                                              | Returns `true` if the phone number is in a valid format, `false` otherwise. | `console.log(validatePhoneNumber("+1-800-555-5555")); // true` |
| `validatePassword(password)` | This function validates the password format.                                                        | Returns `true` if the password meets the specified criteria, `false` otherwise. | `console.log(validatePassword("Password1!")); // true` |
| `validateURL(url)`        | This function validates the URL format.                                                               | Returns `true` if the URL is in a valid format, `false` otherwise. | `console.log(validateURL("https://www.example.com/path?query=string#fragment")); // true` |

## Example Output 📜

### `validateEmail`

```javascript
console.log(validateEmail("test@example.com")); // true
```

### `validatePhoneNumber`

```javascript
console.log(validatePhoneNumber("+1-800-555-5555")); // true
```

### `validatePassword`

```javascript
console.log(validatePassword("Password1!")); // true
```

### `validateURL`

```javascript
console.log(validateURL("https://www.example.com/path?query=string#fragment")); // true
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)