let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// create a function to generate the target number 0 to 9
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, target){
    if (checkGuess(human)) {
        const humanDiff = getAbsoluteDistance(target, human);
        const computerDiff = getAbsoluteDistance(target, computer);
        return humanDiff <= computerDiff;
    }
}

function updateScore(winner){
    if (winner === 'human'){
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}

function getAbsoluteDistance(num1, num2){
    return Math.abs(num1 - num2);
}

function checkGuess(num){
if(num<0 || num>9){
    alert("Please enter a number between 0 and 9.");
    return false;
}
return true;
}