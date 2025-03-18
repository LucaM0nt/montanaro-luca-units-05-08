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

movieList.forEach((movie) => {
  console.log(
    `${movie.title} lasts for ${
      movie.duration
    } minutes. Stars: ${movie.stars.join(", ")}`
  );
});

// Output:
// Harry Potter and the Philosopher's Stone lasts for 152 minutes. Stars: Daniel Radcliffe, Emma Watson, Rupert Grint
// Avatars lasts for 162 minutes. Stars: Sam Worthington, Zoe Saldana, Sigourney Weaver
// The Lord of the Rings: The Fellowship of the Ring lasts for 178 minutes. Stars: Elijah Wood, Ian McKellen, Orlando Bloom
