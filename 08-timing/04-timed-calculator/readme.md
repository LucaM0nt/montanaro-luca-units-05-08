# Timed Calculator ⏳

This exercise demonstrates how to perform a series of calculations with delays between each step using `setTimeout`. The script reuses helper functions from a previous exercise to perform the calculations.

## Assignment 📝

> - We will modify ‘Calculator’ exercise from the lesson about functions
> - Rewrite the last function that performs all 4 operations so that there is a delay of 3 seconds between one operation and the next

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

### `halfNumber`

- **Description**: Calculates half of a number and logs the result.
- **Parameters**:
  - `num` (number): The number to be halved.
- **Returns**: Half of the number.
- **Example**:
  ```javascript
  halfNumber(10); // Logs "Half of 10 is 5" and returns 5
  ```

### `percentOf`

- **Description**: Calculates the percentage of one number relative to another and logs the result.
- **Parameters**:
  - `num1` (number): The first number.
  - `num2` (number): The second number.
- **Returns**: The percentage of the first number relative to the second number.
- **Example**:
  ```javascript
  percentOf(2, 4); // Logs "2 is 50.00% of 4" and returns 50.00
  ```

### `areaOfCircle`

- **Description**: Calculates the area of a circle based on the provided radius and logs the result.
- **Parameters**:
  - `radius` (number): The radius of the circle.
- **Returns**: The area of the circle.
- **Example**:
  ```javascript
  areaOfCircle(5); // Logs "The area for a circle with radius 5 is 78.54" and returns 78.54
  ```

### `calculator`

- **Description**: Performs a series of calculations using the helper functions. Each step is executed with a delay using `setTimeout`.
- **Parameters**:
  - `num` (number): The number to be used in the calculations.
- **Returns**: `void`
- **Example**:
  ```javascript
  calculator(4);
  // Logs:
  // Halving the number...
  // Half of 4 is 2
  // Squaring the halved number...
  // The result of squaring the number 2 is 4
  // Calculating area of circle...
  // The area for a circle with radius 4 is 50.27
  // Doing the percentage...
  // 4 is 100.00% of 4
  ```

## Variables Table 📊

| Variable Name | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `half`        | Stores the result of halving the input number.                              |
| `squared`     | Stores the result of squaring the halved number.                            |
| `area`        | Stores the area of a circle calculated using the squared result as radius.  |
| `percentage`  | Stores the percentage of the area relative to the squared result.           |

## Example Output 📤

When the script is executed with `calculator(4)`, the following output is logged to the console with delays between each step:

```
Halving the number...
Half of 4 is 2
Squaring the halved number...
The result of squaring the number 2 is 4
Calculating area of circle...
The area for a circle with radius 4 is 50.27
Doing the percentage...
4 is 100.00% of 4
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)