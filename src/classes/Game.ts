import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import { commandLine } from "./CommandLine";
import Deck from "./Deck";
import { rules } from "./Rules";

export default class Game {
  constructor(
    private _deck: Deck = new Deck(),
    private _playerHand: ICard[] = [],
    private _dealerHand: ICard[] = [],
  ) {
    this._start();
  }

  private async _start() {
    this._dealInitialHands();
    this._printHands();

    const gameState = await this._play();
    this._end(gameState);
  }

  private _dealInitialHands() {
    this._dealCardTo(this._playerHand);
    this._dealCardTo(this._dealerHand);
    this._dealCardTo(this._playerHand);
    this._dealCardTo(this._dealerHand);
  }

  private _printHands() {
    console.log("---------Player Hand---------");
    commandLine.printHand(this._playerHand);
    console.log("---------Dealer Hand---------");
    commandLine.printHand(this._dealerHand);
  }

  private _dealCardTo(hand: ICard[]) {
    const card = this._deck.drawCard();
    hand.push(card);
  }

  private async _play() {
    const gameState = this._getGameState();
    if (gameState.hasWinner) {
      return gameState;
    }

    while (!this._getGameState().hasWinner) {
      const choice = await commandLine.promptUserAction();
      if (choice === "Hit") {
        this._dealCardTo(this._playerHand);
        console.log("---------Player Hand---------");
        commandLine.printHand(this._playerHand);
      }
      if (choice === "Stay") {
        this._dealRemainderOfDealerHand();
      }
    }

    return this._getGameState();
  }

  private _getGameState() {
    return rules.getGameState(this._playerHand, this._dealerHand);
  }

  private _end(gameState: IGameState) {
    this._printHands();
    commandLine.printGameState(gameState);
  }

  private _dealRemainderOfDealerHand() {
    while (rules.getScore(this._dealerHand) < 17) {
      this._dealCardTo(this._dealerHand);
    }
  }
}
