# Movie Database Exercise 🎥

This exercise demonstrates how to manage a movie database using JavaScript. The script uses an array of objects to store movie details and logs information about each movie to the console.

## Assignment 📝

> - Create an object to store the following information about a movie: title (a
string), duration (a number), and stars (an array of strings).
> - Create an Array of objects that can hold several movies.
> - Create a function to print out the movie information like so: "Puff the Magic
Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
> - Test the function by printing one movie.
> - Use the function to print all the movies in the Array.

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functionality 📋

### File: `script.js`

**Purpose**: Logs details about each movie in the database.

**Key Features**:
1. **Movie Database**:
   - The `movieList` array contains objects representing movies.
   - Each movie object has the following properties:
     - `title`: The title of the movie.
     - `duration`: The duration of the movie in minutes.
     - `stars`: An array of stars in the movie.

2. **Logging Movie Details**:
   - The script iterates over the `movieList` array using the `forEach` method.
   - For each movie, it logs the title, duration, and stars in the format:  
     "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

## Example Output 📤

When the script is executed, the following output is logged to the console:

```
Harry Potter and the Philosopher's Stone lasts for 152 minutes. Stars: Daniel Radcliffe, Emma Watson, Rupert Grint
Avatars lasts for 162 minutes. Stars: Sam Worthington, Zoe Saldana, Sigourney Weaver
The Lord of the Rings: The Fellowship of the Ring lasts for 178 minutes. Stars: Elijah Wood, Ian McKellen, Orlando Bloom
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)