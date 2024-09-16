const 




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

let getHumanChoice = function () {
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    console.log(userChoice);
    return userChoice;
  }
};

// *PLAY GAME*

let humanScore = 0;
let computerScore = 0;

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

// *UI*

// document.querySelector(".rock").addEventListener("click", function () {
//   console.log(playRound("rock"));
// });
