import ICard from "../interfaces/ICard";
import {helpers} from "./Helpers";
import IGameState from "../interfaces/IGameState";

class CommandLineInterface {
  public promptUserAction(): string {
    //Capture user input and return
    return "Hit";
  }

  public printHand(hand: ICard[]) {
    const handDescription = helpers.getHandDescription(hand);
    //Print to console
  }

  public printGameState(gameState: IGameState) {
    const handDescription = helpers.getGameStateDescription(gameState);
    //Print to console
  }
}

export const commandLineInterface = new CommandLineInterface();
