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

let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector('#result');
const humanScoreDiv = document.querySelector('#human-score');
const computerScoreDiv = document.querySelector('#computer-score');

const updateScore = () => {
  humanScoreDiv.textContent = `Human: ${humanScore}`;
  computerScoreDiv.textContent = `Computer: ${computerScore}`;

  if (humanScore >= 5) {
    resultDiv.textContent = resultDiv.textContent + " The human wins the game!";
  } else if (computerScore >= 5) {
    resultDiv.textContent = resultDiv.textContent + " The computer wins the game!";
  }
}

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
    return;
  }

  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    resultDiv.textContent = `${humanChoice} beats ${computerChoice}! The human wins!`;
    updateScore();
  }
  else {
    computerScore++;
    resultDiv.textContent = `${computerChoice} beats ${humanChoice}! The computer wins!`;
    updateScore();
  }
}

// const playGame = () => {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   console.log(`The final score is:\nComputer: ${computerScore}\nHuman:${humanScore}`);
// }

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playRound(btn.id, getComputerChoice());
  });
});

