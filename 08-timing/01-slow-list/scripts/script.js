let randomAnimals = ["dog", "cat", "horse", "cow", "pig", "chicken", "goat", "sheep", "duck", "goose", "turkey", "rabbit", "deer", "elk", "moose", "bear", "wolf", "fox", "coyote", "bobcat", "mountain lion", "raccoon", "opossum", "dolphin", "fish", "lizard", "snake", "turtle", "frog", "toad"];
timer = 0;

randomAnimals.forEach((animal) => {
    setTimeout(() => (console.log(animal)), timer);
    timer += 1000;
});