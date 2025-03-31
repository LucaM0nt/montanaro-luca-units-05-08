# Timed Conversion 🌡️

This exercise demonstrates how to convert temperatures from Celsius to Fahrenheit and log the results with a delay. Two approaches are explored: using `setTimeout` and `setInterval`.

## Assignment 📝

> - We will modify ‘Temperature conversion’ exercise from the lesson about
functions
> - Call celsiusToFahrenheit on temperatures from 0 to 100 so that one
temperature is printed to the console every second
>   - Use setInterval to achieve this goal.
>   - Do the same thing using setTimeout.

## Usage 🛠️

1. Open the local [`index-interval-variant.html`](index-timeout-variant.html) or the local [`index-interval-variant.html`](index-interval-variant.html) file in a web browser.
2. The scripts in `script-timeout.js` and `script-interval.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `celsiusToFahrenheit`

- **Description**: Converts a temperature from Celsius to Fahrenheit and logs the result.
- **Parameters**:
  - `celsius` (number): The temperature in Celsius.
- **Returns**: `void`
- **Example**:
  ```javascript
  celsiusToFahrenheit(30); // Logs "30°C is 86°F"
  ```

### `script-timeout.js`

- **Description**: Uses `setTimeout` to log the conversion for each Celsius degree from 0°C to 100°C with a delay of 1 second per degree.
- **Key Features**:
  - A loop schedules the conversion for each degree using `setTimeout`.
  - A `timer` variable is used to calculate the delay for each `setTimeout` call.
- **Example**:
  ```javascript
  for (let celsius = 0; celsius <= 100; celsius++) {
      let timer = celsius * 1000;
      setTimeout(celsiusToFahrenheit, timer, celsius);
  }
  ```

### `script-interval.js`

- **Description**: Uses `setInterval` to log the conversion for each Celsius degree from 0°C to 100°C at regular intervals of 1 second.
- **Key Features**:
  - An `intervalID` is used to track the interval.
  - The interval stops automatically when the Celsius value exceeds 100°C.
- **Example**:
  ```javascript
  let celsius = 0;
  let intervalID = setInterval(() => {
      celsiusToFahrenheit(celsius);
      celsius++;
      if (celsius > 100) {
          clearInterval(intervalID);
      }
  }, 1000);
  ```

## Variables Table 📊

| Script              | Variable Name | Description                                                                 |
|---------------------|---------------|-----------------------------------------------------------------------------|
| `script-timeout.js` | `timer`       | A variable used to calculate the delay for each `setTimeout` call.          |
| `script-interval.js`| `celsius`     | Tracks the current Celsius degree being logged.                             |
| `script-interval.js`| `intervalID`  | The ID of the interval created by `setInterval`.                            |

## Example Output 📤

When either script is executed, the following output is logged to the console (one item per second):

```
0°C is 32°F
1°C is 33.8°F
2°C is 35.6°F
...
100°C is 212°F
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)