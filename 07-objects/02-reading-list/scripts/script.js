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

bookList.foreach((book) => {
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
