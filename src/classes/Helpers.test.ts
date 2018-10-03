import { cards } from "../test_helpers/cards";
import { helpers } from "./Helpers";

describe("Helpers", () => {
  describe("getHandDescription", () => {
    it("should print a description of the cards in a hand", () => {
      // Arrange
      const hand = [cards.eightOfClubs, cards.sixOfSpades];
      // Act
      const playerHandDescription = helpers.getHandDescription(hand);
      // Assert
      const expected = "Eight of Clubs (8)\nSix of Spades (6)";
      expect(playerHandDescription).toEqual(expected);
    });
  });
  describe("getGameStateDescription", () => {
    it("should return win message if there is a winner", () => {
      // Arrange
      const gameState = {
        hasWinner: true,
        message: "Pontoon",
        winner: "Player",
      };
      // Act
      const gameStateDescription = helpers.getGameStateDescription(gameState);
      // Assert
      const expected = "Player wins. Pontoon";
      expect(gameStateDescription).toEqual(expected);
    });
    it("should return in progress message if there is no winner", () => {
      // Arrange
      const gameState = {
        hasWinner: false,
        message: "",
        winner: "",
      };
      // Act
      const gameStateDescription = helpers.getGameStateDescription(gameState);
      // Assert
      const expected = "Game is still in progress";
      expect(gameStateDescription).toEqual(expected);
    });
  });
});
