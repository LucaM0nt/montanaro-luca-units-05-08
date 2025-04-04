/**
 * @file script.js
 * @description This file contains the JavaScript code for the Word Guesser game.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This exercise demonstrates the use of arrays and random number generation in JavaScript.
 * The game selects a random word from a list and the console logs try to randomly guess the letters.
 */

/**
 * List of possible words for the game.
 * @type {string[]}
 */
const possibleWords = [
  "DOG",
  "CAT",
  "HORSE",
  "RABBIT",
  "BIRD",
  "FISH",
  "TURTLE",
  "SNAKE",
  "LIZARD",
  "FROG",
];

/**
 * Randomly select a word from the list and split it into an array of letters.
 * @type {string[]}
 */
let wordToGuess =
  possibleWords[getRandomInt(0, possibleWords.length - 1)].split("");

/**
 * Initialize the guessed letters array with underscores for each letter in the word that has not been guessed.
 * @type {string[]}
 */
let guessedLetters = "_".repeat(wordToGuess.length).split("");

/**
 * Maximum number of incorrect guesses allowed.
 * @type {number}
 */
const maxGuessNumber = 6;

/**
 * Initialize the number of guesses left.
 * @type {number}
 */
let guessesLeft = maxGuessNumber;

/**
 * Boolean to track if the game is still running.
 * @type {boolean}
 */
let isGameRunning = true;

/**
 * Array to store letters that have already been guessed.
 * @type {string[]}
 */
let usedLetters = [];

/**
 * Variable to track the player's total points.
 * @type {number}
 */
let totalPoints = 0;

/**
 * Array of hangman "images" made of strings representing the stages of the game.
 * @type {string[]}
 */
const hangmanImg = [
  `
    +---+
    |    
    |    
    |    
    ===  `,
  `
    +---+
    |   O
    |    
    |    
    ===  `,
  `
    +---+
    |   O
    |   |
    |    
    ===  `,
  `
    +---+
    |   O
    |  /|
    |    
    ===  `,
  `
    +---+
    |   O
    |  /|\\
    |    
    ===  `,
  `
    +---+
    |   O
    |  /|\\
    |  /  
    ===  `,
  `
    +---+
    |   O
    |  /|\\
    |  / \\
    ===  `,
];

/**
 * Function to get a random integer between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 * @example
 * console.log(getRandomInt(1, 10)); // 7
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function to get a random letter from the alphabet.
 * @returns {string} - A random letter from A to Z.
 * @example
 * console.log(getRandomLetter()); // "G"
 */
function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(getRandomInt(0, alphabet.length - 1));
}

/**
 * Function to handle guessing a letter.
 * @param {string} letter - The letter to guess.
 * @returns {void}
 * @example
 * guessLetter("A");
 */
function guessLetter(letter) {
  console.log(`You have chosen the letter ${letter}`);

  // Check if the guessed letter is in the word
  if (wordToGuess.includes(letter)) {
    // Update the guessed letters array with the correct letter
    guessedLetters = guessedLetters.map((guessedLetter, letterIndex) => {
      return wordToGuess.at(letterIndex) === letter ? letter : guessedLetter;
    });

    // Add random points for a correct guess
    totalPoints = totalPoints + getRandomInt(1, 10);

    // Check if the player has guessed the entire word
    if (!guessedLetters.includes("_")) {
      console.log(`
-------------------------------------
Congratulations! You found the word!
The word was ${wordToGuess.join("")}.
-------------------------------------
            `);
      return;
    }

    // Display the current game state after a correct guess
    console.log(`Congratulations! You found a letter!
            ${hangmanImg.at(maxGuessNumber - guessesLeft)}
You have ${totalPoints} points.
Your current situation is: ${guessedLetters.join("")}
You have ${guessesLeft} guesses left.\n\n`);
  } else {
    // Decrease the number of guesses left for an incorrect guess
    guessesLeft -= 1;

    // Subtract random points for an incorrect guess
    totalPoints = totalPoints - getRandomInt(1, 10);

    // Display the current game state after an incorrect guess
    console.log(`Sorry, you didn't find a letter!
            ${hangmanImg.at(maxGuessNumber - guessesLeft)}
You have ${totalPoints} points.
Your current situation is: ${guessedLetters.join("")}
You have ${guessesLeft} guesses left.\n\n`);
  }

  // Check if the player has run out of guesses
  if (guessesLeft === 0) {
    console.log(`
-------------------------------------
GAME OVER! The word was ${wordToGuess.join("")}.
-------------------------------------
`);
    isGameRunning = false; // End the game
  }
}

// Main game loop
while (isGameRunning) {
  // Get a random letter to guess
  let letter = getRandomLetter();

  // Check if the letter has already been guessed
  if (!(letter in usedLetters)) {
    // Add the letter to the list of used letters
    usedLetters.push(letter);

    // Process the guessed letter
    guessLetter(letter);
  }
}
