import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import Deck from "./Deck";
import { rules } from "./Rules";
import { commandLineInterface } from "./CommandLineInterface";
import { evaluator } from "./Evaluator";

export default class Game {
  private _playerHand: ICard[];
  private _dealerHand: ICard[];

  constructor(private _deck: Deck = new Deck()) {
    this._start();
  }

  private _start() {
    this._dealInitialHands();
    this._printHands();

    const gameState = this._play();
    this._end(gameState);
  }

  private _dealInitialHands() {
    this._dealCardTo(this._playerHand);
    this._dealCardTo(this._dealerHand);
    this._dealCardTo(this._playerHand);
    this._dealCardTo(this._dealerHand);
  }

  private _printHands() {
    commandLineInterface.printHand(this._playerHand);
    commandLineInterface.printHand(this._dealerHand);
  }

  private _dealCardTo(hand: ICard[]) {
    const card = this._deck.drawCard();
    hand.push(card);
  }

  private _play() {
    const gameState = this._getGameState();
    if (gameState.hasWinner) {
      return gameState;
    }

    while (!this._getGameState().hasWinner) {
      const userChoice = commandLineInterface.promptUserAction();
      if (userChoice === "Hit") {
        this._dealCardTo(this._playerHand);
        commandLineInterface.printHand(this._playerHand);
      }
      if (userChoice === "Pass") {
        this._dealRemainderOfDealerHand();
      }
    }

    return this._getGameState();
  }

  private _getGameState() {
    return evaluator.getGameState(this._playerHand, this._dealerHand);
  }

  private _end(gameState: IGameState) {
    commandLineInterface.printHand(this._playerHand);
    commandLineInterface.printHand(this._dealerHand);
    commandLineInterface.printGameState(gameState);
  }

  private _dealRemainderOfDealerHand() {
    while (rules.getScore(this._dealerHand) < 17) {
      this._dealCardTo(this._dealerHand);
    }
  }
}
