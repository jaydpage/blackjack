import { cards } from "../test_helpers/cards";
import { printer } from "./Printer";

describe("Printer", () => {
  describe("printHand", () => {
    it("should print a description of the cards in a hand", () => {
      // Arrange
      const hand = [cards.eightOfClubs, cards.sixOfSpades];
      // Act
      const playerHandDescription = printer.printHand(hand);
      // Assert
      const expected = "Eight of Clubs (8)\nSix of Spades (6)";
      expect(playerHandDescription).toEqual(expected);
    });
  });
  describe("printGameState", () => {
    it("should print win message if there is a winner", () => {
      // Arrange
      const gameState = {
        hasWinner: true,
        winner: "Player",
        message: "Pontoon",
      };
      // Act
      const gameStateDescription = printer.printGameState(gameState);
      // Assert
      const expected = "Player wins. Reason: Pontoon";
      expect(gameStateDescription).toEqual(expected);
    });
    it("should print in progress message if there is no winner", () => {
      // Arrange
      const gameState = {
        hasWinner: false,
        winner: "",
        message: "",
      };
      // Act
      const gameStateDescription = printer.printGameState(gameState);
      // Assert
      const expected = "Game is still in progress";
      expect(gameStateDescription).toEqual(expected);
    });
  });
});
