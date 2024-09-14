// *GET COMPUTER CHOICE*

// This function creates a random number between 1-3 and returns a "rock", "paper", or "scissors" string depending on the random number.

const getComputerChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    console.log("rock");
    return "rock";
  } else if (randomNum === 2) {
    console.log("paper");
    return "paper";
  } else if (randomNum === 3) {
    console.log("scissors");
    return "scissors";
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
    return userChoice;
  } else {
    return window.prompt("Error, please choose either rock, paper or scissors");
  }
};

// *PLAY GAME*

// This function took the Playround function and placed it inside the playGame function in order to play 5 rounds of the game. After each round the console logs the current score of the user and computer.

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playRound = function (humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("This round was a tie!");
        return;
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
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
};
playGame();
