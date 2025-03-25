/**
 * @file script.js
 * @description This file contains the JavaScript code for listing recipes and their details.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of arrays and objects in JavaScript to manage and display recipes.
 * The `recipes` array contains a list of recipe objects, each with properties for the title, servings, and ingredients.
 * The script logs the details of each recipe to the console, including the title, number of servings, and ingredients.
 */

/**
 * Array of recipes.
 * Each recipe is represented as an object with the following properties:
 * - `title`: The name of the recipe.
 * - `serves`: The number of servings the recipe makes.
 * - `ingredients`: An array of ingredients required for the recipe.
 * @type {Object[]}
 * @property {string} title - The name of the recipe.
 * @property {number} serves - The number of servings the recipe makes.
 * @property {string[]} ingredients - The list of ingredients for the recipe.
 */
let recipes = [
  {
    title: "Sushi",
    serves: 1,
    ingredients: ["rice", "nori", "soy sauce", "wasabi", "fish"],
  },
  {
    title: "Pizza",
    serves: 2,
    ingredients: ["dough", "tomato sauce", "cheese", "pepperoni"],
  },
  {
    title: "Burger",
    serves: 1,
    ingredients: ["bun", "beef patty", "lettuce", "tomato", "onion"],
  },
];

/**
 * Logs the details of all recipes in the `recipes` array.
 * For each recipe, it logs the title, number of servings, and ingredients.
 * @param {Object} recipe - The recipe object.
 * @param {string} recipe.title - The name of the recipe.
 * @param {number} recipe.serves - The number of servings the recipe makes.
 * @param {string[]} recipe.ingredients - The list of ingredients for the recipe.
 * @returns {void}
 */
recipes.forEach((recipe) => {
  console.log(`recipe title: ${recipe.title}`);
  console.log(`serves: ${recipe.serves}`);
  console.log(`ingredients: ${recipe.ingredients.join(", ")}`);
  console.log("-----------------");
});

// Output:
// recipe title: Sushi
// serves: 1
// ingredients: rice, nori, soy sauce, wasabi, fish
// -----------------
// recipe title: Pizza
// serves: 2
// ingredients: dough, tomato sauce, cheese, pepperoni
// -----------------
// recipe title: Burger
// serves: 1
// ingredients: bun, beef patty, lettuce, tomato, onion
// ----------------