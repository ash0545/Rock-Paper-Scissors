/*
Rock Paper Scissors :
Three buttons, player chooses one
Player's choice becomes ID of the button which was chosen
Computer makes a random choice
Increment score of whoever wins
*/

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    let x = Math.floor(((Math.random()) * 3));
    return choices[x];
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
}));