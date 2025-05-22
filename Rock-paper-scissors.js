let computerMove;
function compmove(){let random = Math.random();
if (random > 0 && random < 1/3) {
    computerMove = "rock"
}else if (random > 1/3 && random < 2/3){
    computerMove = "paper"
}else{
    computerMove = "scissors"
}}

let playerMove;
document.querySelector(".rock-button").addEventListener("click", function(){
    playerMove = "rock";
    compmove();
    game();
})
document.querySelector(".paper-button").addEventListener("click", function(){
    playerMove = "paper";
    compmove();
    game();
})
document.querySelector(".scissors-button").addEventListener("click", function(){
    playerMove = "scissors";
    compmove();
    game();
})

function win()
{document.querySelector('.celebration-gif').style.display = "block";}

function loss()
{document.querySelector('.loss-gif').style.display = "block";}

function tie(){
    document.querySelector('.tie-gif').style.display = "block";
}

function noWin(){
    document.querySelector('.celebration-gif').style.display = "none"
}

function noLoss(){
    document.querySelector('.loss-gif').style.display = "none"
}

function noTie(){
    document.querySelector('.tie-gif').style.display = "none"
}


let result;
function game() {if (playerMove === computerMove){
    result = "Tie";
    tie();
    noWin();
    noLoss();
}else if(playerMove === "rock" && computerMove === "scissors" || playerMove === "paper" && computerMove === "rock" || playerMove === "scissors" && computerMove === "paper"){
    result = "You Win";
    win();
    noLoss();
    noTie();
}else{
    result = "You Lose";
    loss();
    noWin();
    noTie();
}

scoresFunction();

let outcome = `You choose ${playerMove} and the Computer choose ${computerMove}.\n ${result}`;
document.querySelector('.game-result').innerText = outcome;
}

let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let reset;

 function scoresFunction()
 {
if (result === "Tie"){
    tieCount++;
}else if(result === "You Win"){
    winCount++;
}else {
    lossCount++;
}

let scores = `Wins: ${winCount}   Losses: ${lossCount}   Ties: ${tieCount}`;
document.querySelector('.scoring-system').innerText = scores;

document.querySelector('.reset-game').addEventListener("click", function(){
    winCount = 0;
    lossCount = 0;
    tieCount = 0;

    reset = `Wins: ${winCount}   Losses: ${lossCount}   Ties: ${tieCount}`;
    document.querySelector('.scoring-system').innerText = reset;
})
}


