async function exchange(){
    let firstChoiseElement = document.getElementById("selectFirst");
    let firstChoisObj = firstChoiseElement.options[firstChoiseElement.selectedIndex];

    let secondChoiseElement = document.getElementById("selectsecond");
    let secondChoiseObj = secondChoiseElement.options[secondChoiseElement.selectedIndex];
    console.log("first: " + firstChoisObj.value + "seccond: "+secondChoiseObj.value);

    let inputElement = document.getElementById("inputAmount");
    let inputValue = inputElement.value;

    let url = "https://api.exchangeratesapi.io/latest?base="+firstChoisObj.value;
    console.log("url is " +url);

    let result = await fetch(url);
    let json = await result.json();
    console.log(json);

    let rate = json.rates[secondChoiseObj.value];
    console.log(rate);
    let finalAnswer = rate*inputValue;
    console.log(finalAnswer);

    let divElement = document.getElementById("answerDiv");
    let text = "you will receive "+ Math.floor(finalAnswer)+" "+secondChoiseObj.value+" by giving "+inputValue +" "+ firstChoisObj.value;
    divElement.textContent = text;

}