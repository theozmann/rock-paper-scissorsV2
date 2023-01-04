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

console.log(getComputerChoice());