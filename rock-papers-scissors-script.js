function getComputerChoice() {
    let num = Math.floor(Math.random()*3)+1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*
function playRound(playerSelection, computerSelection) {
    if (((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) || ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) || ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock"))){
        return "You win! " + playerSelection.toLowerCase() + " beats " + computerSelection;
    } else if (playerSelection.toLowerCase() === computerSelection){
        return "Tie! You both chose " + playerSelection.toLowerCase();
    } else {
        return "You lose! " + playerSelection.toLowerCase() + " is beat by " + computerSelection;
    }
}
*/
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) || ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) || ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock"))){
        P1Score = P1Score + 1;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("header").innerHTML = "You win! " + playerSelection.toLowerCase() + " beats " + computerSelection;
        return "You win! " + playerSelection.toLowerCase() + " beats " + computerSelection;
    } else if (playerSelection.toLowerCase() === computerSelection){
        document.getElementById("header").innerHTML = "Tie! You both chose " + playerSelection.toLowerCase();
        return "Tie! You both chose " + playerSelection.toLowerCase();
    } else {
        P2Score = P2Score + 1;
        document.getElementById("scoreP2").innerHTML = P2Score;
        document.getElementById("header").innerHTML = "You lose! " + playerSelection.toLowerCase() + " is beat by " + computerSelection;
        return "You lose! " + playerSelection.toLowerCase() + " is beat by " + computerSelection;
    }
}
/*
function game() {
    let playerSelection = "";
    for (i=0; i<5; i++) {
        playerSelection = prompt("Type either rock, paper, or scissors. If your choice does not match one of those, you will be assigned a random option.");
        if ((playerSelection.toLowerCase() !== "rock") && (playerSelection.toLowerCase() !== "paper") && (playerSelection.toLowerCase() !== "scissors")) {
            playerSelection = getComputerChoice();
            console.log("Shame on you for not picking! You have randomly been assigned " + playerSelection + ".");
        }
        console.log("Round " + (i+1) + ". Begin!");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}
*/

let P1Score = 0
let P2Score = 0

const rockBTN = document.querySelector("#rock-button")

function rockButton() {
    console.log("You clicked rock button");
    answerString = playRound("rock", getComputerChoice);
    console.log(answerString);

    if (P1Score === 5) {
        P1Score = 0;
        P2Score = 0;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("scoreP2").innerHTML = P2Score;
        document.getElementById("header").innerHTML = "You win! Scores have been reset.";
    } else if (P2Score === 5) {
        P1Score = 0;
        P2Score = 0;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("scoreP2").innerHTML = P2Score;
        document.getElementById("header").innerHTML = "You lose! Scores have been reset.";
    }
}

const paperBTN = document.querySelector("#paper-button")

function paperButton() {
    answerString = playRound("paper", getComputerChoice);
    console.log(answerString);

    if (P1Score === 5) {
        P1Score = 0;
        P2Score = 0;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("scoreP2").innerHTML = P2Score;
    } else if (P2Score === 5) {
        P1Score = 0;
        P2Score = 0;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("scoreP2").innerHTML = P2Score;
    }
}

const scissorsBTN = document.querySelector("#scissors-button")

function scissorsButton() {
    answerString = playRound("scissors", getComputerChoice);
    console.log(answerString);

    if (P1Score === 5) {
        P1Score = 0;
        P2Score = 0;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("scoreP2").innerHTML = P2Score;
    } else if (P2Score === 5) {
        P1Score = 0;
        P2Score = 0;
        document.getElementById("scoreP1").innerHTML = P1Score;
        document.getElementById("scoreP2").innerHTML = P2Score;
    }
}
