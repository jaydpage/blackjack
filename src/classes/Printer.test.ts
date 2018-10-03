import { cards } from "../test_helpers/cards";
import { printer} from "./Printer";

describe("Printer", () => {
  describe("printHand", () => {
    it("should print a description of the cards in a hand", () => {
      // Arrange
      const hand = [cards.eightOfClubs, cards.sixOfSpades];
      // Act
      const playerHandDescription = printer.printHand(hand);
      // Assert
      const expected = "Eight of Clubs (8)\nSix of Spades (6)"
      expect(playerHandDescription).toEqual(expected);
    });
  });
});
