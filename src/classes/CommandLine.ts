import inquirer = require("inquirer");
import ICard from "../interfaces/ICard";
import IGameState from "../interfaces/IGameState";
import { printer } from "./Printer";
class CommandLine {
  public async promptTurnChoice(): Promise<string> {
    const questions = [
      {
        choices: ["Hit", "Stay"],
        message: "How would you like to proceed?",
        name: "choice",
        type: "list",
      },
    ];

    return inquirer.prompt(questions).then((answers: any) => {
      return answers.choice;
    });
  }

  public async promptAceValue(): Promise<number> {
    const questions = [
      {
        choices: ["1", "11"],
        message: "An Ace has been drawn. Choose a point value.",
        name: "value",
        type: "list",
      },
    ];

    return inquirer.prompt(questions).then((answers: any) => {
      return Number(answers.value);
    });
  }

  public printHand(hand: ICard[], handName: string) {
    const handDescription = printer.getHandDescription(hand);
    console.log(`---------------${handName}---------------`);
    console.log(handDescription);
    console.log("-----------------------------------------");
  }

  public printGameState(gameState: IGameState) {
    const gameStateDescription = printer.getGameStateDescription(gameState);
    console.log(`<<< ${gameStateDescription} >>>`);
    console.log("-----------------------------------------");
    console.log("                GAME OVER                ");
    console.log("-----------------------------------------");
  }
}

export const commandLine = new CommandLine();
