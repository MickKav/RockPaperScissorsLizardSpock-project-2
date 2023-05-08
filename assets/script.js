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
let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    if (lives > 0) {
    let result = playRound('rock', computerPlay());
    document.querySelector('#result-notice-text').textContent = result;
    if (result === 'You win!') {
    document.querySelector('#result-image').innerHTML = '<img src="assets/thumbsup.png">';
    } else if (result === 'You lose!') {
    document.querySelector('#result-image').innerHTML = '<img src="assets/thumbsdown.png">';
    } else {
    document.querySelector('#result-image').innerHTML = '<img src="assets/scissors.png">';
    }
    updateLives();
    if (lives === 0) {
    endGame();
    }
    } else {
    resetGame();
    }
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    if (lives > 0) {
    let result = playRound('paper', computerPlay());
    document.querySelector('#result-notice-text').textContent = result;
    if (result === 'You win!') {
    document.querySelector('#result-image').innerHTML = '<img src="assets/thumbsup.png">';
    } else if (result === 'You lose!') {
    document.querySelector('#result-image').innerHTML = '<img src="assets/thumbsdown.png">';
    } else {
    document.querySelector('#result-image').innerHTML = '<img src="assets/rock.png">';
    }
    updateLives();
    if (lives === 0) {
    endGame();
    }
    } else {
    resetGame();
    }
});


let scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    if (lives > 0) {
    let result = playRound('scissors', computerPlay());
    document.querySelector('#result-notice-text').textContent = result;
    if (result === 'You win!') {
    document.querySelector('#result-image').innerHTML = '<img src="/assets/thumbsup.png">';
    } else if (result === 'You lose!') {
    document.querySelector('#result-image').innerHTML = '<img src="/assets/rock.png">';
    } else {
    document.querySelector('#result-image').innerHTML = '<img src="/assets/paper.png">';
    }
    updateLives();
    if (lives === 0) {
    endGame();
    }
    } else {
    resetGame();
    }
});

// add event listener to the reset button
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);