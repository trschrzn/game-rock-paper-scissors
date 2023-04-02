const playerPointsSpan = document.querySelector(".playerPoints");
const compPointsSpan = document.querySelector(".compPoints");
const optionsButton = document.querySelectorAll(".options button");
const playerChoiceSpan = document.querySelector(".playerChoice");
const compChoiceSpan = document.querySelector(".compChoice");
const resultText = document.querySelector(".resultText");
const resetGame = document.querySelector(".resetGame");
const choiceSection = document.querySelector(".choices")

let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame (){
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = "Chose your weapon!";
    resetGame.classList.remove("active");
}

window.onload = setGame();

function playerSelect(event) {
    optionsButton.forEach(button => button.classList.remove("active"));
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");
    resetGame.classList.add("active");

    compSelect();
}

const compChoices = ["rock", "paper", "scissors"];

function compSelect(){
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    
    compChoice = compChoices[randomIndex];
    
    checkResult();
}

function checkResult () {
    let winner = "";

    if(playerChoice === "rock" && compChoice === "scissors" || playerChoice === "paper" && compChoice === "rock" || playerChoice === "scissors" && compChoice === "paper"){
        winner = "You won!";
        playerPoints++;
        playerPointsSpan.innerHTML = playerPoints;
    }
    else if(playerChoice === compChoice){
        winner = "REMIS!";
    }
    else{
        winner = "You lose!";
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    }
    choiceSection.classList.add("active");
    playerChoiceSpan.innerHTML = playerChoice;
    compChoiceSpan.innerHTML = compChoice;
    resultText.innerHTML = winner;
}

optionsButton.forEach(button => button.addEventListener("click", playerSelect))

function resetGames () {
    choiceSection.classList.remove("active");
    optionsButton.forEach((button) => button.classList.remove("active"));
    compPoints = 0;
    playerPoints = 0;
    setGame();
}
resetGame.addEventListener("click", resetGames);