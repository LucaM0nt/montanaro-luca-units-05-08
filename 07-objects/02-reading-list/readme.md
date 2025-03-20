# Reading List Exercise 📚

This exercise demonstrates how to manage a reading list using JavaScript. The script uses an array of objects to represent books and logs their reading status to the console.

## Assignment 📝

> -Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
> - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
> - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functionality 📋

### File: `script.js`

**Purpose**: Logs the reading status of books in a reading list.

**Key Features**:
1. **Book List**:
   - The `bookList` array contains objects representing books.
   - Each book object has the following properties:
     - `title`: The title of the book.
     - `author`: The author of the book.
     - `alreadyRead`: A boolean indicating whether the book has already been read.

2. **Logging Reading Status**:
   - The script iterates over the `bookList` array using the `forEach` method.
   - For each book, it logs whether the book has already been read or still needs to be read.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)