//Chances of winning diminish exponentially the longer a player continues gambling
let numberRound = 0;
let moneyMade = 0.5;
//const inquirer = require("inquirer");
import inquirer from "inquirer";
const menu = () => {
  return new inquirer.prompt([
    {
      type: "list",
      name: "otherRound",
      message: "Play another round?",
      choices: ["Yes", "No"],
    },
  ]).then((answer) => {
    if (answer.otherRound == "Yes") {
      numberRound += 1;
      play();
    }
    if (answer.otherRound == "No") {
      console.log(`You made ${moneyMade} fictional euros. Congratulations`);
    }
  });
};

const play = () => {
  const randomNumber = Math.random();
  if (randomNumber > 1 / (1 + numberRound)) {
    moneyMade = 0;
    console.log("You lost. LOSER!!");
    return;
  } else {
    moneyMade = moneyMade * 2;
    console.log(`You now have ${moneyMade} fictional euros`);
    menu();
  }
};
console.log("Double or nothing? Who dares wins!");
play();
