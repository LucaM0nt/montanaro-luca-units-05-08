# Palindrome 🔄

This exercise demonstrates the use of string manipulation in JavaScript. The `isPalindrome` function takes a string parameter and checks if it is a palindrome.

## Assignment 📝

> 1. Using your reverse() function from the previous exercise, write a simple function to check if a
string is a palindrome
> 2. A palindrome is a word that reads the same backwards as forwards. For example, the word "madam"
is a palindrome
> 3. Write a JavaScript function called isPalindrome which has one parameter, a string, and which
returns true if that string is a palindrome, else false
> 4. For example, the call isPalindrome("madam") should return true, while isPalindrome("madame")
should return false  
> **Bonus:** Try to write the same function without using the reverse() function

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `isPalindrome(str)`

- **Description**: This function checks if the provided string is a palindrome. The function has been written in different ways in different files.

| File                      | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| `script-no-reverse-func.js` | Checks if the string is a palindrome without using the `reverse` function.  |
| `script-base.js`          | Checks if the string is a palindrome using the `reverse` function from exercise 02-reverse. |

- **Output**: Returns `true` if the string is a palindrome, `false` otherwise.

## Example Output 📜

### `script-no-reverse-func.js`

```javascript
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

### `script-base.js`

```javascript
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)