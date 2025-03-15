let wordToGuess = ["C", "A", "T"];
let guessedLetters = "_".repeat(wordToGuess.length).split("");

const maxGuessNumber = 6;
let guessesLeft = maxGuessNumber;
let isGameRunning = true;
let usedLetters = [];

function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

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
    ===  `
  ];

function guessLetter (letter){
    console.log (`You have chosen the letter ${letter}`);

    if (wordToGuess.includes(letter)){ 
        guessedLetters = guessedLetters.map((guessedLetter, letterIndex) => {
            return wordToGuess.at(letterIndex) === letter ? letter : guessedLetter }
        );

        if (!guessedLetters.includes("_")){
            console.log(`
-------------------------------------
Congratulations! You found the word!
The word was ${wordToGuess.join("")}.
-------------------------------------
                `);
            return;
        }

        console.log(`Congratulations! You found a letter!
            ${hangmanImg.at(maxGuessNumber - guessesLeft)}
Your current situation is: ${guessedLetters.join("")}
You have ${guessesLeft} guesses left.\n\n`);

    } else {
        guessesLeft -= 1;
        console.log(`Sorry, you didn't find a letter!
            ${hangmanImg.at(maxGuessNumber - guessesLeft)}
    Your current situation is: ${guessedLetters.join("")}
    You have ${guessesLeft} guesses left.\n\n`);
    }

    if (guessesLeft === 0) {
        console.log(`
-------------------------------------
GAME OVER! The word was ${wordToGuess.join("")}.
-------------------------------------
`);
        isGameRunning = false;
    }
}

while (isGameRunning){
    let letter = getRandomLetter();
    if (!(letter in usedLetters)){
        usedLetters.push(letter);
        guessLetter(letter);
    }
}