const options = ["rock", "paper", "scissors"];

playGame();

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playGame() {
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
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Tie!");
    return -1;
  }

  const result = resolve(playerChoice, computerChoice);
  console.log(outputResult(result, playerChoice, computerChoice));

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
