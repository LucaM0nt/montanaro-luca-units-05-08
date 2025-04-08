/**
 * @file script.js
 * @description This file simulates a dishwasher process where dirty dishes are loaded into three stacks, washed two at a time (from separate stacks if available), and moved to a clean stack.
 * @date April 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This script demonstrates the behavior of **stacks** using the Last-In-First-Out (LIFO) principle.
 * Dishes are loaded into three separate dirty stacks, and during the simulation, two dishes are washed at a time
 * and moved into a clean stack. The washing process always takes the last dish added (the top of the stack),
 * illustrating how stack data structures operate.
 *
 * Core programming concepts demonstrated:
 * - Array manipulation as stacks (LIFO behavior with `.push()` and `.pop()`)
 * - Randomized delays with a custom interval function
 * - Simulation of a real-world process through asynchronous logic
 */

/**
 * Creates a custom interval that repeatedly executes a callback function after a random delay.
 * @param {Function} callback - The function to be executed repeatedly.
 * @param {number} minDelay - The minimum delay in milliseconds between each execution of the callback.
 * @param {number} maxDelay - The maximum delay in milliseconds between each execution of the callback.
 * @param {number} [times=Infinity] - The number of times the callback should be executed before stopping automatically.
 * @returns {Object} - An object containing the interval ID, which can be used to clear the interval.
 * @example
 * const myIntervalId = setMyInterval(() => console.log("Hello"), 1000, 2000, 10); // Logs "Hello" 10 times with random delays between 1-2 seconds.
 */
function setMyInterval(callback, minDelay, maxDelay, times = Infinity) {
  const interval = { id: null };
  let count = 0;

  function repeat() {
    if (count < times) {
      callback();
      count++;
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      interval.id = setTimeout(repeat, randomDelay);
    } else {
      clearMyInterval(interval);
    }
  }

  const firstDelay = Math.random() * (maxDelay - minDelay) + minDelay;
  interval.id = setTimeout(repeat, firstDelay);
  return interval;
}

/**
 * Stops a custom interval created by `setMyInterval`.
 * @param {Object} interval - The interval object returned by `setMyInterval`.
 * @returns {void}
 * @example
 * const myIntervalId = setMyInterval(() => console.log("Hello"), 1000, 2000, 10);
 * setTimeout(() => clearMyInterval(myIntervalId), 5000); // Stops the interval after 5 seconds.
 */
function clearMyInterval(interval) {
  clearTimeout(interval.id);
}

/**
 * Array representing the first stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes1stStack = [];

/**
 * Array representing the second stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes2ndStack = [];

/**
 * Array representing the third stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes3rdStack = [];

/**
 * Array representing the stack of clean dishes.
 * @type {string[]}
 */
const cleanDishes = [];

/**
 * Loads a stack of dirty dishes with numbered identifiers.
 * Dishes are added to the stack using `.push()`, simulating the stacking of items on top of one another (LIFO structure).
 * @param {string[]} dirtyDishesStack - The stack to fill.
 * @param {string} stackId - An identifier for the stack (e.g., "1st", "2nd", "3rd").
 * @returns {void}
 */
function loadDishes(dirtyDishesStack, stackId) {
  console.log(`Loading dishes for stack ${stackId}...`);

  // Load a random number of dirty dishes between 10 and 50
  const dishesNumber = Math.floor(Math.random() * 41) + 10;

  for (let i = 1; i <= dishesNumber; i++) {
    dirtyDishesStack.push(`dish-${stackId}-${i}`);
  }

  console.log(
    `${dirtyDishesStack.length} dirty dishes loaded in stack ${stackId}`
  );
}

/**
 * Washes one dish from the specified dirty dishes stack (LIFO) and moves it to the clean dishes stack.
 * Demonstrates the behavior of a stack using `.pop()` (removes the most recently added dish, picking it from the top of the stack).
 * @param {string[]} dirtyDishesStack - The stack to wash a dish from.
 * @param {string} stackName - The name of the stack (for logging purposes).
 * @returns {void}
 */
function washDish(dirtyDishesStack, stackName) {
  currentDish = dirtyDishesStack.pop();
  cleanDishes.push(currentDish);
  dirtyDishesStack.length > 0
    ? console.log(
        `${dirtyDishesStack.length} dishes left to wash in ${stackName}`
      )
    : console.log(`${stackName} has no more dirty dishes`);
}

/**
 * Displays the current number of dirty and clean dishes in each stack.
 * @returns {void}
 */
function displayStacks() {
  console.log(`Dirty dishes in 1st stack: ${dirtyDishes1stStack.length}`);
  console.log(`Dirty dishes in 2nd stack: ${dirtyDishes2ndStack.length}`);
  console.log(`Dirty dishes in 3rd stack: ${dirtyDishes3rdStack.length}`);
  console.log(`Clean dishes: ${cleanDishes.length}`);
}

/**
 * Runs the dishwasher simulation.
 * - Displays the initial state of the stacks.
 * - Washes two dishes at a time from separate stacks if available.
 * - Stops the simulation when all dishes are cleaned.
 * @returns {void}
 */
function runSimulation() {
  console.log("Simulation started");
  displayStacks();

  const totalDishes =
    dirtyDishes1stStack.length +
    dirtyDishes2ndStack.length +
    dirtyDishes3rdStack.length;

  const intervalId = setMyInterval(
    () => {
      console.log("Washing 2 dishes...");

      // Wash one dish from the 1st stack if available, otherwise from the 3rd stack
      dirtyDishes1stStack.length > 0
        ? washDish(dirtyDishes1stStack, "dirtyDishes1stStack")
        : dirtyDishes3rdStack.length > 0
        ? washDish(dirtyDishes3rdStack, "dirtyDishes3rdStack")
        : null;

      // Wash one dish from the 2nd stack if available, otherwise from the 3rd stack
      dirtyDishes2ndStack.length > 0
        ? washDish(dirtyDishes2ndStack, "dirtyDishes2ndStack")
        : dirtyDishes3rdStack.length > 0
        ? washDish(dirtyDishes3rdStack, "dirtyDishes3rdStack")
        : null;

        if (
          dirtyDishes1stStack.length === 0 &&
          dirtyDishes2ndStack.length === 0 &&
          dirtyDishes3rdStack.length === 0
        ) {
          console.log("All dishes are cleaned!");
          displayStacks();
          console.log(cleanDishes);
          clearMyInterval(intervalId); // Stop the simulation if all dishes are cleaned in case maxIterations is not reached
        }
    },
    1000, // Minimum delay
    3000, // Maximum delay
    Math.ceil(totalDishes / 2) // Maxiterations needed (2 dishes per iteration)
  );
}

// Load dirty dishes into the three stacks
loadDishes(dirtyDishes1stStack, "1st-stack");
loadDishes(dirtyDishes2ndStack, "2nd-stack");
loadDishes(dirtyDishes3rdStack, "3rd-stack");

// Start the simulation
runSimulation();