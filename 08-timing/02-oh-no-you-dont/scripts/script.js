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

const timerId = setTimeout(squareNumber, 10000, 4);

function cancelTimer() {
    clearTimeout(timerId, 5000);
    console.log("Timer canceled!");
}

cancelTimer();