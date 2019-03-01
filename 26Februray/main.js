let userTotalScore = 0;
let computerTotalScore = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSOR = 0;

function play(userChoice) {
    // 1 = rock  2 = paper  0 = scissor
    let computerChoice = Math.floor((Math.random())*3);

    if (userChoice === ROCK) {
        if ( computerChoice === PAPER) {
            console.log(" computer wins ");
            computerTotalScore++;
        }else if (computerChoice === SCISSOR){
            console.log("user wins");
            userTotalScore++;
        }
    }
    if (userChoice === PAPER) {
        if ( computerChoice === SCISSOR) {
            console.log(" computer wins ");
            computerTotalScore++;
        }else if (computerChoice === ROCK){
            console.log("user wins");
            userTotalScore++;
        }
    }
    if (userChoice === SCISSOR) {
        if ( computerChoice === ROCK) {
            console.log(" computer wins ");
            computerTotalScore++;
        }else if (computerChoice === PAPER){
            console.log("user wins");
            userTotalScore++;
        }
    }
    if (userChoice === computerChoice){
        userTotalScore++;
        computerTotalScore++;
    }
    let onScreen = document.getElementById("result");
    console.log("computer score is = " + computerTotalScore + " user score is = "+ userTotalScore);
    onScreen.textContent = "computer score is = " + computerTotalScore + " user score is = "+ userTotalScore;
}
function resetFunc() {
    userTotalScore = 0;
    computerTotalScore = 0;
    let onScreenAfterReset = document.getElementById("result");
    onScreenAfterReset.textContent = " the game begins again"
}