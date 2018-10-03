import ICard from "../interfaces/ICard";
import { cards } from "../test_helpers/cards";
import { evaluator } from "./Evaluator";

describe("Evaluator", () => {
  describe("getGameState", () => {
    describe("no win condition", () => {
      it("should return blank game state", () => {
        // Arrange
        const playerHand = [cards.aceOfClubsValueEleven, cards.eightOfClubs];
        const dealerHand = [cards.threeOfClubs, cards.kingOfClubs];
        const expected = {
          hasWinner: false,
          message: "",
          winner: "",
        };
        // Act
        const gameState = evaluator.getGameState(playerHand, dealerHand);
        // Assert
        expect(gameState).toEqual(expected);
      });
    });
    describe("isPontoon", () => {
      it("should return game state with player as winner and 'Pontoon' as message", () => {
        // Arrange
        const playerHand = [cards.aceOfClubsValueEleven, cards.kingOfHearts];
        const dealerHand = [] as ICard[];
        const expected = {
          hasWinner: true,
          message: "Pontoon",
          winner: "Player",
        };
        // Act
        const gameState = evaluator.getGameState(playerHand, dealerHand);
        // Assert
        expect(gameState).toEqual(expected);
      });
    });
    describe("isFiveCardTrick", () => {
      it("should return game state with player as winner and 'Five card trick' as message", () => {
        // Arrange
        const playerHand = [
          cards.twoOfClubs,
          cards.threeOfClubs,
          cards.fourOfSpades,
          cards.twoOfHearts,
          cards.threeOfDiamonds,
        ];
        const dealerHand = [] as ICard[];
        const expected = {
          hasWinner: true,
          message: "Five card trick",
          winner: "Player",
        };
        // Act
        const gameState = evaluator.getGameState(playerHand, dealerHand);
        // Assert
        expect(gameState).toEqual(expected);
      });
    });
    describe("Player isBust", () => {
      it("should return game state with dealer as winner and 'Player is bust' as message", () => {
        // Arrange
        const playerHand = [
          cards.nineOfSpades,
          cards.jackOfClubs,
          cards.sevenOfHearts,
        ];
        const dealerHand = [] as ICard[];
        const expected = {
          hasWinner: true,
          message: "Player is bust",
          winner: "Dealer",
        };
        // Act
        const gameState = evaluator.getGameState(playerHand, dealerHand);
        // Assert
        expect(gameState).toEqual(expected);
      });
    });
    describe("Dealer isBust", () => {
      it("should return game state with player as winner and 'Dealer is bust' as message", () => {
        // Arrange
        const playerHand = [cards.nineOfSpades, cards.jackOfClubs];
        const dealerHand = [
          cards.fiveOfClubs,
          cards.sevenOfClubs,
          cards.tenOfSpades,
        ];
        const expected = {
          hasWinner: true,
          message: "Dealer is bust",
          winner: "Player",
        };
        // Act
        const gameState = evaluator.getGameState(playerHand, dealerHand);
        // Assert
        expect(gameState).toEqual(expected);
      });
      describe("Game is tie and neither player has blackjack", () => {
        it("should return game state with dealer as winner and 'Game is tie' as message", () => {
          // Arrange
          const playerHand = [cards.nineOfSpades, cards.jackOfHearts];
          const dealerHand = [
            cards.fiveOfClubs,
            cards.fourOfDiamonds,
            cards.tenOfSpades,
          ];
          const expected = {
            hasWinner: true,
            message: "Game is tie",
            winner: "Dealer",
          };
          // Act
          const gameState = evaluator.getGameState(playerHand, dealerHand);
          // Assert
          expect(gameState).toEqual(expected);
        });
      });
      describe("Game is tie and both players have blackjack", () => {
        it("should return game state with dealer as winner and 'Game is tie' as message", () => {
          // Arrange
          const playerHand = [cards.aceOfClubsValueEleven, cards.tenOfClubs];
          const dealerHand = [
            cards.sixOfClubs,
            cards.fiveOfClubs,
            cards.jackOfHearts,
          ];
          const expected = {
            hasWinner: true,
            message: "Game is tie",
            winner: "Dealer",
          };
          // Act
          const gameState = evaluator.getGameState(playerHand, dealerHand);
          // Assert
          expect(gameState).toEqual(expected);
        });
      });
    });
  });
});
