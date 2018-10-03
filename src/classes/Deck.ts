import { getCleanDeck } from "../constants";
import ICard from "../interfaces/ICard";
export default class Deck {
  constructor(private _cards: ICard[] = getCleanDeck()) {
    this._shuffle();
  }

  get cards(): ICard[] {
    return this._cards;
  }

  public drawCard(): ICard {
    return this._cards.shift() as ICard;
  }

  private _shuffle() {
    this._cards.sort(() => 0.5 - Math.random());
  }
}
