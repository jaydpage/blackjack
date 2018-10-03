import inquirer = require("inquirer");
import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import { helpers } from "./Helpers";
class CommandLine {
  public async promptUserAction(): Promise<string> {
    const questions = [
      {
        choices: ["Hit", "Stay"],
        message: "How would you like to proceed?",
        name: "choice",
        type: "list",
      },
    ];

    return inquirer.prompt(questions).then((answers: any) => {
      return answers.choice as string;
    });
  }

  public printHand(hand: ICard[]) {
    const handDescription = helpers.getHandDescription(hand);
    console.log(handDescription);
  }

  public printGameState(gameState: IGameState) {
    const gameStateDescription = helpers.getGameStateDescription(gameState);
    console.log(`<<<<<<  ${gameStateDescription}  >>>>>>`);
    console.log("-----------------------------");
    console.log("          GAME OVER          ");
    console.log("-----------------------------");

  }
}

export const commandLine = new CommandLine();
