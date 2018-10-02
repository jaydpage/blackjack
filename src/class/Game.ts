import ICard from "../interface/ICard";
import Deck from "./Deck";

export default class Game {
  private _deck: Deck;
  private _playerCards: ICard[];
  private _dealerCards: ICard[];

  constructor() {
    this._deck = new Deck();
    this._deck.shuffle();
    this.new();
  }

  public new() {
    this._deck = new Deck();
    this._deck.shuffle();

    this._playerCards = [];
    this._dealerCards = [];

    this.dealCardToPlayer();
    this.dealCardToDealer();
    this.dealCardToPlayer();
    this.dealCardToDealer();

    // console.log("_playerCards", this._playerCards);
    // console.log("_dealerCards", this._dealerCards);
  }

  public dealCardToPlayer() {
    const card = this._deck.dealCard();
    this._playerCards.push(card);
  }

  public dealCardToDealer() {
    const card = this._deck.dealCard();
    this._dealerCards.push(card);
  }
}
