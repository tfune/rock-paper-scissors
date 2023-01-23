let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(playerSelection) {
    playerSelection = prompt('Rock, Paper, or Scissors?');
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function getComputerChoice(computerSelection) {
    computerSelection = Math.floor((Math.random() * 3) + 1);
    if (computerSelection == 1) {
        return 'Rock'
    } else if (computerSelection == 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}    

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "You tied!"
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        return "You win! Rock beats Scissors"
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        return "You win! Scissors beats Paper"
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScore++;
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScore++;
        return "You lose! Rock beats Scissors"
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("The score is currently " + playerScore + " - " + computerScore)
    }
}

game();