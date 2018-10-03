import { cards } from "../test_helpers/cards";
import { rules } from "./Rules";

describe("Rules", () => {
  describe("isPontoon", () => {
    it("should return true when hand has exactly one ace and one picture card", () => {
      // Arrange
      const hand = [cards.aceOfHeartsValueEleven, cards.queenOfDiamonds];
      // Act
      const result = rules.isPontoon(hand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false when hand does not contain exactly one ace and one picture card", () => {
      // Arrange
      const hand = [
        cards.aceOfClubsValueEleven,
        cards.queenOfDiamonds,
        cards.kingOfDiamonds,
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
        cards.aceOfClubsValueOne,
        cards.twoOfDiamonds,
        cards.fourOfDiamonds,
        cards.threeOfHearts,
        cards.tenOfSpades,
      ];
      // Act
      const result = rules.isFiveCardTrick(hand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false when hand has 5 cards but is bust", () => {
      // Arrange
      const hand = [
        cards.aceOfClubsValueOne,
        cards.aceOfHeartsValueOne,
        cards.fourOfClubs,
        cards.sevenOfDiamonds,
        cards.jackOfSpades,
      ];
      // Act
      const result = rules.isFiveCardTrick(hand);
      // Assert
      expect(result).toBe(false);
    });
    it("should return false when hand has less than 5", () => {
      // Arrange
      const hand = [cards.aceOfClubsValueOne];
      // Act
      const result = rules.isFiveCardTrick(hand);
      // Assert
      expect(result).toBe(false);
    });
  });
  describe("isGameATie", () => {
    it("should return true if both hands are blackjack", () => {
      // Arrange
      const playerHand = [
        cards.sevenOfDiamonds,
        cards.fourOfSpades,
        cards.jackOfSpades,
      ];

      const dealerHand = [cards.tenOfHearts, cards.aceOfClubsValueEleven];
      // Act
      const result = rules.isGameATie(playerHand, dealerHand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return true if both scores equal and the player is not bust and the dealer score at least 17", () => {
      // Arrange
      const playerHand = [
        cards.nineOfHearts,
        cards.twoOfDiamonds,
        cards.sixOfSpades,
      ];

      const dealerHand = [
          cards.tenOfClubs,
          cards.sevenOfClubs,
      ];
      // Act
      const result = rules.isGameATie(playerHand, dealerHand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false if both scores are not equal", () => {
      // Arrange
      const playerHand = [
          cards.twoOfHearts,
          cards.fourOfHearts,
          cards.eightOfHearts,
      ];

      const dealerHand = [
          cards.tenOfSpades,
          cards.eightOfDiamonds,
      ];
      // Act
      const result = rules.isGameATie(playerHand, dealerHand);
      // Assert
      expect(result).toBe(false);
    });
    it("should return false if player is bust", () => {
      // Arrange
      const playerHand = [
          cards.jackOfSpades,
          cards.fourOfHearts,
          cards.eightOfHearts,
      ];

      const dealerHand = [
          cards.twoOfSpades,
          cards.fiveOfDiamonds,
      ];
      // Act
      const result = rules.isGameATie(playerHand, dealerHand);
      // Assert
      expect(result).toBe(false);
    });
    it("should return false if the dealer score is not at least 17", () => {
      // Arrange
      const playerHand = [
        cards.threeOfDiamonds,
        cards.fourOfSpades,
      ];

      const dealerHand = [
          cards.twoOfSpades,
          cards.fiveOfDiamonds,
      ];
      // Act
      const result = rules.isGameATie(playerHand, dealerHand);
      // Assert
      expect(result).toBe(false);
    });
  });
  describe("isBust", () =>{
    it("should return true if the sum of the card values is over 21", () => {
      // Arrange
      const playerHand = [
        cards.tenOfHearts,
        cards.threeOfClubs,
        cards.tenOfSpades,
      ];
      // Act
      const result = rules.isBust(playerHand);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false if the sum of the card values is less than or equal to 21", () => {
      // Arrange
      const playerHand = [
        cards.sixOfDiamonds,
        cards.sevenOfSpades,
        cards.fourOfClubs,
      ];

      const dealerHand = [
        cards.twoOfHearts,
        cards.threeOfClubs,
        cards.tenOfSpades,
      ];
      // Act
      const playerResult = rules.isBust(playerHand);
      const dealerResult = rules.isBust(dealerHand);
      // Assert
      expect(playerResult).toBe(false);
      expect(dealerResult).toBe(false);
    });
  });
});
