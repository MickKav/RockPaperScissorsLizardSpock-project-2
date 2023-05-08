// set initial values
let lives = 3;
let userScore = 0;
let computerScore = 0;

// function to generate a random choice for the computer
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to play one round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) 
    {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

// function to update the lives display
function updateLives() {
    
    }

    // function to reset the game
function resetGame() {
    
    }

    // function to end the game
function endGame() {
    
    }
// add event listeners to the buttons