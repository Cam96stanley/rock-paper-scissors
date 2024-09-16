const userChoiceEl = document.querySelector(".user-choice");
const computerChoiceEl = document.querySelector(".computer-choice");
const resultEl = document.querySelector(".result");
const userScoreEl = document.querySelector(".user-score");
const computerScoreEl = document.querySelector(".computer-score");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let userScore = 0;
let computerScore = 0;

const rock = rockBtn.addEventListener("click", function () {
  userChoiceEl.textContent = "Rock";
  const humanChoice = "Rock";
  playRound(humanChoice, getComputerChoice());
});

const paper = paperBtn.addEventListener("click", function () {
  userChoiceEl.textContent = "Paper";
  const humanChoice = "Paper";
  playRound(humanChoice, getComputerChoice());
});

const scissors = scissorsBtn.addEventListener("click", function () {
  userChoiceEl.textContent = "Scissors";
  const humanChoice = "Scissors";
  playRound(humanChoice, getComputerChoice());
});

const getComputerChoice = function () {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "Rock";
    computerChoiceEl.textContent = computerChoice;
  } else if (computerChoice === 2) {
    computerChoice = "Paper";
    computerChoiceEl.textContent = computerChoice;
  } else if (computerChoice === 3) {
    computerChoice = "Scissors";
    computerChoiceEl.textContent = computerChoice;
  }
  return computerChoice;
};

// // *PLAY GAME*
const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultEl.textContent = "It's a Tie!";
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Scissors") {
      resultEl.textContent = "You win!";
    } else {
      resultEl.textContent = "You loose!";
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      resultEl.textContent = "You win!";
    } else {
      resultEl.textContent = "You loose!";
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Paper") {
      resultEl.textContent = "You win!";
    } else {
      resultEl.textContent = "You loose!";
    }
  }
};
