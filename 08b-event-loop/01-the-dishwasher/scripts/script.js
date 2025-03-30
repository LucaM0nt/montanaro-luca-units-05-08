/**
 * @file script.js
 * @description This file simulates a dishwasher process where dirty dishes are loaded, washed, and moved to a clean stack.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This script demonstrates the use of arrays and `setInterval` to simulate a real-world process.
 * Dirty dishes are loaded into an array, washed one by one, and moved to a clean stack.
 * The simulation runs until all dishes are cleaned.
 */

/**
 * Array representing the stack of dirty dishes.
 * @type {string[]}
 */
const dirtyDishes = []

/**
 * Array representing the stack of clean dishes.
 * @type {string[]}
 */
const cleanDishes = []

/**
 * Loads a random number of dirty dishes (between 10 and 50) into the `dirtyDishes` array.
 * @returns {void}
 */
function loadDishes() {
    console.log("Loading dishes...")
    // Load a random number of dirty dishes between 10 and 50
    let dishesNumber = Math.floor(Math.random() * 41) + 10
    for (dishesNumber; dishesNumber > 0; dishesNumber--) {
        dirtyDishes.push("dish")
    }
    console.log(`${dirtyDishes.length} dirty dishes loaded`)
}

/**
 * Washes one dish from the `dirtyDishes` array and moves it to the `cleanDishes` array.
 * @returns {void}
 */
function washDish() {
    console.log("Washing dishes...")
    dirtyDishes.pop()
    cleanDishes.push("dish")
    console.log(`${dirtyDishes.length} dishes left to wash`)
}

/**
 * Displays the current number of dirty and clean dishes.
 * @returns {void}
 */
function displayStacks() {
    console.log(`Dirty dishes: ${dirtyDishes.length}`)
    console.log(`Clean dishes: ${cleanDishes.length}`)
}

/**
 * Runs the dishwasher simulation.
 * - Displays the initial state of the stacks.
 * - Washes one dish every second until all dishes are cleaned.
 * - Stops the simulation when there are no more dirty dishes.
 * @returns {void}
 */
function runSimulation() {
    console.log("Simulation started")
    displayStacks()
    const intervalId = setInterval(() => {
        if (dirtyDishes.length === 0) {
            clearInterval(intervalId)  
            console.log("All dishes cleaned")
            displayStacks()
            return
        }
        washDish()
    }, 1000)
}

// Load dirty dishes and start the simulation
loadDishes()
runSimulation()