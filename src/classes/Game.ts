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
    await this._dealInitialHands();

    const gameState = await this._play();
    this._end(gameState);
  }

  private async _dealInitialHands() {
    await this._dealCardTo(this._playerHand);
    await this._dealCardTo(this._playerHand);
    this._printPlayerHand();
    await this._dealCardTo(this._dealerHand);
    await this._dealCardTo(this._dealerHand);
    this._printDealerHand();
  }

  private async _dealCardTo(hand: ICard[]) {
    const card = this._deck.drawCard();
    if (card.name === "Ace") {
      card.value = await commandLine.promptAceValue();
    }
    hand.push(card);
  }

  private async _play(): Promise<IGameState> {
    if (rules.isPontoon(this._playerHand)) {
      return this._getGameState();
    }

    do {
      const choice = await commandLine.promptTurnChoice();
      if (choice === "Hit") {
        await this._dealCardTo(this._playerHand);
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
    this._printPlayerHand();
    this._printDealerHand();
    commandLine.printGameState(gameState);
  }

  private _dealRemainderOfDealerHand() {
    while (rules.getScore(this._dealerHand) < 17) {
      this._dealCardTo(this._dealerHand);
    }
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
