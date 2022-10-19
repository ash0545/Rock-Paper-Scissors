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

//function to play round of rps
function playRound(player, computer) {
    let result;
    switch(player) {
        case computer:
            result = 'draw'
            break;
        case 'rock':
            if (computer === "scissor") {
                result = "win";
                break;
            } else {
                result = "lose";
                break;
            }
        case 'paper':
            if (computer === "rock") {
                result = "win";
                break;
            } else {
                result = "lose";
                break;
            }
        case 'scissor':
            if (computer === "paper") {
                result = "win";
                break;
            } else {
                result = "lose";
                break;
            }
        default:
            break;
    }
    return result;
}

//create nodelist of all buttons
const buttons = document.querySelectorAll('button');

//for each button in nodelist, on click, play a round of rps
buttons.forEach(button => button.addEventListener('click', () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(playRound(playerChoice, computerChoice));
}));