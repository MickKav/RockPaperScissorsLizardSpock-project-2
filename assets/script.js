//getComputerChoice randomly selects between ``rock``, ``paper`` and ``scissors`` and returns that string
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return rpsChoice[randomNumber]
}

//getResult compares plarerChoice with compterChoice and returns reslut accordingly
function getResult(playerChoice, computerChoice) {
    let score;
    //Human Draw situation
    if (playerChoice == computerChoice) {
        score = 0;
    //Human Win situation
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        score = 1;
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        score = 1;
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        score = 1;
    
    //Human Loss situation
    } else {
        score = -1
    }
    return score
}