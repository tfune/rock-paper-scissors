function getComputerChoice() {
    let computerSelection = Math.floor((Math.random() * 3) + 1);
    if (computerSelection == 1) {
        return 'Rock'
    } else if (computerSelection == 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
    return computerSelection;
}    
let computerSelection = getComputerChoice();


let getPlayerChoice = prompt("Rock, Paper, or Scissors?")
let playerSelection = getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied!"
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You lose! Rock beats Scissors"
    }
}

console.log(playRound(playerSelection, computerSelection));