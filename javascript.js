/*
Rock Paper Scissors :
Three buttons, player chooses one
Player's choice becomes ID of the button which was chosen - done
Computer makes a random choice - done
Plays the game with these choices immediately after button click
Increment score of whoever wins
*/

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissor'];

//randomly generate computer's choice
function getComputerChoice() {
    let x = Math.floor(((Math.random()) * 3));
    return choices[x];
}

//function to play a round of rps
function playRound(player, computer) {
    let result;
    switch(player) {
        case computer:
            result = 'draw'
            break;
        case 'rock':
            if (computer === "scissor") {
                result = "win";
                ++playerScore;
                break;
            } else {
                result = "lose";
                ++computerScore;
                break;
            }
        case 'paper':
            if (computer === "rock") {
                result = "win";
                ++playerScore;
                break;
            } else {
                result = "lose";
                ++computerScore;
                break;
            }
        case 'scissor':
            if (computer === "paper") {
                result = "win";
                ++playerScore;
                break;
            } else {
                result = "lose";
                ++computerScore;
                break;
            }
        default:
            break;
    }
    return result;
}

//create nodelist of all buttons
const buttons = document.querySelectorAll('button');
const displayResult = document.querySelector('.result');

//for each button in nodelist, on click, play a round of rps
buttons.forEach(button => button.addEventListener('click', () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();
    while (true) {
        if (playerScore === 5) {
            displayResult.textContent = 'You won! Computer Score = ' + computerScore;
            playerScore = 0;
            computerScore = 0;
            break;
        } else if (computerScore === 5) {
            displayResult.textContent = 'You lost! Your score = ' + playerScore;
            playerScore = 0;
            computerScore = 0;
            break;
        } else {
            let roundResult = playRound(playerChoice, computerChoice);
            displayResult.textContent = "You " + roundResult + "! "
            break;
        }
    }
}));

