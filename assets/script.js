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
    let livesDisplay = '';
    for (let i = 0; i < lives; i++) {
    livesDisplay += '<span class="heart">♥</span>';
    }
    document.querySelector('#lives').innerHTML = livesDisplay;
    }

    // function to reset the game
function resetGame() {
    lives = 3;
    userScore = 0;
    computerScore = 0;

    updateLives();
    document.querySelector('#result-notice-text').textContent = 'Choose your weapon!';
    document.querySelector('#result-image').innerHTML = '';
    document.querySelector('#win-lose-text').textContent = '';
    document.querySelector('#result').classList.remove('hidden');
    }

    // function to end the game
function endGame() {
    document.querySelector('#result-notice-text').textContent = 'Game over!';
    document.querySelector('#result-image').innerHTML = '';

    if (userScore > computerScore) {
        document.querySelector('#win-lose-text').textContent = 'You win!';
        } else {
        document.querySelector('#win-lose-text').textContent = 'You lose!';
        }
        document.querySelector('#result').classList.remove('hidden');
    }

// add event listeners to the buttons
