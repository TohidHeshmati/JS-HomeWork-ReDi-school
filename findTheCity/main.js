let numberOfGuesses = 0;
let totalGuessShowElement = document.getElementById("totalGuessShow");
let hintSpanElement = document.getElementById("hintSpan");
let destinationLatitude = 51.46;
let destinationLongitude = 7.01;
//we can create a group of cities and choose one of them by random.
//but lets assume that we have an extra ticket to Essen that we want to get rid of :D

async function sendNewGuess() {
    numberOfGuesses++;
    totalGuessShowElement.textContent = "you have tried " + numberOfGuesses + " times till now";
    let newIncommingGuessAsText = document.getElementById("guessFieldText").value;
    console.log(newIncommingGuessAsText);
    let guessedCityURL = "https://openweathermap.org/data/2.5/weather?q="+newIncommingGuessAsText+"&appid=b6907d289e10d714a6e88b30761fae22";

    //here we should handle 2 problems
    //first if there are more than one city with same name
    //second entering wrong name //if it was java I would suggest easily handle the exception
    let response = await fetch(guessedCityURL);
    let result = await response.json();

    let guessedLatitude = result.coord.lat;
    let guessedLongitude = result.coord.lon;
    console.log("guessed Latitude: "+guessedLatitude);
    console.log("guessed Longitude: "+guessedLongitude);

    //hint generation Area
    let smallLatHint = "";
    let smallLongHint = "";
    let gettingCloseMessage = "";

    if (guessedLatitude>destinationLatitude){
        smallLatHint = "southern";
        console.log("guessedLatitude>destinationLatitude");
    }else {
        smallLatHint = "northern";
        console.log("guessedLatitude<destinationLatitude");
    }
    if (guessedLongitude>destinationLongitude){
        smallLongHint = "western";
        console.log("guessedLongitude>destinationLongitude");
    }else {
        smallLongHint = "eastern";
        console.log("guessedLongitude<destinationLongitude");
    }

    if (Math.abs(guessedLatitude-destinationLatitude) <3 && Math.abs(guessedLongitude-destinationLongitude)<3){
        gettingCloseMessage = " but you are close";
        if (Math.abs(guessedLatitude-destinationLatitude) <0.5 && Math.abs(guessedLongitude-destinationLongitude)<0.5){
            gettingCloseMessage += ", so close that I can smell you. :D";
        }
    }
    let hint = "the City I have in mind is located "+ smallLatHint + " of your guess, and also more "+smallLongHint+ " than your guess"+gettingCloseMessage;
    if (guessedLongitude===destinationLongitude && guessedLatitude===destinationLatitude){
        hint = "Ho ho ho, look what just happened. we have a winner." +
            " Pack your bags cuz we are going to Essen."
    }
    hintSpanElement.textContent = hint;
    console.log(hint);

}

//Information Part
    let informationDivElement = document.getElementById("InformationDiv");
    let buttonsDivElement = document.getElementById("buttonsDiv");
    let isAlreadyAMoreButton = false;
    let moreInformationCounter = 0;

function sideInformation() {
    let annotation = "A geographic coordinate system is a coordinate system that enables every location on Earth to be specified by a set of numbers, letters or symbols."
    //more Information button creation and properties
    if (!isAlreadyAMoreButton){
    let moreInformationButton = document.createElement("button");
    moreInformationButton.textContent = "more Information";
    moreInformationButton.onclick = moreInformationFunction;
    buttonsDivElement.appendChild(moreInformationButton);
    isAlreadyAMoreButton = true;
    }

    informationDivElement.textContent = annotation;
    //informationDivElement.appendChild(document.createElement("button"));

    function moreInformationFunction() {
        moreInformationCounter++;
        switch (moreInformationCounter) {
            case 1:
                informationDivElement.textContent += " in simple words you should look for geographical properties";
                break;
            case 2:
                informationDivElement.textContent += " Longitude is a geographic coordinate that specifies the east–west position of a point on the Earth's surface";
                break;
            case 3:
                informationDivElement.textContent += " in simple words you should look for geographical properties";
                break;
            case 4:
                informationDivElement.textContent += " In geography, latitude is a geographic coordinate that specifies the north–south position of a point on the Earth's surface";
                break;
            case 5:
                informationDivElement.textContent += " unfortunately I don't have that much Information";
                break;
            case 6:
                informationDivElement.textContent += " It's an good Idea to look into wikipedia";
                break;
            case 7:
                informationDivElement.textContent += " are you playing with that button???";
                break;
            case 8:
                informationDivElement.textContent += " seriously?? ";
                break;
            case 9:
                informationDivElement.textContent += "I'm not gonna answer anymore";
        }
        if (moreInformationCounter>20){
            informationDivElement.textContent = "get out, you don't deserve this game"
        }
    }
}

