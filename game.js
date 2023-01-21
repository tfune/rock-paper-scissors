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

console.log(playerSelection);
