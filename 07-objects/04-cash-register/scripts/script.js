/**
 * @file script.js
 * @description This file contains the JavaScript code for calculating the total cost of items in a shopping cart.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of objects and arrays in JavaScript to implement a simple cash register.
 * The `catalog` object contains the prices of available items.
 * The `cashRegister` function takes a shopping cart (array of item names) as input and calculates the total cost by summing the prices of the items in the cart.
 * 
 * function cashRegister - Calculates the total cost of items in the shopping cart.
 * 
 * The cashRegister function takes an array of item names as a parameter.
 * It returns the total cost of the items in the cart, formatted to two decimal places.
 */

/**
 * Calculates the total cost of items in the shopping cart.
 * @param {string[]} cart - An array of item names in the shopping cart.
 * @returns {string} - The total cost of the items in the cart, formatted to two decimal places.
 * @example
 * let cart = ["orange", "milk", "rice"];
 * console.log(cashRegister(cart)); // "3.46"
 */
function cashRegister(cart) {
  /**
   * Catalog of items with their prices.
   * @type {Object<string, number>}
   */
  const catalog = {
    orange: 0.97,
    milk: 0.99,
    rice: 1.5,
    cheese: 4.49,
    chicken: 2.49,
  };

  let total = 0;

  // Iterate over the cart and sum up the prices of the items
  cart.forEach((item) => {
    total += catalog[item];
  });

  // Return the total cost formatted to two decimal places
  return total.toFixed(2);
}

// Example usage
let cart = ["orange", "milk", "rice"];
console.log(`The total cost of your cart, containing ${cart.join(", ")}, is $${cashRegister(cart)}.`); // "The total cost of your cart containing orange, milk, rice is $3.46."  