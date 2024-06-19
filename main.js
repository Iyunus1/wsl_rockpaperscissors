// Generate a random value which will return one of "rock", "paper" or scissors - generate 3 different random value
// Get user input and return one of rock, paper or scissors
// Keep a score of player wins and human wins
// create a round that takes human choice and computer choice functions and plays a round
// store the winner in global score
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
};

const getHumanChoice = () => {
  const userInput = prompt("Pick your choice").toLowerCase();
  return userInput;
};

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    return "It's a draw";
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    return "Human Wins !";
  } else if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore += 1;
    return "Computer Wins";
  }
}

function helper() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  return playRound(humanSelection, computerSelection);
}

// To call the round function 5 times
function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(helper());
  }
  console.log(`${humanScore} ... ${computerScore}`);
}

playGame();
