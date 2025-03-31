/** 
 * Problemi e criticità della consegna:
 * 1. Dungeons and dragons non è un gioco di carte, ma un gioco di ruolo da tavolo. 
 *  Le carte possono essere intese come una rappresentazione del combat system del gioco,
 *  ma questo genera altri problemi.
 * 2. Una rappresentazione del combat system può essere valutata usando le carte come
 *  azioni, oggetti ed incantesimi che una CREATURA può usare. Non è molto sensato avere
 *  characters e enemies come 2 categorie di carte.
 * 3. Anche usandoli come categorie di carte non è chiara la differenziazione tra characters e enemies.
 * 4. Giocare una sola carta per turno, in uno scenario dove le creature sono una tipologia di carta
 *  casuale giocabile, non ha senso. Cosa succede se i giocatori non hanno creature sul campo?
 * 5. Cosa dovrebbe succedere se un giocatore continua a non pescare creature? 
 * 6. Se si gioca una sola carta a turno, l'idea è che le creature si accumulino sul campo,
 * aggiungendo anche il dover scegliere un target, oppure vengono usate e svaniscano? Perchè
 * in questo secondo caso non avrebbe senso.
 * 
 * Soluzione proposta: 2 pool di carte diverse: creature e spell/azioni/oggetti.
 * 1 creatura per giocatore sul campo, che può essere attaccata e attacca ogni turno.
 * Quando muore viene rimpiazzata dalla prossima. 
 * Ogni turno si usa la prima carta del mazzo spell/azioni/oggetti.
 * 
*/

// carte con azioni e effetti
// Ogni carta ha un nome, un tipo (creature, magic, item), un attacco, punti vita e un'azione
const cards = [
  {
    name: "Fire Dragon",
    type: "creature",
    attack: 10,
    healthPoints: 25,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },
  {
    name: "Stone Troll",
    type: "creature",
    attack: 8,
    healthPoints: 30,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },
  {
    name: "Guardian Angel",
    type: "creature",
    attack: 5,
    healthPoints: 20,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },
  {
    name: "Shadow Wolf",
    type: "creature",
    attack: 7,
    healthPoints: 18,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },
  {
    name: "Ice Golem",
    type: "creature",
    attack: 6,
    healthPoints: 35,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },
  {
    name: "Dark Sorcerer",
    type: "creature",
    attack: 9,
    healthPoints: 22,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },
  {
    name: "Thunder Griffin",
    type: "creature",
    attack: 11,
    healthPoints: 28,
    action: function (target) {
      target.healthPoints -= this.attack;
    },
  },

  {
    name: "Healing Spell",
    type: "magic",
    effectDescription: "heals 5 HP",
    effectValue: 5,
    effectTimer: null,
    action: function (target) {
      target.healthPoints += this.effectValue;
    },
  },
  {
    name: "Fire Spell",
    type: "magic",
    effectDescription: "deals 8 HP damage",
    effectValue: 8,
    effectTimer: null,
    action: function (target) {
      target.healthPoints -= this.effectValue;
    },
  },
  {
    name: "Lightning Strike",
    type: "magic",
    effectDescription: "stuns for 1 turn",
    effectValue: null,
    effectTimer: 1,
    action: function (target) {
        // target.stunned = true;
    },
  },
  {
    name: "Frost Barrier",
    type: "magic",
    effectDescription: "reduces damage taken by 3 for 2 turns",
    effectValue: 3,
    effectTimer: 2,
    action: function (target) {
        // target.attack -= this.effectValue;
    },
  },
  {
    name: "Shadow Curse",
    type: "magic",
    effectDescription: "reduces enemy attack by 3 for 3 turns",
    effectValue: 3,
    effectTimer: 3,
    action: function (target) {
        target.attack -= this.effectValue;
    },
  },

  {
    name: "Strength Potion",
    type: "item",
    effectDescription: "increases attack by 2",
    effectValue: 2,
    effectTimer: null,
    action: function (target) {
        terget.attack += this.effectValue;
    },
  },
  {
    name: "Magic Shield",
    type: "item",
    effectDescription: "blocks 4 damage",
    effectValue: 4,
    effectTimer: null,
    action: function (target) {
        target.healthPoints += this.effectValue;
    },
  },
  {
    name: "Poisoned Arrow",
    type: "item",
    effectDescription: "deals 1 damage per turn",
    effectValue: 1,
    effectTimer: 0,
    action: function (target) {
        // target.poisoned = true;
    },
  },
  {
    name: "Electric Bomb",
    type: "item",
    effectDescription: "enemy stunned 1 turn",
    effectValue: null,
    effectTimer: 1,
    action: function (target) {
        // target.stunned = true;
    },
  },
  {
    name: "Sword of Light",
    type: "item",
    effectDescription: "increases attack by 2",
    effectValue: 2,
    effectTimer: null,
    action: function (target) {
        target.attack = +this.effectValue;
    },
  },
];

// Ogni giocatore ha un mazzo di carte e un punteggio, al momento ci sono delle carte di prova
let player1Deck = ["card1", "card2", "card3", "card4", "card5"];
let player2Deck = ["card6", "card7", "card8", "card9", "card10"];
let player1Score = 0;
let player2Score = 0;

//carta attiva di ciascun giocatore
let player1ActiveCard = null;
let player2ActiveCard = null;

// pescare carta da mazzo
function drawCard(playerDeck) {
  let currentCard = playerDeck.shift();
  return currentCard;
}

// giocare carta e target
function playCard(card, target) {
  card.action(target);
}

function turn(){

}