# Not Bad Exercise 👌

This exercise demonstrates the use of string manipulation in JavaScript. The `notBad` function takes a string parameter and replaces the substring 'not ... bad' with 'good' if 'not' appears before 'bad'.

## Assignment 📝

> - Create a function called notBad that takes a single parameter, a string
> - It should find the first appearance of the substring 'not' and 'bad'
> - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
'good' and return the result
> - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
sentence


## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `notBad(str)`

- **Description**: This function replaces the substring 'not ... bad' with 'good' if 'not' appears before 'bad'.

| File                      | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| `script.js`               | Contains the `notBad` function which replaces the substring 'not ... bad' with 'good' if 'not' appears before 'bad'. |

- **Output**: Returns the modified string with 'not ... bad' replaced by 'good' if 'not' appears before 'bad'.

## Example Output 📜

### `notBad`

```javascript
console.log(notBad('This dinner is not that bad!')); // "This dinner is good!"
console.log(notBad('This movie is not so bad.')); // "This movie is good."
console.log(notBad('This tea is not hot.')); // "This tea is not hot."
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)