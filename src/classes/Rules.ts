import ICard from "../interfaces/ICard";

class Rules {
  private readonly blackjackScore = 21;

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
    const isNotBust = this._isNotBust(score);
    const hasFiveCards = hand.length === 5;

    return isNotBust && hasFiveCards;
  }

  public isGameATie(playerHand: ICard[], dealerHand: ICard[]) {
    const playerScore = this._getScore(playerHand);
    const playerIsNotBust = this._isNotBust(playerScore);
    const dealerScore = this._getScore(dealerHand);
    const dealerMinScoreSatisfied = dealerScore >= 17;
    return (
      playerScore === dealerScore && playerIsNotBust && dealerMinScoreSatisfied
    );
  }

  private _isNotBust(score: number): boolean {
    return score <= this.blackjackScore;
  }

  private _getScore(hand: ICard[]): number {
    return hand.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }
}

export const rules = new Rules();
