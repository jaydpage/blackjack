import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";

class Printer {
  public getHandDescription(hand: ICard[]): string {
    let handDescription = "";
    hand.map((card) => {
      const cardDescription = this._getCardDescription(card);
      handDescription += `${cardDescription}\n`;
    });
    return handDescription.trim();
  }

  public getGameStateDescription(gameState: IGameState): string {
    if (gameState.hasWinner) {
      return `${gameState.winner} wins. ${gameState.message}`;
    }
    return "Game is still in progress";
  }

  private _getCardDescription(card: ICard): string {
    return `${card.name} of ${card.suit} (${card.value})`;
  }
}

export const printer = new Printer();
