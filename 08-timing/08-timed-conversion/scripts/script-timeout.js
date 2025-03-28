/**
 * @file script-timeout.js
 * @description This file contains a function to convert temperatures from Celsius to Fahrenheit and logs the result with a delay for each degree.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates the use of `setTimeout` to log temperature conversions from Celsius to Fahrenheit with a delay.
 * The `celsiusToFahrenheit` function performs the conversion and logs the result.
 * A loop schedules the conversion for each Celsius degree from 0°C to 100°C, with a delay of 1 second per degree.
 */

/**
 * Converts a temperature from Celsius to Fahrenheit and logs the result.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {void}
 * @example
 * celsiusToFahrenheit(30); // Logs "30°C is 86°F"
 */
function celsiusToFahrenheit(celsius) {
    let fahrenheitTemp = celsius * 9 / 5 + 32;
    console.log(`${celsius}°C is ${fahrenheitTemp}°F`);
}

// Schedule temperature conversions with a delay
for (let celsius = 0; celsius <= 100; celsius += 1) {
    /**
     * Timer variable to calculate the delay for each `setTimeout` call.
     * @type {number}
     */
    let timer = celsius * 1000;

    // Schedule the conversion with a delay
    setTimeout(celsiusToFahrenheit, timer, celsius);
}