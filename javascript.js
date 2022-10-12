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
    return choice[x];
}

console.log(getComputerChoice());