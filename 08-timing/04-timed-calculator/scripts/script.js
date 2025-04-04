/**
 * @file script.js
 * @description This file contains the JavaScript code for performing a series of timed calculations using functions from a previous exercise.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This script demonstrates the use of `setTimeout` to execute
 * a series of calculations with delays between each step.
 * The `calculator` function and the helper functions (`squareNumber`, `halfNumber`, `percentOf`, `areaOfCircle`)
 * are reused from a previous exercise.
 * The script performs the following steps:
 * 1. Halves a number.
 * 2. Squares the halved number.
 * 3. Calculates the area of a circle using the squared result as the radius.
 * 4. Calculates the percentage of the area relative to the squared result.
 * Each step is logged to the console with a delay to simulate a timed process.
 */

/**
 * Calculates the square of a number and logs the result.
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
 * Calculates half of a number and logs the result.
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
 * Calculates the percentage of one number relative to another and logs the result.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - Returns the percentage of the first number relative to the second number.
 * @example
 * percentOf(2, 4); // Logs "2 is 50.00% of 4" and returns 50.00
 */
function percentOf(num1, num2) {
  let percentage = ((num1 / num2) * 100).toFixed(2);
  console.log(`${num1} is ${percentage}% of ${num2}`);
  return parseFloat(percentage);
}

/**
 * Calculates the area of a circle based on the provided radius and logs the result.
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
 * Performs a series of calculations using the helper functions from a previous exercise.
 * Each step is executed with a delay using `setTimeout`.
 * @param {number} num - The number to be used in the calculations.
 * @returns {void}
 * @example
 * calculator(4); // Logs intermediate results with delays between each step
 */
function calculator(num) {
  //first function without timeout to be executed immediatly
  console.log("Halving the number...");
  let half = halfNumber(num);
  let squared, area, percentage;
  // subsequent functions nested inside previous setTimeout to ensure execution after at least 3s have passed from previous function
  setTimeout(() => {
    console.log("Squaring the halved number...");
    squared = squareNumber(half);
    setTimeout(() => {
      console.log("Calculating area of circle...");
      area = areaOfCircle(squared);
      setTimeout(() => {
        console.log("Doing the percentage...");
        percentage = percentOf(area, squared);
      }, 3000);
    }, 3000);
  }, 3000);
}
// Example usage
calculator(4);
// waste 20s
// Logs:
// Halving the number...
// Half of 4 is 2
// Squaring the halved number...
// The result of squaring the number 2 is 4
// Calculating area of circle...
// The area for a circle with radius 4 is 50.27
// Doing the percentage...
// 4 is 100.00% of 4