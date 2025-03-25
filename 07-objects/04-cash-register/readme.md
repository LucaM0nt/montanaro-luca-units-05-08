# Cash Register Exercise 🛒

This exercise demonstrates how to calculate the total cost of items in a shopping cart using JavaScript. The script uses an object to store item prices and a function to compute the total cost.

## Assignment 📝

> - Write a function called cashRegister that takes a shopping cart object.
> - The object contains item names and prices (itemName: itemPrice).
> - The function returns the total price of the shopping cart

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functionality 📋

### File: `script.js`

**Purpose**: Calculates the total cost of items in a shopping cart.

**Key Features**:
1. **Catalog of Items**:
   - The `catalog` object contains the prices of available items.
   - Example:
     ```javascript
     const catalog = {
       orange: 0.97,
       milk: 0.99,
       rice: 1.5,
       cheese: 4.49,
       chicken: 2.49,
     };
     ```

2. **Shopping Cart**:
   - The shopping cart is represented as an array of item names.
   - Example: `["orange", "milk", "rice"]`.

3. **Total Cost Calculation**:
   - The `cashRegister` function iterates over the shopping cart and sums up the prices of the items using the `catalog` object.
   - The total cost is returned as a string formatted to two decimal places.

## Example Output 📤

```js
let cart = ["orange", "milk", "rice"];
console.log(`The total cost of your cart, containing ${cart.join(", ")}, is $${cashRegister(cart)}.`);
```

When the script is executed, the following output is logged to the console:

```
The total cost of your cart, containing orange, milk, rice, is $3.46.
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)