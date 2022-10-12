/*
Play a round of rock paper scissor:
    Take in player's choice and computer's choice
    If player and computer same choice:
        Draw
    Else:
        If P R:
            If C S:
                You win
            Else
                You lose
        If P S:
            If C R:
        ...

*/
// Get player's choice
let getPlayerChoice = prompt("Enter your choice : ").toLowerCase()
console.log(getPlayerChoice);

//Get computer's random choice using a function
function getComputerChoice() {
    let x = Math.floor(3 * Math.random());
    let choice = ["rock", "paper", "scissor"];
    console.log(choice[x]);
    return choice[x];
}

/*
Function to play a single round, getting both player and computer
inputs and returning the result.
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "scissor") {
                return "You win, Rock beats Scissors";
            } else {
                return "You lose, Paper beats Rock";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "You win, Paper beats Rock";
            } else {
                return "You lose, Scissor beats Paper";
            }
        } else if (playerSelection === "scissor") {
            if (computerSelection === "paper") {
                return "You win, Scissor beats Paper"
            } else {
                return "You lose, Rock beats Scissor";
            }
        } else {
            return "Invalid choice";
        }
    }
}

console.log(playRound(getPlayerChoice, getComputerChoice()));