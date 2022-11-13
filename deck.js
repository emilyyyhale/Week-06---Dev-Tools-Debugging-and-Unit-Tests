
// Creating a class (blueprint) of a card -- A card has 2 properties: A suit and A number value
class Card {
    constructor (suit, value) {
        this.suit = suit
        this.value = value
    }
}

// Creating a class (blueprint) of a deck of cards -- It will contain an empty array for cards made up of value and suit properties
class Deck {
    constructor () {
        this.deck = [];
        this.suits = ['H', 'D', 'S', 'C'];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }

    // Method to iterate through each deck property array, and push those values to the empty deck array
    createDeck() {
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.deck.push(new Card (suit,value));
            }
         }
    } 

    // Method to iterate through each card in the deck, shuffling by swapping places with other cards
    shuffleDeck() {
        for (let i=0; i<this.deck.length; i++) {
            const newIndex = Math.floor(Math.random() * (i + 1)); // creates a new index (place in stack) to put the card we're currently 'holding'(i)
            const stackOrigin = this.deck[newIndex] // the card at the new index goes to the place in the stack you began at for this iteration (i)
            this.deck[newIndex] = this.deck[i] // the card at the i spot goes to where our new index is
            this.deck[i] = stackOrigin // completing the swap
        }
    }
}

// Creating a class (blueprint) of a card game -- This game is for a game of War between 2 players
class Game {
    constructor (newDeckValue) {
        this.warGameDeck = newDeckValue
        this.playerOnePoints = 0;
        this.playerTwoPoints = 0;
    }

    play() { 
        // Divide the deck in half, where half goes to player one's hand and the other half to player two's hand
        const divideDeck = Math.ceil(this.warGameDeck.deck.length / 2); //console.log('Number to split the deck in half at:', divideDeck)
        let playerOneDeck = this.warGameDeck.deck.slice(0, divideDeck); //console.log('Player One cards:', playerOneDeck)
        let playerTwoDeck = this.warGameDeck.deck.slice(divideDeck, this.warGameDeck.deck.length); //console.log('Player Two cards:', playerTwoDeck);
        
        //Each player plays a card, the card value is recorded, and it is then removed from the player's hand
        for (let i=0; i<26; i++) {
            let playerOneCard = playerOneDeck.pop(i);
            let playerTwoCard = playerTwoDeck.pop(i);

            console.log(`
                Round ${i}:
            Player One card: ${playerOneCard.value}
            Player Two card: ${playerTwoCard.value}`);

            if (playerOneCard.value > playerTwoCard.value) {
                this.playerOnePoints += 1;
                console.log('Player One wins this round!');
            } else if (playerOneCard.value < playerTwoCard.value) {
                this.playerTwoPoints += 1;
                console.log('Player Two wins this round!');
            } else {
                console.log('Tie - No points given this round.');
            }
        }

        // Display the final scores and a winner
        if (this.playerOnePoints > this.playerTwoPoints) {
            console.log(`
            TOTAL SCORES:
            Player One: ${this.playerOnePoints}
            Player Two: ${this.playerTwoPoints}
            Player One WINS!`)
        } else if (this.playerOnePoints < this.playerTwoPoints) {
            console.log(`
            TOTAL SCORES:
            Player One: ${this.playerOnePoints}
            Player Two: ${this.playerTwoPoints}
            Player Two WINS!`)
        } else {
            console.log('Final Score: IT WAS A TIE!')
        }
    } 
}

// WAR - Set Up
// Get out a deck of cards - Make sure it is a full deck of 52 - Shuffle
let warDeck = new Deck (); // creating a deck object (instance of the deck class) to play the game with
warDeck.createDeck();
warDeck.shuffleDeck();

// WAR - Play
// Deal the deck to the two players - Each player plays a card - Player with higher card gets a point
let warGame = new Game(warDeck); // creating a game object (instance of the game class) to play specific game of War, using the shuffled deck of 52 cards created above (line 101)
warGame.play();





