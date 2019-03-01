let answerBoxElement = document.getElementById("answerBox");
let cielingNumber = 101;
let floorNumber = 0;
let pivotPoint = Math.floor((Math.random())*cielingNumber);

function guess(){
    answerBoxElement.textContent = "is it "+String(pivotPoint)+ " ?";
}
function higher() {
    floorNumber = pivotPoint;
    let newPivotPoint = Math.floor(Math.random()*(cielingNumber- floorNumber))+floorNumber;
    answerBoxElement.textContent = "is it "+String(newPivotPoint)+ " ?";
    pivotPoint = newPivotPoint;
}
function lower() {
    cielingNumber = pivotPoint;
    let newPivotPoint = Math.floor(Math.random()*(cielingNumber-floorNumber)+floorNumber);
    answerBoxElement.textContent = "is it "+String(newPivotPoint)+ " ?";
    pivotPoint = newPivotPoint;
}
