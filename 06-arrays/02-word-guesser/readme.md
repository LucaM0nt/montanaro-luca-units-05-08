# Word Guesser 🎯

This exercise demonstrates the use of arrays, random number generation, and string manipulation in JavaScript. The "Word Guesser" game selects a random word from a list, and the player must guess it letter by letter.

## Assignment 📝

> 1. Create two arrays:
>    - one for the letters of the word (e.g. 'C', 'A', 'T')
>    - Another for the current guessed letters (start with '_', '_', '\_' and add the correct letters to it).
> 2. Write a function called guessLetter that should:
>    - Take one parameter, a letter.
>    - Have a maximum number of guesses (e.g. 6)
>    - Check if the letter is in the word array.
>    - If the letter matches, add it in the correct position of the guessed array.
>    - Show the user the current guessed letters.
>    - Tell the user if they guessed a correct letter.
>    - Tell the user how many guesses remain.
>    - Tell the user if they won or lost the game.

> **Bonus**
>
> - Add a random reward for correct guesses and subtract a random amount for failed
>   guesses.
> - Show the user the total reward (positive or negative).
> - Draw a hangman image to the console log after each guess.
> - Add a function that generates the letters to guess randomly.
> - Add a function that chooses the initial word to guess from an array of words.

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

| **Function**             | **Description**                                                         | **Parameters**                         | **Output**                          |
| ------------------------ | ----------------------------------------------------------------------- | -------------------------------------- | ----------------------------------- |
| `getRandomInt(min, max)` | Returns a random integer between `min` and `max` (inclusive).           | `min` (number), `max` (number)         | A random integer.                   |
| `getRandomLetter()`      | Returns a random letter from the alphabet (A-Z).                        | None                                   | A random uppercase letter.          |
| `guessLetter(letter)`    | Handles the player's guess. Updates the game state based on the result. | `letter` (string): The guessed letter. | None (logs results to the console). |

## Key Variables

- **`possibleWords`**: Array of possible words for the game.
- **`wordToGuess`**: The randomly selected word to guess.
- **`guessedLetters`**: Array representing the current state of guessed letters.
- **`maxGuessNumber`**: Maximum number of allowed incorrect guesses.
- **`guessesLeft`**: Number of remaining guesses.
- **`isGameRunning`**: Boolean indicating whether the game is still active.
- **`usedLetters`**: Array of letters that have already been guessed.
- **`totalPoints`**: The player's total score.
- **`hangmanImg`**: Array of ASCII images representing the hangman stages.

## Example Output 📜

### Game Example

```javascript
You have chosen the letter A
Congratulations! You found a letter!
    +---+
    |
    |
    |
    ===
You have 5 points.
Your current situation is: _ A _ _
You have 6 guesses left.

You have chosen the letter Z
Sorry, you didnt find a letter!
    +---+
    |   O
    |
    |
    ===
You have -3 points.
Your current situation is: _ A _ _
You have 5 guesses left.
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)
