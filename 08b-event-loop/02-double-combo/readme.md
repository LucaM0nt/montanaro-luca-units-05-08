# Card-Based Combat Game 🃏⚔️

This project simulates a turn-based card combat game where players use decks of cards to battle each other. Cards can represent characters, spells, or enemies, each with unique actions and effects. The game demonstrates the use of JavaScript objects, arrays, and functions to simulate a dynamic and interactive gameplay experience.  

Additionally, this exercise is designed to conceptually reinforce the idea of stack unwinding after call execution, reflecting how the JavaScript event loop handles synchronous operations and clears the call stack as each turn is resolved. Each game turn mimics a synchronous frame, helping students visualize execution flow and memory management in practice.

## Assignment 📝

> - Create a card-based combat game where two players draw cards from their decks and perform actions based on the card type.
> - Each card can represent a **character**, **spell**, or **enemy**, with unique properties and actions.
> - The game ends when one or both decks are empty, and the player with the highest score wins.

## Usage 🛠️

1. Open the local `index.html` file in a web browser or run the script in a Node.js environment.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Features ✨

- **Dynamic Deck Creation**: Randomly generates decks of cards for both players, with each card having unique properties and actions.
- **Turn-Based Gameplay**: Players take turns drawing cards and performing actions based on the card type.
- **Card Types**:
  - **Characters**: Can attack or duel other cards.
  - **Spells**: Can buff allies or damage enemies.
  - **Enemies**: Can attack other cards.
- **Score Tracking**: Points are awarded based on the actions performed during the game.
- **Randomized Gameplay**: Deck sizes and card properties are randomized for each game.

## How It Works ⚙️

1. **Deck Creation**:
   - Each player is assigned a deck of random cards (size between 3 and 7).
   - Cards are randomly selected from predefined templates for characters, spells, and enemies.

2. **Gameplay**:
   - Players take turns drawing the top card from their decks.
   - Each card performs an action based on its type:
     - **Characters**: Can attack or duel other cards.
     - **Spells**: Can buff allies or damage enemies.
     - **Enemies**: Can attack other cards.
   - Actions are logged to the console, showing the effects of each turn.

3. **Game End**:
   - The game ends when one or both decks are empty.
   - The player with the highest score wins. If scores are tied, the game ends in a draw.

## Code Overview 🛠️

### Key Functions

1. **`getRandomInt(min, max)`**:
   - Generates a random integer between `min` and `max` (inclusive).

2. **`createDeck(size)`**:
   - Creates a deck of random cards of a given size.

3. **`drawCard(deck)`**:
   - Draws the top card from a deck.

4. **`performAction(card, target)`**:
   - Executes the appropriate action based on the card type and its target.

5. **`playGame(deck1, deck2)`**:
   - Simulates a full game between two players using their respective decks.

### Card Types

- **Characters**:
  - Properties: `strength`, `defense`, `health`.
  - Methods: `attack`, `duel`.
- **Spells**:
  - Properties: `effect`, `power`.
  - Methods: `buff`, `damage`.
- **Enemies**:
  - Properties: `strength`, `defense`, `health`.
  - Methods: `attack`.

### Example Card Templates

```javascript
const possibleCards = {
  character: [
    { name: "Warrior", strength: 12, defense: 8, health: 40, type: "character", attack, duel },
    { name: "Rogue", strength: 10, defense: 6, health: 35, type: "character", attack, duel },
  ],
  spell: [
    { name: "Fireball", effect: "damage", power: 15, type: "spell", damage },
    { name: "Healing Light", effect: "buff", power: 10, type: "spell", buff },
  ],
  enemy: [
    { name: "Goblin", strength: 7, defense: 4, health: 30, type: "enemy", attack },
    { name: "Troll", strength: 10, defense: 6, health: 40, type: "enemy", attack },
  ],
};
```
## Example Output 📤

```
--- Turn 1 ---
Player 1 plays: Warrior (character)
Player 2 plays: Goblin (enemy)
Warrior attacks Goblin for 8 damage.
Goblin attacks Warrior for 3 damage.

--- Turn 2 ---
Player 1 plays: Fireball (spell)
Player 2 plays: Troll (enemy)
Fireball damages Troll for 15 HP.
Troll attacks Player 1 for 10 damage.

=== Final Score ===
Player 1: 25
Player 2: 20
Player 1 wins!
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)