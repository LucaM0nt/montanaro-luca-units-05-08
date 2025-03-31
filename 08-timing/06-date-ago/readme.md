# Date Ago 📅

This exercise demonstrates how to calculate the day of the month for a given date by subtracting a specified number of days using the `Date` object in JavaScript.

## Assignment 📝

> - Create a function getDateAgo(date, days) that returns the day of the month
n days ago from the given date
> - For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be
19th and getDateAgo(new Date(), 2) should be 18th
> - Test the function to make sure it works reliably with any valid Date object
> - Decide what to do with a negative 'days' parameter
>   - e.g. getDateAgo(new Date(), -2)


## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `getDateAgo`

- **Description**: Calculates the day of the month for a date that is a specified number of days in the past.
- **Parameters**:
  - `date` (Date): The starting date.
  - `days` (number): The number of days to subtract from the date. Must be a positive number.
- **Returns**: The day of the month for the calculated date, or an error message if the input is invalid.
- **Example**:
  ```javascript
  let today = new Date();
  console.log(getDateAgo(today, 1)); // Logs the day of the month for yesterday
  console.log(getDateAgo(today, -1)); // Logs "Invalid day, use positive numbers"
  ```

## Variables Table 📊

| Variable Name | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `date`        | The starting date provided as input to the function.                       |
| `days`        | The number of days to subtract from the starting date.                     |
| `newDate`     | A copy of the starting date, modified to calculate the desired day.        |

## Example Output 📤

When the script is executed, the following output is logged to the console:

```
<Yesterday's day of the month>
Invalid day, use positive numbers
```

For example, if today is March 31, 2025:

```
30
Invalid day, use positive numbers
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)