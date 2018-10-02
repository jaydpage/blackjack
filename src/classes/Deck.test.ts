import Deck from "./Deck";

const cleanDeck = [
  { name: "Ace", suit: "Hearts", value: 1 },
  { name: "Two", suit: "Hearts", value: 2 },
  { name: "Three", suit: "Hearts", value: 3 },
  { name: "Four", suit: "Hearts", value: 4 },
  { name: "Five", suit: "Hearts", value: 5 },
  { name: "Six", suit: "Hearts", value: 6 },
  { name: "Seven", suit: "Hearts", value: 7 },
  { name: "Eight", suit: "Hearts", value: 8 },
  { name: "Nine", suit: "Hearts", value: 9 },
  { name: "Ten", suit: "Hearts", value: 10 },
  { name: "Jack", suit: "Hearts", value: 10 },
  { name: "Queen", suit: "Hearts", value: 10 },
  { name: "King", suit: "Hearts", value: 10 },
  { name: "Ace", suit: "Diamonds", value: 1 },
  { name: "Two", suit: "Diamonds", value: 2 },
  { name: "Three", suit: "Diamonds", value: 3 },
  { name: "Four", suit: "Diamonds", value: 4 },
  { name: "Five", suit: "Diamonds", value: 5 },
  { name: "Six", suit: "Diamonds", value: 6 },
  { name: "Seven", suit: "Diamonds", value: 7 },
  { name: "Eight", suit: "Diamonds", value: 8 },
  { name: "Nine", suit: "Diamonds", value: 9 },
  { name: "Ten", suit: "Diamonds", value: 10 },
  { name: "Jack", suit: "Diamonds", value: 10 },
  { name: "Queen", suit: "Diamonds", value: 10 },
  { name: "King", suit: "Diamonds", value: 10 },
  { name: "Ace", suit: "Spades", value: 1 },
  { name: "Two", suit: "Spades", value: 2 },
  { name: "Three", suit: "Spades", value: 3 },
  { name: "Four", suit: "Spades", value: 4 },
  { name: "Five", suit: "Spades", value: 5 },
  { name: "Six", suit: "Spades", value: 6 },
  { name: "Seven", suit: "Spades", value: 7 },
  { name: "Eight", suit: "Spades", value: 8 },
  { name: "Nine", suit: "Spades", value: 9 },
  { name: "Ten", suit: "Spades", value: 10 },
  { name: "Jack", suit: "Spades", value: 10 },
  { name: "Queen", suit: "Spades", value: 10 },
  { name: "King", suit: "Spades", value: 10 },
  { name: "Ace", suit: "Clubs", value: 1 },
  { name: "Two", suit: "Clubs", value: 2 },
  { name: "Three", suit: "Clubs", value: 3 },
  { name: "Four", suit: "Clubs", value: 4 },
  { name: "Five", suit: "Clubs", value: 5 },
  { name: "Six", suit: "Clubs", value: 6 },
  { name: "Seven", suit: "Clubs", value: 7 },
  { name: "Eight", suit: "Clubs", value: 8 },
  { name: "Nine", suit: "Clubs", value: 9 },
  { name: "Ten", suit: "Clubs", value: 10 },
  { name: "Jack", suit: "Clubs", value: 10 },
  { name: "Queen", suit: "Clubs", value: 10 },
  { name: "King", suit: "Clubs", value: 10 },
];

describe("Deck", () => {
  describe("constructor", () => {
    it("sholud initialise with a full clean deck", () => {
      // Arrange
      const deck = new Deck();
      // Act
      // Assert
      cleanDeck.forEach((card) => {
        expect(deck.cards).toContainEqual(card);
      });
    });
  });
  describe("shuffle", () => {
    it("should randomise the order of the cards in the deck", () => {
      // Arrange
      const deck = new Deck();
      // Act
      deck.shuffle();
      // Assert
      expect(deck.cards).not.toEqual(cleanDeck);
    });
  });
});
