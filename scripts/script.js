const options = ['rock', 'paper','scissors'];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

