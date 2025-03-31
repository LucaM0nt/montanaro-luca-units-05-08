# Weekday 🌍

This exercise demonstrates how to retrieve and format the current day of the week in different languages using the `Date` object and arrays.

## Assignment 📝

> - Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
> - Write another function that does the same in Italian
> - Add a language parameter to the function that accepts ‘en’ or ‘it’ and outputs the day in the correct language

## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `getWeekDay`

- **Description**: Retrieves the short name of the current weekday in the specified language.
- **Parameters**:
  - `date` (Date): The date object to retrieve the day of the week from.
  - `lang` (string): The language code (`'en'` for English, `'it'` for Italian).
- **Returns**: The short name of the weekday in the specified language, or an error message if the language is invalid.
- **Example**:
  ```javascript
  let currentDate = new Date();
  console.log(getWeekDay(currentDate, 'it')); // Logs: 'DO'
  console.log(getWeekDay(currentDate, 'en')); // Logs: 'SU'
  console.log(getWeekDay(currentDate, 'es')); // Logs: 'Invalid language'
  ```

## Variables Table 📊

| Variable Name       | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `weekdaysShortEng`  | An array containing the short names of weekdays in English (`['SU', 'MO', ...]`). |
| `weekdaysShortIt`   | An array containing the short names of weekdays in Italian (`['DO', 'LU', ...]`). |

## Example Output 📤

When the script is executed, the following output is logged to the console:

```
Italian short day
DO
English short day
SU
Invalid language
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)