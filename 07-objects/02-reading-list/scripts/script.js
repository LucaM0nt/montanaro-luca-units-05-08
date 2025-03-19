/**
 * @file script.js
 * @description This file contains the JavaScript code for managing a reading list of books.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of objects and arrays in JavaScript to manage a reading list.
 * The array `bookList` contains a list of books, each represented as an object with properties `title`, `author`, and `alreadyRead`.
 * The `forEach` method is used to iterate over the array and log whether each book has already been read or still needs to be read.
 * 
 * function logBookStatus - Logs the reading status of each book in the list.
 * 
 * The logBookStatus function takes a book object as a parameter.
 * It logs whether the book has already been read or still needs to be read.
 */

/**
 * Array of books in the reading list.
 * Each book is represented as an object with properties `title`, `author`, and `alreadyRead`.
 * @type {Object[]}
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {boolean} alreadyRead - Whether the book has already been read.
 */
let bookList = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
];

/**
 * Logs the reading status of each book in the list.
 * @param {Object} book - The book object.
 * @param {string} book.title - The title of the book.
 * @param {string} book.author - The author of the book.
 * @param {boolean} book.alreadyRead - Whether the book has already been read.
 * @returns {void}
 * @example
 * bookList.forEach(logBookStatus);
 */
bookList.forEach((book) => {
  let bookInfo = `${book.title} by ${book.author}`;
  if (book.alreadyRead) {
    console.log(`You already read ${bookInfo}`);
  } else {
    console.log(`You still need to read ${bookInfo}`);
  }
});

// Output:
// You already read The Hobbit by J.R.R. Tolkien
// You still need to read The Lord of the Rings by J.R.R. Tolkien
// You already read Harry Potter and the Philosopher's Stone by J.K. Rowling