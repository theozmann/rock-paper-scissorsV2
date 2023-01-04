function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if (ranNum === 1) {
        choice = 'rock';
    }
    else if (ranNum === 2) {
        choice = 'paper';
    }
    else if (ranNum === 3) {
        choice = 'scissors';
    }
    return choice;
}

function playerChoice() {
    let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log(`Sorry! ${computerSelection} beats ${playerSelection}, you lost!`);
        }
    else if (playerSelection === computerSelection) {
        console.log(`You both chose ${playerSelection}! It's a tie!`);
    }
    else {
        console.log(`Congrats! ${playerSelection} beats ${computerSelection}! You won!`);
    }
}

console.log(playRound(playerChoice(), getComputerChoice()));