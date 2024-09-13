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
