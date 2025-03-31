# Slow List 🐌

This exercise demonstrates how to log items from a list to the console with a delay between each log. The goal is to explore two different approaches: using `setTimeout` and `setInterval`.

## Assignment 📝

> - Create an array that holds a list of 30 items (e.g., animals, books, or food).
> - Print one item from the list every second until the list is completely printed.
>   - Use setInterval to achieve this goal.
>   - Do the same thing using setTimeout.

## Usage 🛠️

1. Open the local [`index-interval-variant.html`](index-timeout-variant.html) or the local [`index-interval-variant.html`](index-interval-variant.html) file in a web browser.
2. The scripts in `script-timeout.js` and `script-interval.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `script-timeout.js`

- **Description**: This script uses `setTimeout` to log each item from the `randomAnimals` array to the console with a delay of 1 second between each log.
- **Key Features**:
  - The `randomAnimals` array contains 30 animal names.
  - A `timer` variable is used to increment the delay for each `setTimeout` call.
  - Logs each animal until the array is fully printed.

### `script-interval.js`

- **Description**: This script uses `setInterval` to log each item from the `randomAnimals` array to the console with a delay of 1 second between each log.
- **Key Features**:
  - The `randomAnimals` array contains 30 animal names.
  - An `index` variable (`animalArrayIndex`) is used to track the current item being logged.
  - Stops the interval automatically when all items have been logged.

## Variables Table 📊

| Script              | Variable Name | Description                                                                 |
|---------------------|---------------|-----------------------------------------------------------------------------|
| `script-timeout.js` | `randomAnimals` | An array containing 30 animal names.                                        |
| `script-timeout.js` | `timer`        | A variable used to increment the delay for each `setTimeout` call.           |
| `script-interval.js`| `randomAnimals` | An array containing 30 animal names.                                        |
| `script-interval.js`| `animalArrayIndex`| An index variable used to track the current item being logged in the array.|

## Example Output 📤

When either script is executed, the following output is logged to the console (one item per second):

```
dog
cat
horse
cow
pig
chicken
goat
sheep
duck
goose
...
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)