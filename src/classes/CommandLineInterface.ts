import ICard from "../interfaces/ICard";
import { helpers } from "./Helpers";
import IGameState from "../interfaces/IGameState";

class CommandLineInterface {
  public promptUserAction(): string {
    //Capture user input and return
    return "Hit";
  }

  public printHand(hand: ICard[]) {
    const handDescription = helpers.getHandDescription(hand);
    console.log(handDescription);
    //Print to console
  }

  public printGameState(gameState: IGameState) {
    const gameStateDescription = helpers.getGameStateDescription(gameState);
    console.log(gameStateDescription);
    //Print to console
  }
}

export const commandLineInterface = new CommandLineInterface();
