import { rules } from "./Rules";

describe("Rules", () => {
  describe("isPontoon", () => {
    it("should return true when hand has exactly one ace and one picture card", () => {
      // Arrange
      const hand = [
        { name: "Ace", suit: "Hearts", value: 1 },
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
});
