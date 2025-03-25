# Recipe Exercise 🍳

This exercise demonstrates how to create and log information about recipes using JavaScript. The script uses objects to represent recipes and logs their details to the console.

## Assignment 📝

> - Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings)
> - On separate lines (one console.log statement for each), log the recipe information  
>
> **Bonus**: Create an array that holds several recipes and log them all.

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functionality 📋

### File: `script.js`

**Purpose**: Logs details about recipes to the console.

**Key Features**:
1. **Recipe Object**:
   - Each recipe is represented as an object with the following properties:
     - `title`: The title of the recipe.
     - `servings`: The number of servings.
     - `ingredients`: An array of ingredients.

2. **Logging Recipe Details**:
   - The script logs the details of each recipe to the console using separate `console.log` statements for each property.

## Example Output 📤

```js
recipes.forEach((recipe) => {
  console.log(`recipe title: ${recipe.title}`);
  console.log(`serves: ${recipe.serves}`);
  console.log(`ingredients: ${recipe.ingredients.join(", ")}`);
  console.log("-----------------");
});
```

When the script is executed, the following output is logged to the console:
```
recipe title: Sushi
serves: 1
ingredients: rice, nori, soy sauce, wasabi, fish
-----------------
recipe title: Pizza
serves: 2
ingredients: dough, tomato sauce, cheese, pepperoni
-----------------
recipe title: Burger
serves: 1
ingredients: bun, beef patty, lettuce, tomato, onion
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)