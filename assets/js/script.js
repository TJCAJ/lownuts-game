// Wait for the DOM to finish loading before running the game

/**
 * Set up constants for DOM elements and add core structure
 * for choices and img visualizations
 */

const choices = ["nut", "joker", "aces"];
const button = document.getElementsById("button");
const playerImageChoice = document.getElementsByName("playerImageChoice");
const computerImageChoice = document.getElementsByName("computerImageChoice");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("ccomputerScoreDisplay");
const messageWinner = document.getElementsByClassName("messageWinner");
let playerScore = 0;
let computerScore = 0;


/* Add event listeners to buttons */



// game-choice buttons
//show_nut_button
function playGame(playerImageChoice) {

    const computerImageChoice = choices[Math.floor(Math.random() * 3)]

    console.log(computerImageChoice)
    let result = "";

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

}






// game and score
//player_score
//computer_score
function incrementScore() {

}





// visualizations
//joker_card
function displayImageChoice() {

}





// message winner
//message_winner

function displayWinner() {

}