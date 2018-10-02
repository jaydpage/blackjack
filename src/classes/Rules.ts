import ICard from "../interfaces/ICard";

class Rules {
  public isPontoon(hand: ICard[]): boolean {
    const pictureCardNames = ["Jack", "Queen", "King"];
    const cardNamesInHand = hand.map((card) => card.name);

    const containsAce = cardNamesInHand.includes("Ace");
    const containsPictureCard = cardNamesInHand.some((name) =>
      pictureCardNames.includes(name),
    );
    const containsTwoCards = hand.length === 2;

    return containsTwoCards && containsAce && containsPictureCard;
  }

  public isFiveCardTrick(hand: ICard[]): boolean {
    const score = this._getScore(hand);
    const isNotBust = score <= 21;
    const hasFiveCards = hand.length === 5;

    return isNotBust && hasFiveCards;
  }

  private _getScore(hand: ICard[]): number {
    return hand.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }
}

export const rules = new Rules();
