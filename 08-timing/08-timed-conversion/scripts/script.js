/**
 * This function calculates the temperature in Fahrenheit based on the provided Celsius value.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {string} - Returns the temperature in Fahrenheit as a string.
 * @example
 * celsiusToFahrenheit(30); // "30°C is 86°F"
 */
function celsiusToFahrenheit(celsius) {
    let fahrenheitTemp = celsius * 9 / 5 + 32;
    console.log( `${celsius}°C is ${fahrenheitTemp}°F`);
}


// for (let celsius = 0; celsius <= 100; celsius += 1) {
//     timer = celsius * 1000;
//     setTimeout(celsiusToFahrenheit, timer, celsius);
// }

let celsius = 0;
let intervalID = setInterval(() => {
    celsiusToFahrenheit(celsius)
    celsius += 1;

    if (celsius > 100) {
        clearInterval(intervalID);
    }
}, 1000);

// FARE DUE FILE SEPARATIIIIII -  uno con set timeout e uno con set interval