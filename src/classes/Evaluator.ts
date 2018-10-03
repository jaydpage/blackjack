import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import { rules } from "./Rules";

class Evaluator {
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

  private _buildGameState(winner: string, message: string) {
    return {
      hasWinner: winner ? true : false,
      message,
      winner,
    };
  }
}

export const evaluator = new Evaluator();
