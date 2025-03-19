/**
 * @file script.js
 * @description This file contains the JavaScript code for managing a movie database.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of objects and arrays in JavaScript to manage a movie database.
 * The array `movieList` contains a list of movies, each represented as an object with properties `title`, `duration`, and `stars`.
 * The `forEach` method is used to iterate over the array and log details about each movie, including its title, duration, and stars.
 * 
 * function logMovieDetails - Logs the details of each movie in the list.
 * 
 * The logMovieDetails function takes a movie object as a parameter.
 * It logs the title, duration, and stars of the movie.
 */

/**
 * Array of movies in the database.
 * Each movie is represented as an object with properties `title`, `duration`, and `stars`.
 * @type {Object[]}
 * @property {string} title - The title of the movie.
 * @property {number} duration - The duration of the movie in minutes.
 * @property {string[]} stars - The list of stars in the movie.
 */
let movieList = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    duration: 152,
    stars: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
  },
  {
    title: "Avatars",
    duration: 162,
    stars: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    duration: 178,
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
  },
];

/**
 * Logs the details of each movie in the list.
 * @param {Object} movie - The movie object.
 * @param {string} movie.title - The title of the movie.
 * @param {number} movie.duration - The duration of the movie in minutes.
 * @param {string[]} movie.stars - The list of stars in the movie.
 * @returns {void}
 * @example
 * movieList.forEach(logMovieDetails);
 */
movieList.forEach((movie) => {
  console.log(
    `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}`
  );
});

// Output:
// Harry Potter and the Philosopher's Stone lasts for 152 minutes. Stars: Daniel Radcliffe, Emma Watson, Rupert Grint
// Avatars lasts for 162 minutes. Stars: Sam Worthington, Zoe Saldana, Sigourney Weaver
// The Lord of the Rings: The Fellowship of the Ring lasts for 178 minutes. Stars: Elijah Wood, Ian McKellen, Orlando Bloom