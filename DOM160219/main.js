let textAreaElement = document.getElementsByName("textArea");
textAreaElement.style.backgroundColor = "blue";

let bodyElement = document.body;

let inputElementByJS = document.createElement("input");
inputElementByJS.value = "inputElementByJS";
bodyElement.appendChild(inputElementByJS);

let inputElementsPackage = document.getElementsByTagName("input");

for(let i = 0; i<inputElementsPackage.length ; i++){
    //inputElementsPackage[i].value = "input element "+ (i+1);
    inputElementsPackage[i].style.fontSize = 12+i ;
    inputElementsPackage[i].placeholder = "I am placeholder :) " +i;
}