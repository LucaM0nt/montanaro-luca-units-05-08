let wordToGuess = ["C", "A", "T"];
let guessedLetters = ["_", "_", "_"];

function guessLetter (letter){
    const maxGuessNumber = 6;
    let guessesLeft = maxGuessNumber;
    console.log (`You have chosen the letter ${letter}`);
    if (wordToGuess.includes(letter)){ 
        let letterIndex = wordToGuess.indexOf(letter);
        guessedLetters[letterIndex] = letter;
        wordToGuess[letterIndex] = "_";
        console.log(`Congratulations! You found a letter!
            Your current situation is: ${guessedLetters.join("")}
            You have ${maxGuessNumber} guesses left.\n\n`);
        if (!wordToGuess.includes("_")){
            console.log(`Congratulations! You found the word!`);
        }
    } else {
        guessesLeft -= 1;
        console.log(`Sorry, you didn't find a letter!
            Your current situation is: ${guessedLetters.join("")}
            You have ${maxGuessNumber} guesses left.\n\n`);
    }
}

guessLetter("A");
guessLetter("B");
guessLetter("C");
guessLetter("D");
guessLetter("T");