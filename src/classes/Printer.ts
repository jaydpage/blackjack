import ICard from "../interfaces/ICard";

class Printer {
  public printHand(hand: ICard[]): string {
    let handDescription = "";
    hand.map((card) => {
      const cardDescription = this._getCardDescription(card);
      handDescription += `${cardDescription}\n`;
    });
    return handDescription.trim();
  }

  public printGameState(gameState: any): string {
    if(gameState.hasWinner){
      return `${gameState.winner} wins. Reason: ${gameState.message}`;
    }
    return "Game is still in progress";
  }

  private _getCardDescription(card: ICard): string {
    return `${card.name} of ${card.suit} (${card.value})`;
  }
}

export const printer = new Printer();
