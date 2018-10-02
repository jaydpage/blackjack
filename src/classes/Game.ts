import ICard from "../interfaces/ICard";
import Deck from "./Deck";

export default class Game {
  private _deck: Deck;
  private _playerHand: ICard[];
  private _dealerHand: ICard[];

  constructor() {
    this.new();
  }

  public new() {
    this._resetGameState();
    this._dealInitialHands();

    // console.log("_playerCards", this._playerHand);
    // console.log("_dealerCards", this._dealerHand);
  }

  public dealCardTo(hand: ICard[]) {
    const card = this._deck.dealCard();
    hand.push(card);
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
