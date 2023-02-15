let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener('click', playGame);
});

function playGame (e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    displayResults();
    displayScore();
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
    if (playerScore >= 5 || computerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (playerSelection === computerSelection) {
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

const roundResults = document.querySelector('.roundResults');

function displayResults () {
    roundResults.textContent = playRound(playerSelection, computerSelection);
};

const score = document.querySelector('.score');

function displayScore () {
    if (playerScore < 5 && computerScore < 5) {
        score.textContent = 'The score is currently ' + playerScore + ' - ' + computerScore;
    } else if (playerScore >= 5 && computerScore >= 5) {
        return;
    } else if (playerScore == 5) {
        score.textContent = 'Victory! Final Score: ' + playerScore + ' - ' + computerScore;
    } else if (computerScore == 5) {
        score.textContent = 'Defeat! Final Score: ' + playerScore + ' - ' + computerScore;
    }
}