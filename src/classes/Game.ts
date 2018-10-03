import ICard from "../interfaces/ICard";
import Deck from "./Deck";
import { printer } from "./Printer";
import { rules } from "./Rules";

export default class Game {
  private _deck: Deck;
  private _playerHand: ICard[];
  private _dealerHand: ICard[];

  constructor() {
    this._startNew();
  }

  private _dealCardTo(hand: ICard[]) {
    const card = this._deck.drawCard();
    hand.push(card);
  }

  private _startNew() {
    this._resetGameState();
    this._dealInitialHands();

    this._playPlayerHand();
  }

  private _evaluateGameState() {
    if (rules.isPontoon(this._playerHand)) {
      // End Game
    }
  }

  private _resetGameState() {
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

  private _playPlayerHand() {
    // Loop while no winner
        // Prompt the player to Hit or Pass
          // If Hit, deal another card to the player
            // Evaluate game state
        // If Pass
          // Deal remainder of dealer hand
            // Evaluate game state
    //
  }

  private _dealRemainderOfDealerHand() {
    while (rules.getScore(this._dealerHand) < 17) {
      this._dealCardTo(this._dealerHand);
    }
  }

  private _printPlayerHand(): string {
    return printer.printHand(this._playerHand);
  }

  private _printDealerHand(): string {
    return printer.printHand(this._dealerHand);
  }

  private _determineWinner(): string {
    if (rules.isFiveCardTrick(this._playerHand)) {
      return "Player Wins!";
    }
    if (rules.isBust(this._playerHand)) {
      return "Dealer Wins!";
    }
    if (rules.isBust(this._dealerHand)) {
      return "Player Wins!";
    }
    if (rules.isGameATie(this._playerHand, this._dealerHand)) {
      return "Dealer Wins!";
    }
    const playerScore = rules.getScore(this._playerHand);
    const dealerScore = rules.getScore(this._dealerHand);

    return playerScore > dealerScore ? "Player Wins!" : "Dealer Wins";
  }
}
