let repositoryArray = [];

function addNewMusic() {
    let inputElement = document.getElementById("inputBox");
    repositoryArray.push(inputElement.value);
    let divElement = document.getElementById("divSection");
    divElement.innerHTML = "";

    for (item of repositoryArray.sort()) {
        divElement.textContent += item ;
        divElement.appendChild(document.createElement("br"));
        divElement.textContent += " \n" ;
    }
}