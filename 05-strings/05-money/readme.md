# Money 💱

This exercise demonstrates the use of string manipulation and basic arithmetic operations in JavaScript. The `dollarsConverter` function takes a dollar amount and converts it to euros. The `money` function takes a dollar amount and returns a string describing the conversion to euros.

## Assignment 📝

> 1. Create a function called money
> 2. It should take a single parameter, an amount, and return '<amount> dollars'
> 3. Add a smiley at the end if the amount is 1 million. Deal with edge cases
> **Bonus:** add to the function the ability to convert dollars to euros

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

| Function                  | Description                                                                                           | Output                                                   |
|---------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `dollarsConverter(dollarsAmount)` | This function converts the provided dollar amount to euros.                                    | Returns the equivalent amount in euros or 'Invalid input' if the input is invalid.    |
| `money(amount)`           | This function returns a string describing the conversion of the provided dollar amount to euros.      | Returns a string describing the conversion of the amount to euros or 'Invalid input' if the input is invalid. |


## Example Output 📜

### `dollarsConverter`

```javascript
console.log(dollarsConverter(100)); // 91
```

### `money`

```javascript
console.log(money(100)); // "100 dollars are 91 euros"
console.log(money(1)); // "1 dollar is 0.91 euros"
console.log(money(1000001)); // "1000001 dollars are 910000.91 euros ;)"
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)