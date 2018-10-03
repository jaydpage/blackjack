import { getCleanDeck } from "../constants";
import Deck from "./Deck";

describe("Deck", () => {
  describe("constructor", () => {
    it("sholud initialise with a full clean deck", () => {
      // Arrange
      const deck = new Deck();
      // Act
      // Assert
      getCleanDeck().forEach((card) => {
        expect(deck.cards).toContainEqual(card);
      });
    });
    it("should randomise the order of the cards in the deck", () => {
      // Arrange
      const deck = new Deck();
      // Act
      // Assert
      expect(deck.cards).not.toEqual(getCleanDeck);
    });
  });
  describe("drawCard", () => {
    it("should remove the top card of the deck and add return it", () => {
      // Arrange
      const deck = new Deck();
      // Act
      const card = deck.drawCard();
      // Assert
      expect(card).not.toEqual(deck.cards[0]);
      expect(deck.cards.length).toBe(51);
    });
  });
});
