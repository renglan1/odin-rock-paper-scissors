const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

document.getElementById("rock").addEventListener("click", () => {
  incrementScore(playRound("rock", getComputerChoice()));
});
document.getElementById("paper").addEventListener("click", () => {
  incrementScore(playRound("paper", getComputerChoice()));
});
document.getElementById("scissors").addEventListener("click", () => {
  incrementScore(playRound("scissors", getComputerChoice()));
});

/*function playGame() {
  let playerCount = 0;
  let computerCount = 0;

  while (playerCount < 3 && computerCount < 3) {
    let playerChoice = prompt(
      "Please choose rock, paper, or scissors: "
    ).toLowerCase();

    let result = playRound(playerChoice, getComputerChoice());
    console.log(result);
    if (result === 1) {
      playerCount++;
    } else if (result === 0) {
      computerCount++;
    }
    console.log(playerCount, computerCount);
  }
}*/

function incrementScore(result) {
  const resultDiv = document.getElementById('result');
  const playerScoreSpan = document.getElementById('player-score');
  const computerScoreSpan = document.getElementById('computer-score');

  if(result === 1) {
    const playerScore = parseInt(playerScoreSpan.textContent) + 1;
    playerScoreSpan.textContent = playerScore;

    if(playerScore > 4) {
      resultDiv.textContent = 'Player wins!';
    }
  }
  else if(result === 0) {
    const computerScore = parseInt(computerScoreSpan.textContent) + 1;
    computerScoreSpan.textContent = computerScore;

    if(computerScore > 4) {
      resultDiv.textContent = 'Computer wins!';
    }
  }
}

function playRound(playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');

  if (playerChoice === computerChoice) {
    resultDiv.textContent = 'Tie!';
    return -1;
  }

  const result = resolve(playerChoice, computerChoice);
  resultDiv.textContent = outputResult(result, playerChoice, computerChoice);

  return result;
}

function resolve(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    return computerChoice === "scissors" ? 1 : 0;
  }

  if (playerChoice === "paper") {
    return computerChoice === "rock" ? 1 : 0;
  }

  if (playerChoice === "scissors") {
    return computerChoice === "paper" ? 1 : 0;
  }
}

function outputResult(result, playerChoice, computerChoice) {
  if (result === 1) {
    return `You win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
  }

  return `You lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
}
