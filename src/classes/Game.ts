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

  private _dealCardTo(hand: ICard[]) {
    const card = this._deck.drawCard();
    hand.push(card);
  }

  private async _play(): Promise<IGameState> {
    if (rules.isPontoon(this._playerHand)) {
      return this._getGameState();
    }

    do {
      const choice = await commandLine.promptUserAction();
      if (choice === "Hit") {
        this._dealCardTo(this._playerHand);
        this._printPlayerHand();
      }
      if (choice === "Stay") {
        this._dealRemainderOfDealerHand();
      }
    } while (!this._getGameState().hasWinner);

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

  private _printHands() {
    this._printPlayerHand();
    this._printDealerHand();
  }

  private _printPlayerHand() {
    const handName = "Player Hand";
    commandLine.printHand(this._playerHand, handName);
  }

  private _printDealerHand() {
    const handName = "Dealer Hand";
    commandLine.printHand(this._dealerHand, handName);
  }
}
