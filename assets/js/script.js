// Wait for the DOM to finish loading before running the game

/**
 * Constants for DOM elements andcore structure
 * for choices and img visualizations
 */

const choices = ["nut", "joker", "aces"];
const button = document.getElementsByClassName("btn-controll");
const playerChoice = document.getElementsByClassName("player-choice");
const computerChoice = document.getElementsByName("computer-choice");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("ccomputerScoreDisplay");
const displayWinner = document.getElementsByClassName("displa-winner");
let playerScore = 0;
let computerScore = 0;


/* Add event listeners to buttons */
function playGame() {}
let computerImageChoice = [Math.floor(Math.random() * 3)];

if (playerImageChoice === computerImageChoice) {
    result = "IT'S A DRAW!";
} else {
    switch (playerImageChoice) {
        case "nut":
            result = (computerImageChoice === "joker") ? "PLAYER WIN" : "COMPUTER WIN";
            break;
        case "joker":
            result = (computerImageChoice === "aces") ? "PLAYER WIN" : "COMPUTER WIN";
            break;
        case "aces":
            result = (computerImageChoice === "nut") ? "PLAYER WIN" : "COMPUTER WIN";
            break;
    }
}





// game and score
//player_score
//computer_score
function incrementScore() {


}





// visualizations
//joker_card
function displayImageChoice() {
    let picture = getElementsByName("nut", "joker", "aces");
}





// message winner
//message_winner

function displayWinner() {

}