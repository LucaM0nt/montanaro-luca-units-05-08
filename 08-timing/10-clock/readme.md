# Clock ⏰

This exercise demonstrates how to display the current time in different locales using the `Date` object and the `toLocaleTimeString` method. The script logs the time in three formats: German (`de-DE`), US English (`en-US`), and GB English (`en-GB`).

## Assignment 📝

> - Implement a javascript clock that prints the current time to the console every second
> - The output should be in the format HH:mm:ss e.g. 17:03:06

## Usage 🛠️

1. Open the local [`index.html`](index.html) file in a web browser.
2. The script in `script.js` will run automatically and log the current time in three locales to the console every second.

## Functions 📋

### `printClock`

- **Description**: Logs the current time in the specified locale.
- **Parameters**:
  - `locale` (string, optional): The locale to format the time string. Defaults to `'en-GB'`.
- **Returns**: `void`
- **Example**:
  ```javascript
  printClock('de-DE'); // Logs the current time in German format (e.g., "00:00:00").
  printClock('en-US'); // Logs the current time in US English format (e.g., "12:00:00 AM").
  printClock();        // Logs the current time in GB English format (e.g., "00:00:00").
  ```

## Variables Table 📊

| Variable Name | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `locale`      | The locale string used to format the time (e.g., `'de-DE'`, `'en-US'`).     |
| `intervalID`  | The ID of the interval created by `setInterval` for each locale.            |

## Example Output 📤

When the script is executed, the following output is logged to the console every second:

```
German format: 00:00:00
US format: 12:00:00 AM
GB format: 00:00:00
```

For example, if the current time is 15:30:00:

```
German format: 15:30:00
US format: 3:30:00 PM
GB format: 15:30:00
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)