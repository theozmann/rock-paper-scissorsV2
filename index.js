function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    if (ranNum === 1) {
        return 'rock';
    }
    else if (ranNum === 2) {
        return 'paper';
    }
    else if (ranNum === 3) {
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return result = `Sorry! ${computerSelection} beats ${playerSelection}, you lost!`;
    }
    else if (playerSelection === computerSelection) {
        return result = `You both chose ${playerSelection}! It's a tie!`;
    }
    else {
        return result = `Congrats! ${playerSelection} beats ${computerSelection}, You won!`;
    }
}

function game() {
    let playerTotal = 0;
    let computerTotal = 0;

    for (let i = 0; i< 5; i++) {
        let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        
        if(roundResult.charAt(0) === 'S') {
            computerTotal += 1;
            console.log(roundResult);
        }
        else if(roundResult.charAt(0) === 'C') {
            playerTotal += 1;
            console.log(roundResult);
        }
        else {
            console.log(roundResult);
        }
    }

    if (playerTotal > computerTotal) {
        console.log('you won the game!');
    }
    else {
        console.log('you lost, fuckin loser');
    }
}

game();

