# Seconds Calculator ⏳

This exercise demonstrates how to calculate the number of seconds that have passed today and the number of seconds remaining until tomorrow using the `Date` object in JavaScript.

## Assignment 📝

> Write two functions that based on the current date and time output the number of seconds:
> - getSecondsToday() returns the number of seconds from the beginning of today
> - getSecondsToTomorrow() returns the number of seconds till tomorrow


## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `getSecondsToday`

- **Description**: Calculates the number of seconds that have passed since the start of the current day.
- **Returns**: A string indicating the number of seconds that have passed today.
- **Example**:
  ```javascript
  console.log(getSecondsToday()); // Logs "X seconds have passed today."
  ```

### `getSecondsToTomorrow`

- **Description**: Calculates the number of seconds remaining until the start of the next day.
- **Returns**: A string indicating the number of seconds left until tomorrow.
- **Example**:
  ```javascript
  console.log(getSecondsToTomorrow()); // Logs "There are X seconds left until tomorrow."
  ```

## Variables Table 📊

| Variable Name       | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `now`               | The current date and time.                                                 |
| `today`             | A `Date` object representing the start of the current day (midnight).      |
| `tomorrow`          | A `Date` object representing the start of the next day (midnight).         |
| `secondsToday`      | The number of seconds that have passed since the start of the current day. |
| `secondsToTomorrow` | The number of seconds remaining until the start of the next day.           |

## Example Output 📤

When the script is executed, the following output is logged to the console:

```
X seconds have passed today.
There are Y seconds left until tomorrow.
```

For example, if the current time is 15:30:00:

```
55800 seconds have passed today.
30600 seconds left until tomorrow.
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)