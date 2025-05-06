let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const results = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * results.length);

  return results[randomNumber];
}

const getHumanChoice = () => {
  const choice = prompt("Please enter your choice (r, p ,s)").toLowerCase();

  if (choice === 'r') return 'rock';
  if (choice === 'p') return 'paper';
  if (choice === 's') return 'scissors';
}

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice}! The human wins!`);
  }
  else {
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice}! The computer wins!`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
