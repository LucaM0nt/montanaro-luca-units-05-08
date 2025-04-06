# Dishwasher Simulation 🧼

This project simulates a dishwasher process using JavaScript. The simulation demonstrates the behavior of **stacks** (Last-In-First-Out or LIFO) by loading dirty dishes into three separate stacks, washing two dishes at a time (from different stacks if available), and moving them to a clean stack.

## Assignment 📝

> Create a simulation of a dishwasher system using two stacks of dishes
> - one stack represents dirty dishes, and the other represents clean dishes
> - the dirty stack has a random number of plates 10 - 50
> - useful functions
>   - washDish - moves a dish from the dirty stack to the clean stack
>   - displayStacks - displays the current state of both stacks in the console
>   - runSimulation - simulate washing all dirty dishes adding a random delay between steps
> Bonus
> 1. have three stacks of dirty dishes and one clean stack
> 2. the dishwasher is able to wash two dishes at a time


## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Features ✨

- **Stack Data Structure**: Demonstrates LIFO behavior using JavaScript arrays with `.push()` and `.pop()`.
- **Asynchronous Logic**: Simulates real-world delays using randomized intervals.
- **Dynamic Simulation**: Automatically stops when all dishes are cleaned.

## How It Works ⚙️

1. **Loading Dirty Dishes**: 
   - Three stacks (`dirtyDishes1stStack`, `dirtyDishes2ndStack`, `dirtyDishes3rdStack`) are loaded with a random number of dirty dishes (between 5 and 7 per stack).
   - Each dish is identified with a unique ID (e.g., `dish-1st-stack-1`).

2. **Washing Dishes**:
   - Two dishes are washed at a time:
     - One from the 1st stack (or 3rd stack if the 1st is empty).
     - One from the 2nd stack (or 3rd stack if the 2nd is empty).
   - Washed dishes are moved to the `cleanDishes` stack.

3. **Simulation**:
   - The washing process runs asynchronously with random delays between 1 and 3 seconds.
   - The simulation stops automatically when all dirty dishes are cleaned.

## Code Overview 🛠️

### Key Functions

1. **`setMyInterval(callback, minDelay, maxDelay, times)`**:
   - Creates a custom interval with random delays between `minDelay` and `maxDelay`.
   - Executes the `callback` function up to `times` iterations.

2. **`clearMyInterval(interval)`**:
   - Stops the custom interval created by `setMyInterval`.

3. **`loadDishes(dirtyDishesStack, stackId)`**:
   - Loads a random number of dirty dishes into a specified stack.

4. **`washDish(dirtyDishesStack, stackName)`**:
   - Washes one dish from the specified stack and moves it to the clean stack.

5. **`displayStacks()`**:
   - Logs the current number of dirty and clean dishes in each stack.

6. **`runSimulation()`**:
   - Runs the dishwasher simulation, washing dishes two at a time until all are cleaned.

### Data Structures

- **Dirty Stacks**:
  - `dirtyDishes1stStack`
  - `dirtyDishes2ndStack`
  - `dirtyDishes3rdStack`
- **Clean Stack**:
  - `cleanDishes`

## Example Output 📤

```plaintext
Loading dishes for stack 1st-stack...
6 dirty dishes loaded in stack 1st-stack
Loading dishes for stack 2nd-stack...
5 dirty dishes loaded in stack 2nd-stack
Loading dishes for stack 3rd-stack...
7 dirty dishes loaded in stack 3rd-stack
Simulation started
Dirty dishes in 1st stack: 6
Dirty dishes in 2nd stack: 5
Dirty dishes in 3rd stack: 7
Clean dishes: 0
Washing 2 dishes...
5 dishes left to wash in dirtyDishes1stStack
4 dishes left to wash in dirtyDishes2ndStack
...
All dishes are cleaned!
Dirty dishes in 1st stack: 0
Dirty dishes in 2nd stack: 0
Dirty dishes in 3rd stack: 0
Clean dishes: 18
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)