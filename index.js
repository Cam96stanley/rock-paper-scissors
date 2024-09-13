// *GET COMPUTER CHOICE*

// This function creates a random number between 1-3 and returns a "rock", "paper", or "scissors" string depending on the random number.

const getComputerChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 3) {
    return "scissors";
  }
};

console.log(getComputerChoice());

// *GET HUMAN CHOICE*

// This function prompts the user to input a value of rock, paper, or scissors and logs that input to the console. If the user inputs a value other than rock, paper, or scissors, the prompt will ask the user to input a valid value.

let getHumanChoice = function () {
  let userChoice = window.prompt("Enter rock, paper or scissors");
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    return window.prompt("Error, please choose either rock, paper or scissors");
  }
};

let userInput = getHumanChoice();
console.log(userInput);
