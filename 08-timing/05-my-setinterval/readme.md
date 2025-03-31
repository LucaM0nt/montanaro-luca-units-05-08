# My setInterval⏳

This exercise demonstrates how to create a custom implementation of `setInterval` using `setTimeout`. It also includes a corresponding `clearMyInterval` function to stop the repeated execution. Additionally, the `setMyInterval` function now supports an optional parameter to specify how many times the interval should execute.

## Assignment 📝

> - Pretend that setInterval() doesn't exist
> - Re-create it using setTimeout naming your function mySetInterval
> - Test your new function
> - Modify your function so that it automatically stops after 15 intervals

## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `setMyInterval`

- **Description**: Creates a custom interval that repeatedly executes a callback function after a specified delay. Optionally, the number of executions can be limited.
- **Parameters**:
  - `callback` (Function): The function to be executed repeatedly.
  - `delay` (number): The delay in milliseconds between each execution of the callback.
  - `times` (number, optional): The number of times the callback should be executed. Defaults to `Infinity`.
- **Returns**: An object containing the interval ID, which can be used to clear the interval.
- **Example**:
  ```javascript
  const myIntervalId = setMyInterval(() => console.log("Hello"), 2000, 15); // Logs "Hello" 15 times
  ```

### `clearMyInterval`

- **Description**: Stops a custom interval created by `setMyInterval`.
- **Parameters**:
  - `interval` (Object): The interval object returned by `setMyInterval`.
- **Returns**: `void`
- **Example**:
  ```javascript
  const myIntervalId = setMyInterval(() => console.log("Hello"), 2000, 10);
  setTimeout(() => clearMyInterval(myIntervalId), 10000); // Stops the interval after 10 seconds
  ```

### `sayHello`

- **Description**: Logs "Hello" to the console.
- **Returns**: `void`
- **Example**:
  ```javascript
  sayHello(); // Logs "Hello"
  ```

## Variables Table 📊

| Variable Name | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `interval`    | An object containing the ID of the timeout used to simulate the interval.   |
| `myIntervalId`| The interval object returned by `setMyInterval`, used to clear the interval.|
| `count`       | Tracks the number of times the callback has been executed.                 |

## Example Output 📤

When the script is executed, the following output is logged to the console:

```
Hello
Hello
Hello
Hello
Hello
```

If the `times` parameter is set to 5, the interval stops after 5 executions.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)