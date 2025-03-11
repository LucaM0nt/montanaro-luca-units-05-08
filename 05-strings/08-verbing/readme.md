# Verbing Exercise 🏃‍♂️

This exercise demonstrates the use of string manipulation in JavaScript. The `verbing` function takes a string parameter and modifies it according to specific rules.

## Assignment 📝

> - Create a function called verbing
> - It should take a single parameter, a string. If its length is at least 3, it should add 'ing' to
its end, unless it already ends in 'ing', in which case it should add 'ly' instead
> - If the string length is less than 3, it should leave it unchanged

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `verbing(str)`

- **Description**: This function modifies the input string based on its length and ending.

| File                      | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| `script.js`               | Contains the `verbing` function which modifies the input string based on its length and ending. |

- **Output**: Returns the modified string based on the following rules:
  - If the string length is at least 3 and it ends with 'ing', 'ly' is added to the end.
  - If the string length is at least 3 and it does not end with 'ing', 'ing' is added to the end.
  - If the string length is less than 3, the string is returned unchanged.

## Example Output 📜

### `verbing`

```javascript
console.log(verbing("play")); // "playing"
console.log(verbing("playing")); // "playingly"
console.log(verbing("go")); // "go"
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)