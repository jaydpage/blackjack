import ICard from "../interfaces/ICard";
import Deck from "./Deck";

export default class Game {
  private _deck: Deck;
  private _playerHand: ICard[];
  private _dealerHand: ICard[];

  constructor() {
    this._new();
  }

  public dealCardTo(hand: ICard[]) {
    const card = this._deck.dealCard();
    hand.push(card);
  }

  private _new() {
    this._resetGameState();
    this._dealInitialHands();

    // const playerScore = this._getScore(this._playerHand);
    // const dealerScore = this._getScore(this._dealerHand);

    // console.log("playerScore", playerScore);
    // console.log("dealerScore", dealerScore);
    // console.log("_playerCards", this._playerHand);
    // console.log("_dealerCards", this._dealerHand);
  }

  private _getScore(hand: ICard[]): number {
    return hand.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }

  private _resetGameState() {
    this._deck = new Deck();
    this._playerHand = [];
    this._dealerHand = [];
  }

  private _dealInitialHands() {
    this.dealCardTo(this._playerHand);
    this.dealCardTo(this._dealerHand);
    this.dealCardTo(this._playerHand);
    this.dealCardTo(this._dealerHand);
  }
}
