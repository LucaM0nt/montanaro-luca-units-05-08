# Oh No, You Don't! ⏳

This exercise demonstrates how to use `setTimeout` and `clearTimeout` to schedule and cancel a delayed function execution.

## Assignment 📝

> - Write a function “useful” that does something useful in Javascript
> - Schedule it to run after 10 seconds
> - Write another function that cancels the scheduling of the first function
> - Use the second function to cancel the first one after 5 seconds and output ‘function cancelled’ to the console

## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `squareNumber`

- **Description**: Calculates the square of a number and logs the result.
- **Parameters**:
  - `num` (number): The number to be squared.
- **Returns**: The square of the number.
- **Example**:
  ```javascript
  squareNumber(4); // Logs "The result of squaring the number 4 is 16" and returns 16
  ```

### `cancelTimer`

- **Description**: Cancels the timer set for the `squareNumber` function and logs a message.
- **Returns**: `void`
- **Example**:
  ```javascript
  cancelTimer(); // Logs "Timer canceled!"
  ```

## Variables Table 📊

| Variable Name | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `timerId`     | The ID of the timer created by `setTimeout` to execute `squareNumber`.      |

## Example Output 📤

When the script is executed, the following output is logged to the console:

```
Timer canceled!
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)