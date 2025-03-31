# Format Date 📅

This exercise demonstrates how to format a date into a human-readable string based on the time difference from the current date. Two approaches are explored: using `toLocaleString` and a custom `pad2Digits` function, and are n 2 different files.

## Assignment 📝

> Write a function formatDate(date) that accepts a date and outputs it as follows:
> - If less than a second has passed since the date, output "right now"
> - If less than a minute has passed since the date, output "n sec. ago"
> - If less than an hour has passed since the date, output "m min. ago"
> - Otherwise, output the date in this format "DD.MM.YY HH:mm"
>   - e.g. 17.04.16 10:00


## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The scripts in `script-localestring.js` and `script-padstart.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `formatDate` (script-localestring.js)

- **Description**: Formats a date into a human-readable string using `toLocaleString` with the `'en-GB'` locale.
- **Parameters**:
  - `date` (Date): The date to format.
- **Returns**: A formatted string representing the time difference or the date in `'DD.MM.YY HH:mm'` format.
- **Example**:
  ```javascript
  console.log(formatDate(new Date(new Date() - 500))); // "right now"
  console.log(formatDate(new Date(new Date() - 30000))); // "30 sec. ago"
  console.log(formatDate(new Date(new Date() - 1800000))); // "30 min. ago"
  console.log(formatDate(new Date('2024-03-26T14:30:00'))); // e.g. "26.03.24 14:30"
  ```

### `formatDate` (script-padstart.js)

- **Description**: Formats a date into a human-readable string using a custom `pad2Digits` function to ensure two-digit formatting for day, month, hours, and minutes.
- **Parameters**:
  - `date` (Date): The date to format.
- **Returns**: A formatted string representing the time difference or the date in `'DD.MM.YY HH:mm'` format.
- **Example**:
  ```javascript
  console.log(formatDate(new Date(new Date() - 500))); // "right now"
  console.log(formatDate(new Date(new Date() - 30000))); // "30 sec. ago"
  console.log(formatDate(new Date(new Date() - 1800000))); // "30 min. ago"
  console.log(formatDate(new Date('2024-03-26T14:30:00'))); // e.g. "26.03.24 14:30"
  ```

## Variables Table 📊

| Script              | Variable Name | Description                                                                 |
|---------------------|---------------|-----------------------------------------------------------------------------|
| `script-localestring.js` | `now`        | The current date and time.                                                 |
| `script-localestring.js` | `diff`       | The difference in seconds between the current date and the input date.     |
| `script-padstart.js` | `pad2Digits`  | A helper function to pad numbers with leading zeros to ensure two digits.  |

## Example Output 📤

When either script is executed, the following output is logged to the console:

```
right now
30 sec. ago
30 min. ago
26.03.24 14:30
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)