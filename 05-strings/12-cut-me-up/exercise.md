# Differences Between slice(), substring(), and substr()

In JavaScript, `slice()`, `substring()`, and `substr()` are methods used to extract portions of a string. However, they have differences in how they handle parameters and some cases.
All of them 

## 1. `slice(start, end)`

- **Parameters:**
  - `start`: The index at which extraction begins (inclusive).
  - `end` (optional): The index at which extraction stops (exclusive).
- **Behavior:**  
  `slice(start, end)` Allows negative indices, where `-1` represents the last character. If the `end` is omitted, it extracts to the end of the string.

### Example:
```javascript
let text = "Hello, World!";
console.log(text.slice(7, 12)); // "World"
console.log(text.slice(-6, -1)); // "World"
console.log(text.slice(7)); // "World!"
```

## 2. `substring(start, end)`

- **Parameters:**
  - `start`: The starting index (inclusive).
  - `end` (optional): The stopping index (exclusive).
- **Behavior:**  
  **Does NOT allow negative indices** but treats them as `0`. If `start` is greater than `end`, it swaps them. If `end` is omitted, it extracts to the end.

### Example:
```javascript
let text = "Hello, World!";
console.log(text.substring(7, 12)); // "World"
console.log(text.substring(12, 7)); // "World" (swaps indices)
console.log(text.substring(-6, 5)); // "Hello" (negative treated as 0)
```

## 3. `substr(start, length)` (Deprecated)

- **Parameters:**
  - `start`: The index at which extraction begins.
  - `length`: The number of characters to extract.
- **Behavior:**  
Allows negative `start`, counting from the end. If `length` is omitted, extracts to the end.  
It is **Deprecated**, meaning it should be avoided in new code.

### Example:
```javascript
let text = "Hello, World!";
console.log(text.substr(7, 5)); // "World"
console.log(text.substr(-6, 5)); // "World"
console.log(text.substr(7)); // "World!"
```

## Key Differences Summary
| Method       | Parameters                 | Allows Negative Indices? | End Parameter Treated as Exclusive? | Swaps Indices? | Deprecated? |
|-------------|---------------------------|--------------------------|--------------------------------------|---------------|-------------|
| `slice()`   | `(start, end)`             | ✅ Yes                    | ✅ Yes                                | ❌ No          | ❌ No        |
| `substring()` | `(start, end)`           | ❌ No (converted to 0)     | ✅ Yes                                | ✅ Yes        | ❌ No        |
| `substr()`  | `(start, length)`         | ✅ Yes                    | ❌ No (length-based)                  | ❌ No          | ✅ Yes       |

