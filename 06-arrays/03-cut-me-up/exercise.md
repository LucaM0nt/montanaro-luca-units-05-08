# Differences Between slice() and splice()

In JavaScript, `slice()` and `splice()` are methods used to manipulate arrays. However, they have significant differences in their behavior and use cases.

## 1. `slice(start, end)`

- **Parameters:**
  - `start`: The index at which extraction begins (inclusive).
  - `end` (optional): The index at which extraction stops (exclusive).
- **Behavior:**  
  `slice(start, end)` does **not modify the original array**. It returns a shallow copy of a portion of the array. If the `end` is omitted, it extracts to the end of the array. Negative indices are allowed, where `-1` represents the last element.

### Example:
```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.slice(1, 3)); // [2, 3]
console.log(array.slice(-3, -1)); // [3, 4]
console.log(array.slice(2)); // [3, 4, 5]
console.log(array); // [1, 2, 3, 4, 5] (original array remains unchanged)
```

## 2. `splice(start, deleteCount, ...items)`

- **Parameters:**
  - `start`: The index at which to start changing the array.
  - `deleteCount`(optional): The number of elements to remove .
  - `...items`(optional): Elements to add to the array .
- **Behavior:**  
  `splice(start, deleteCount, ...items)` **modifies the original array**. It removes `deleteCount` elements starting from `start` and optionally inserts new elements in their place. If `deleteCount` is `0`, no elements are removed, and only new elements are added.

### Example:
```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.splice(1, 2)); // [2, 3] (removed elements)
console.log(array); // [1, 4, 5] (original array modified)
array.splice(1, 0, 6, 7); // Inserts 6 and 7 at index 1
console.log(array); // [1, 6, 7, 4, 5]
```

## Key Differences Summary

| Method       | Parameters                          | Modifies Original Array? | Returns Removed/Extracted Elements? | Allows Negative Indices? |
|--------------|------------------------------------|--------------------------|-------------------------------------|--------------------------|
| `slice()`    | `(start, end)`                     | ❌ No                    | ✅ Yes                              | ✅ Yes                   |
| `splice()`   | `(start, deleteCount, ...items)`   | ✅ Yes                   | ✅ Yes                              | ❌ No                    |