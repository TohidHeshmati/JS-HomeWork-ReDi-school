let totalScore = 0;
let correctAnswer = "";
let allAnswersArray = [];

async function nextQuestion() {

    let url = "https://opentdb.com/api.php?amount=1&category=11&type=multiple";
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);

    let questionElement = document.getElementById("questionSpan");
    questionElement.innerHTML = result.results[0].question;

    correctAnswer = result.results[0].correct_answer;
    console.log("correct Answer: " + correctAnswer);
    let incorrectAnswers = result.results[0].incorrect_answers;
    console.log("incorrect Answers: " + incorrectAnswers);

    allAnswersArray = mixAnswers(correctAnswer,incorrectAnswers);
    putOptionsInSelect(allAnswersArray);

}
function checkAnswer() {
    let selectElement = document.getElementById("selectMenu");
        if (correctAnswer === allAnswersArray[selectElement.selectedIndex]){
            totalScore++;
            console.log("total score: " + totalScore );
        } else {
            totalScore--;
            console.log("total score: " + totalScore);
        }
        let totalScoreElement = document.getElementById("totalScoreSpan");
        totalScoreElement.innerText = "total score: " + totalScore;
}

function putOptionsInSelect(allAnswersArray) {
    let selectElement = document.getElementById("selectMenu");
    selectElement.innerText = "";
    for (let i=0; i<4; i++){
        let tempOption = document.createElement("option");
        tempOption.id = i;
        console.log(tempOption.id);
        tempOption.textContent = allAnswersArray[i];
        selectElement.appendChild(tempOption);
    }
}
function mixAnswers(correctAnswer, incorrectAnswers) {
    let correctPosition = Math.ceil(Math.random()*4);
    let allAnswers = [];
    let k=0;
    for (let i=1; i<=4; i++){
        if (i === correctPosition){
            allAnswers.push(correctAnswer)
        }else {
            allAnswers.push(incorrectAnswers[k]);
            k++;
        }
    }
    console.log(allAnswers);
    return allAnswers;
}
