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
}

export const rules = new Rules();
