// *GET COMPUTER CHOICE*

// This function creates a random number between 1-3 and returns a "rock", "paper", or "scissors" string depending on the random number.

const getComputerChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    console.log("rock");
  } else if (randomNum === 2) {
    console.log("paper");
  } else if (randomNum === 3) {
    console.log("scissors");
  }
};

// *GET HUMAN CHOICE*

// This function prompts the user to input a value of rock, paper, or scissors and logs that input to the console. If the user inputs a value other than rock, paper, or scissors, the prompt will ask the user to input a valid value.

let getHumanChoice = function () {
  let userChoice = window.prompt("Enter rock, paper or scissors");
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    console.log(userChoice);
  } else {
    return window.prompt("Error, please choose either rock, paper or scissors");
  }
};

// *DECLARE PLAYERS SCORE VARIABLES*

let humanScore = 0;
let computerScore = 0;
console.log(humanScore);
console.log(computerScore);

// *LOGIC FOR PLAYING A SINGLE ROUND*

// This is the function to determine the winner of a single round rock paper scissors based off the user input. Currently, the score increment is not functioning as intended. Need score from above to increment up by one dependng on the winner.

const playRound = function (humanChoice, computerChoice) {
  //   let humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("This round was a tie!");
  }
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else {
      console.log("You loose! Paper beats Rock");
      computerScore++;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else {
      console.log("You loose! Scissors beats Paper");
      computerScore++;
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else {
      console.log("You loose! Rock beats Scissors");
      computerScore++;
    }
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
