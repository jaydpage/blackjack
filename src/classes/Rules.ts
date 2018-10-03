import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";

class Rules {
  private readonly blackjackScore = 21;

  public getGameState(playerHand: ICard[], dealerHand: ICard[]): IGameState {
    if (rules.isPontoon(playerHand)) {
      return this._buildGameState("Player", "Pontoon");
    }
    if (rules.isFiveCardTrick(playerHand)) {
      return this._buildGameState("Player", "Five card trick");
    }
    if (rules.isBust(playerHand)) {
      return this._buildGameState("Dealer", "Player is bust");
    }
    if (rules.isBust(dealerHand)) {
      return this._buildGameState("Player", "Dealer is bust");
    }
    if (rules.isGameATie(playerHand, dealerHand)) {
      return this._buildGameState("Dealer", "Game is tie");
    }

    const playerScore = rules.getScore(playerHand);
    const dealerScore = rules.getScore(dealerHand);

    if (dealerScore >= 17) {
      const winner = playerScore > dealerScore ? "Player" : "Dealer";
      return this._buildGameState(winner, `${winner} has more points`);
    }
    return this._buildGameState("", "");
  }

  public getScore(hand: ICard[]): number {
    return hand.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }

  private _buildGameState(winner: string, message: string) {
    return {
      hasWinner: winner ? true : false,
      message,
      winner,
    };
  }

  private isPontoon(hand: ICard[]): boolean {
    const pictureCardNames = ["Jack", "Queen", "King"];
    const cardNamesInHand = hand.map((card) => card.name);

    const containsAce = cardNamesInHand.includes("Ace");
    const containsPictureCard = cardNamesInHand.some((name) =>
      pictureCardNames.includes(name),
    );
    const containsTwoCards = hand.length === 2;

    return containsTwoCards && containsAce && containsPictureCard;
  }

  private isFiveCardTrick(hand: ICard[]): boolean {
    const isNotBust = !this.isBust(hand);
    const hasFiveCards = hand.length === 5;

    return isNotBust && hasFiveCards;
  }

  private isGameATie(playerHand: ICard[], dealerHand: ICard[]) {
    const playerScore = this.getScore(playerHand);
    const playerIsNotBust = !this.isBust(playerHand);
    const dealerScore = this.getScore(dealerHand);
    const dealerMinScoreSatisfied = dealerScore >= 17;
    return (
      playerScore === dealerScore && playerIsNotBust && dealerMinScoreSatisfied
    );
  }

  private isBust(hand: ICard[]) {
    const score = this.getScore(hand);
    return score > this.blackjackScore;
  }
}

export const rules = new Rules();
