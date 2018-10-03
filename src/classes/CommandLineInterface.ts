import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import { helpers } from "./Helpers";

class CommandLineInterface {
  public promptUserAction(): string {
    // Capture user input and return
    return "Hit";
  }

  public printHand(hand: ICard[]) {
    console.log("hand:", hand);
    const handDescription = helpers.getHandDescription(hand);
    console.log(handDescription);
  }

  public printGameState(gameState: IGameState) {
    const gameStateDescription = helpers.getGameStateDescription(gameState);
    console.log("--------------------");
    console.log("     GAME OVER      ");
    console.log("--------------------");
    console.log(`<<<<<<  ${gameStateDescription}  >>>>>>`);
  }
}

export const commandLineInterface = new CommandLineInterface();
