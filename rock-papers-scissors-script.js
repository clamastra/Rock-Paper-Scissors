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

function playRound(playerSelection, computerSelection) {

    if (((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) || ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) || ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock"))){
        return "You win! " + playerSelection.toLowerCase() + " beats " + computerSelection;
    } else if (playerSelection.toLowerCase() === computerSelection){
        return "Tie! You both chose " + playerSelection.toLowerCase();
    } else {
        return "You lose! " + playerSelection.toLowerCase() + " is beat by " + computerSelection;
    }
}

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
