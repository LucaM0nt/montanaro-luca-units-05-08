/**
 * This function calculates the square of a number based on the provided value.
 * @param {number} num - The number to be squared.
 * @returns {number} - Returns the square of the number.
 * @example
 * squareNumber(4); // Logs "The result of squaring the number 4 is 16" and returns 16
 */
function squareNumber(num) {
    let squaredNumber = num * num;
    console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
    return squaredNumber;
  }
  
/**
 * This function calculates half of a number based on the provided value.
 * @param {number} num - The number to be halved.
 * @returns {number} - Returns half of the number.
 * @example
 * halfNumber(10); // Logs "Half of 10 is 5" and returns 5
 */
function halfNumber(num) {
let halvedNumber = num / 2;
console.log(`Half of ${num} is ${halvedNumber}`);
return halvedNumber;
}

/**
 * This function calculates the percentage of one number relative to another based on the provided values.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - Returns the percentage of the first number relative to the second number.
 * @example
 * percentOf(2, 4); // Logs "2 is 50.00% of 4" and returns 50.00
 */
function percentOf(num1, num2) {
let percentage = (num1 / num2 * 100).toFixed(2);
console.log(`${num1} is ${percentage}% of ${num2}`);
return parseFloat(percentage);
}

/**
 * This function calculates the area of a circle based on the provided radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - Returns the area of the circle.
 * @example
 * areaOfCircle(5); // Logs "The area for a circle with radius 5 is 78.54" and returns 78.54
 */
function areaOfCircle(radius) {
let area = (Math.PI * radius * radius).toFixed(2);
console.log(`The area for a circle with radius ${radius} is ${area}`);
return area;
}

/**
 * This function performs a series of calculations using imported functions.
 * @param {number} num - The number to be used in the calculations.
 * @returns {number} - Returns the final percentage of the area relative to the squared result.
 * @example
 * calculator(10); // Returns the final percentage and logs intermediate results
 */
function calculator(num) {
    let half = halfNumber(num);
    let squared = squareNumber(half);
    let area = areaOfCircle(squared);
    let percentage = percentOf(area, squared);
    return percentage;
}

// Calling the function with an example value to see the result of the calculations.
console.log(calculator(10)); // Logs the results of each step and returns the final percentage