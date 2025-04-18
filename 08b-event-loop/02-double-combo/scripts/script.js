/**
 * @file script.js
 * @description This file contains the implementation of a card-based combat game where players use decks of cards to battle each other. Cards can represent characters, spells, or enemies, each with unique actions and effects.
 * @date March 2025
 * @author Luca Montanaro
 *
 * @remarks
 * This script demonstrates the use of objects, arrays, and functions in JavaScript to simulate a turn-based card game.
 * Players draw cards from their decks and perform actions based on the card type.
 * The game ends when one or both decks are empty, and the player with the highest score wins.
 *
 * Additionally, this exercise is designed to conceptually reinforce the idea of stack unwinding after call execution,
 * reflecting how the JavaScript event loop handles synchronous operations and clears the call stack as each turn is resolved.
 * Each game turn mimics a synchronous frame, helping students visualize execution flow and memory management in practice.
 */

// === Utility ===

/**
 * Generates a random integer between `min` and `max` (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between `min` and `max`.
 * @example
 * const random = getRandomInt(1, 10); // e.g., 7
 */
function getRandomInt(min, max) {
  // Math.random() genera un numero decimale da 0 a 1
  // lo moltiplichiamo per la differenza tra max e min per scalare la probabilità
  // Math.floor() arrotonda verso il basso per ottenere un intero
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// === Shared Actions ===

/**
 * Defines how a character or enemy attacks a target.
 * @param {Object} target - The target of the attack.
 * @returns {number} - The damage dealt to the target.
 */
function attack(target) {
  // Il danno si basa sulla forza dell'attaccante meno la difesa del bersaglio
  const damage = Math.max(0, this.strength - (target.defense || 0));
  target.health -= damage;
  console.log(`${this.name} attacks ${target.name} for ${damage} damage.`);
  return damage;
}

/**
 * Buffs a target by increasing its strength and defense.
 * @param {Object} target - The target to buff.
 * @returns {number} - Always returns 0 as buffs do not deal damage.
 */
function buff(target) {
  // Il buff è proporzionale alla potenza della carta
  const strengthBoost = Math.floor(this.power / 2);
  const defenseBoost = Math.floor(this.power / 3);
  target.strength += strengthBoost;
  target.defense += defenseBoost;
  console.log(
    `${this.name} buffs ${target.name}: +${strengthBoost} STR, +${defenseBoost} DEF.`
  );
  return 0;
}

/**
 * Directly reduces the target's health by the spell's power.
 * @param {Object} target - The target to damage.
 * @returns {number} - The damage dealt to the target.
 */
function damage(target) {
  // Riduce direttamente la salute del bersaglio
  target.health -= this.power;
  console.log(`${this.name} damages ${target.name} for ${this.power} HP.`);
  return this.power;
}

/**
 * Simulates a duel between two characters.
 * @param {Object} target - The opponent character.
 * @returns {number} - The health lost by the losing character or 0 if it's a draw.
 */
function duel(target) {
  // Il punteggio è la somma di forza e difesa
  const myScore = this.strength + this.defense;
  const oppScore = target.strength + target.defense;

  if (myScore > oppScore) {
    // Se il punteggio è maggiore, l'avversario viene sconfitto
    target.health = 0;
    console.log(`${this.name} wins the duel vs ${target.name}.`);
    return target.health;
  } else if (myScore < oppScore) {
    // Se è inferiore, perde il giocatore attivo
    this.health = 0;
    console.log(`${target.name} wins the duel vs ${this.name}.`);
    return this.health;
  } else {
    // Parità: entrambi eliminati
    this.health = 0;
    target.health = 0;
    console.log(`${this.name} and ${target.name} draw in the duel.`);
    return 0;
  }
}

// === Card Definitions ===

/**
 * Predefined card templates organized by type.
 * @type {Object}
 * @property {Object[]} character - Array of character cards.
 * @property {Object[]} spell - Array of spell cards.
 * @property {Object[]} enemy - Array of enemy cards.
 */
const possibleCards = {
  character: [
    // Ogni personaggio ha attacco e duello
    {
      name: "Warrior",
      strength: 12,
      defense: 8,
      health: 40,
      type: "character",
      attack,
      duel,
    },
    {
      name: "Rogue",
      strength: 10,
      defense: 6,
      health: 35,
      type: "character",
      attack,
      duel,
    },
    {
      name: "Paladin",
      strength: 9,
      defense: 10,
      health: 45,
      type: "character",
      attack,
      duel,
    },
    {
      name: "Barbarian",
      strength: 15,
      defense: 5,
      health: 38,
      type: "character",
      attack,
      duel,
    },
  ],
  spell: [
    // Le spell usano funzioni specifiche basate su effetto
    { name: "Fireball", effect: "damage", power: 15, type: "spell", damage },
    { name: "Healing Light", effect: "buff", power: 10, type: "spell", buff },
    { name: "Frostbite", effect: "damage", power: 12, type: "spell", damage },
    { name: "Shield Charm", effect: "buff", power: 8, type: "spell", buff },
  ],
  enemy: [
    // I nemici possono solo attaccare
    {
      name: "Goblin",
      strength: 7,
      defense: 4,
      health: 30,
      type: "enemy",
      attack,
    },
    {
      name: "Troll",
      strength: 10,
      defense: 6,
      health: 40,
      type: "enemy",
      attack,
    },
    {
      name: "Orc",
      strength: 12,
      defense: 5,
      health: 35,
      type: "enemy",
      attack,
    },
    {
      name: "Wraith",
      strength: 9,
      defense: 3,
      health: 32,
      type: "enemy",
      attack,
    },
  ],
};

// === Deck Creation ===

/**
 * Creates a deck of random cards of a given size.
 * @param {number} size - The number of cards in the deck.
 * @returns {Object[]} - An array of card objects.
 */
function createDeck(size) {
  const deck = [];
  const types = Object.keys(possibleCards); // ['character', 'spell', 'enemy']

  for (let i = 0; i < size; i++) {
    const type = types[getRandomInt(0, types.length - 1)];
    const templates = possibleCards[type];
    const randomCard = templates[getRandomInt(0, templates.length - 1)];
    deck.push({ ...randomCard }); // Cloniamo la carta per evitare modifiche condivise
  }

  return deck;
}

// === Helpers ===

/**
 * Draws the top card from a deck.
 * @param {Object[]} deck - The deck to draw from.
 * @returns {Object} - The drawn card.
 */
function drawCard(deck) {
  return deck.pop(); // Rimuove e restituisce l'ultima carta (simula il mazzo)
}

/**
 * Logs the details of a player's play.
 * @param {number} player - The player number (1 or 2).
 * @param {Object} card - The card played by the player.
 * @returns {void}
 */
function describePlay(player, card) {
  console.log(`Player ${player} plays: ${card.name} (${card.type})`);
}

/**
 * Performs the appropriate action based on the card and target type.
 * @param {Object} card - The card performing the action.
 * @param {Object} target - The target of the action.
 * @returns {number} - The score gained from the action.
 */
function performAction(card, target) {
  if (!card || !target) return 0;

  // Personaggio contro nemico → attacca
  if (card.type === "character" && target.type === "enemy") {
    return card.attack?.(target) || 0;
  }

  // Incantesimo → effetto basato su tipo (buff/damage)
  if (card.type === "spell") {
    if (target.type === "spell") {
      // Le magie non si influenzano tra loro
      console.log(
        `${card.name} has no effect on ${target.name} (both are spells).`
      );
      return 0;
    }
    if (card.effect === "buff" && card.buff) return card.buff(target);
    if (card.effect === "damage" && card.damage) return card.damage(target);
    console.log(`${card.name} has no effect on ${target.name}.`);
    return 0;
  }

  // Duello tra personaggi
  if (card.type === "character" && target.type === "character") {
    return card.duel?.(target) || 0;
  }

  // Nemico contro altro personaggio o altro nemico → attacca
  if (
    card.type === "enemy" &&
    (target.type === "character" || target.type === "enemy")
  ) {
    return card.attack?.(target) || 0;
  }

  return 0; // Nessuna azione valida
}

// === Combat Logic ===

/**
 * Simulates a full game between two decks.
 * @param {Object[]} deck1 - The first player's deck.
 * @param {Object[]} deck2 - The second player's deck.
 * @returns {void}
 */
function playGame(deck1, deck2) {
  let points1 = 0;
  let points2 = 0;
  let turn = 1;

  // Finché entrambi hanno carte
  while (deck1.length && deck2.length) {
    console.log(`\n--- Turn ${turn} ---`);
    const card1 = drawCard(deck1);
    const card2 = drawCard(deck2);

    describePlay(1, card1);
    describePlay(2, card2);

    // Ogni carta agisce sull'altra
    points1 += performAction(card1, card2);
    points2 += performAction(card2, card1);

    turn++;
  }

  // Mostra punteggio finale
  console.log(`\n=== Final Score ===`);
  console.log(`Player 1: ${points1}`);
  console.log(`Player 2: ${points2}`);

  // Determina vincitore
  if (points1 > points2) {
    console.log("Player 1 wins!");
  } else if (points2 > points1) {
    console.log("Player 2 wins!");
  } else {
    console.log("It's a draw!");
  }
}

// === Game Start ===

// Crea mazzi casuali di dimensione tra 3 e 7 carte
const deckSize = getRandomInt(3, 7);
const player1Deck = createDeck(deckSize);
const player2Deck = createDeck(deckSize);

// Avvia il gioco
playGame(player1Deck, player2Deck);