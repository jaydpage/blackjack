import { rules } from "./Rules";

describe("Rules", () => {
  describe("isPontoon", () => {
    it("should return true when hand has exactly one ace and one picture card", () => {
      // Arrange
      const hand = [
        { name: "Ace", suit: "Hearts", value: 11 },
        { name: "Queen", suit: "Diamonds", value: 10 },
      ];
      // Act
      const result = rules.isPontoon(hand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false when hand does not contain exactly one ace and one picture card", () => {
      // Arrange
      const hand = [
        { name: "Ace", suit: "Clubs", value: 1 },
        { name: "Queen", suit: "Diamonds", value: 10 },
        { name: "King", suit: "Diamonds", value: 10 },
      ];
      // Act
      const result = rules.isPontoon(hand);
      // Assert
      expect(result).toBe(false);
    });
  });
  describe("isFiveCardTrick", () => {
    it("should return true when hand has 5 cards and is not bust", () => {
      // Arrange
      const hand = [
        { name: "Ace", suit: "Clubs", value: 1 },
        { name: "Two", suit: "Diamonds", value: 2 },
        { name: "Four", suit: "Diamonds", value: 4 },
        { name: "Three", suit: "Hearts", value: 3 },
        { name: "Ten", suit: "Spades", value: 10 },
      ];
      // Act
      const result = rules.isFiveCardTrick(hand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false when hand has 5 cards but is bust", () => {
      // Arrange
      const hand = [
        { name: "Ace", suit: "Clubs", value: 1 },
        { name: "Ace", suit: "Hearts", value: 1 },
        { name: "Four", suit: "Clubs", value: 4 },
        { name: "Seven", suit: "Diamonds", value: 7 },
        { name: "Jack", suit: "Spades", value: 10 },
      ];
      // Act
      const result = rules.isFiveCardTrick(hand);
      // Assert
      expect(result).toBe(false);
    });
    it("should return false when hand has less than 5", () => {
      // Arrange
      const hand = [
        { name: "Ace", suit: "Clubs", value: 1 },
      ];
      // Act
      const result = rules.isFiveCardTrick(hand);
      // Assert
      expect(result).toBe(false);
    });
  });
});
