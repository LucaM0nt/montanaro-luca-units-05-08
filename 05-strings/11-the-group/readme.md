# Group Exercise 👥

This exercise demonstrates the use of string manipulation in JavaScript. The `aContainsb` function, imported from the previous exercise, takes two string parameters and checks if the first string contains the second string. The `group` function takes a list of names and a name, and checks if the name is part of the group.

## Assignment 📝

> - Use the previous function to write another function called group that checks whether a string is part of another longer string that is a list of names of a group

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

| Function                  | Description                                                                                           | Output                                                   |
|---------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `aContainsb(stringA, stringB)` | This function checks if the first string contains the second string.                                    | Returns `true` if `stringA` contains `stringB`, `false` otherwise.    |
| `group(nameList, name)`           | This function checks if a name is part of the group.      | Returns a string indicating whether the name is part of the group. |

- **Note**: The `aContainsb` function has been imported from the previous exercise.

## Example Output 📜

### `aContainsb`

```javascript
console.log(aContainsb("John, Jane, Joe, Jack", "Jane")); // true
console.log(aContainsb("John, Jane, Joe, Jack", "Jill")); // false
```

### `group`

```javascript
console.log(group("John, Jane, Joe, Jack", "Jane")); // "Jane IS part of the group."
console.log(group("John, Jane, Joe, Jack", "Jill")); // "Jill is NOT part of the group."
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)