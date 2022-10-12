//Create player's choice variable to be filled later
let getPlayerChoice;

//Get computer's random choice using a function
function getComputerChoice() {
    let x = Math.floor(3 * Math.random());
    let choice = ["rock", "paper", "scissor"];
    return choice[x];
}

/*
Function to play a single round, getting both player and computer
inputs and returning the result.
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
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
                return "You win, Scissor beats Paper";
            } else {
                return "You lose, Rock beats Scissor";
            }
        } else {
            return "Invalid choice";
        }
    }
}

/* Function to call playRound 5 times and keep score, reporting who won
in the end.

Since the return statements are structured in a particular way, we can check
if the player won by checking whether the return statement contains the word "win"
*/

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let getPlayerChoice = prompt("Enter your choice : ").toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(getPlayerChoice);
        console.log(computerChoice);
        if (playRound(getPlayerChoice, computerChoice).includes("Invalid")) {
            alert("Invalid choice");
        } else if (playRound(getPlayerChoice, computerChoice).includes("draw")) {
            ++playerScore;
            ++computerScore;
        } else if (playRound(getPlayerChoice, computerChoice).includes("win")) {
            ++playerScore;
        } else if (playRound(getPlayerChoice, computerChoice).includes("lose")) {
            ++computerScore;
        }
        console.log(playerScore);
        console.log(computerScore);
    }
    if (playerScore > computerScore) {
        alert("You won!");
    } else if (playerScore === computerScore) {
        alert("It's a draw");
    } else {
        alert ("You lost!");
    }
}
// What in the fuck is this code 

playGame();
