/**
 * @file script-interval.js
 * @description This file contains a function 
 * to convert temperatures from Celsius to Fahrenheit and logs the result at regular intervals using `setInterval`.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates the use of `setInterval` to log temperature conversions 
 * from Celsius to Fahrenheit at regular intervals.
 * The `celsiusToFahrenheit` function performs the conversion and logs the result.
 * The script starts from 0°C and increments the Celsius value 
 *  by 1 every second until it reaches 100°C, at which point the interval is cleared.
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

/**
 * Starts a temperature conversion process from 0°C to 100°C.
 * Logs the conversion result every second and stops when the temperature exceeds 100°C.
 * @type {number}
 */
let celsius = 0;

/**
 * Interval ID for the `setInterval` call.
 * @type {number}
 */
let intervalID = setInterval(() => {
    celsiusToFahrenheit(celsius);
    celsius += 1;

    // Clears the interval when the Celsius value exceeds 100
    if (celsius > 100) {
        clearInterval(intervalID);
    }
}, 1000);