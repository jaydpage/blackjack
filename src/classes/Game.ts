import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import Deck from "./Deck";
import { printer } from "./Printer";
import { rules } from "./Rules";

export default class Game {
  private _deck: Deck;
  private _playerHand: ICard[];
  private _dealerHand: ICard[];

  constructor() {
    this._startNewGame();
  }

  private _dealCardTo(hand: ICard[]) {
    const card = this._deck.drawCard();
    hand.push(card);
  }

  private _startNewGame() {
    this._resetGame();
    this._dealInitialHands();
    this._continueGame();
  }

  private _resetGame() {
    this._deck = new Deck();
    this._playerHand = [];
    this._dealerHand = [];
  }

  private _dealInitialHands() {
    this._dealCardTo(this._playerHand);
    this._dealCardTo(this._dealerHand);
    this._dealCardTo(this._playerHand);
    this._dealCardTo(this._dealerHand);
  }

  private _continueGame() {
    const gameState = this._getGameState();
    if (gameState.hasWinner) {
      this._endGame(gameState);
    }

    while (!this._getGameState().hasWinner) {
      const userChoice = this._promptUserAction();
      if (userChoice === "Hit") {
        this._dealCardTo(this._playerHand);
      }
      if (userChoice === "Pass") {
        this._dealRemainderOfDealerHand();
      }
    }

    this._endGame(this._getGameState());
  }

  private _endGame(gameState: IGameState) {
    printer.printHand(this._playerHand);
    printer.printHand(this._dealerHand);
    printer.printGameState(gameState);
  }

  private _promptUserAction(): string {
    //Capture user input and return
    return "Hit";
  }

  private _dealRemainderOfDealerHand() {
    while (rules.getScore(this._dealerHand) < 17) {
      this._dealCardTo(this._dealerHand);
    }
  }

  private _getGameState(): IGameState {
    if (rules.isPontoon(this._playerHand)) {
      return {
        hasWinner: true,
        winner: "Player",
        message: "Pontoon",
      };
    }
    if (rules.isFiveCardTrick(this._playerHand)) {
      return {
        hasWinner: true,
        winner: "Player",
        message: "Five card trick",
      };
    }
    if (rules.isBust(this._playerHand)) {
      return {
        hasWinner: true,
        winner: "Dealer",
        message: "Player is bust",
      };
    }
    if (rules.isBust(this._dealerHand)) {
      return {
        hasWinner: true,
        winner: "Player",
        message: "Dealer is bust",
      };
    }
    if (rules.isGameATie(this._playerHand, this._dealerHand)) {
      return {
        hasWinner: true,
        winner: "Dealer",
        message: "Game is tie",
      };
    }

    const playerScore = rules.getScore(this._playerHand);
    const dealerScore = rules.getScore(this._dealerHand);

    if (dealerScore >= 17) {
      const winner = playerScore > dealerScore ? "Player" : "Dealer";
      return {
        hasWinner: true,
        winner,
        message: `${winner} has more points`,
      };
    }

    return {
      hasWinner: false,
      winner: "",
      message: "",
    };
  }
}
