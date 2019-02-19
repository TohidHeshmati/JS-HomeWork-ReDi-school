console.log("hllloooooo");

function addButtonClicked() {
    console.log("addButtonClicked");
    let button = document.getElementById("addButton");

    let num = Math.random()*1000000;
    let num2 = Math.floor(num);
    button.style.backgroundColor = num2.toString(16);
    document.body.style.backgroundColor = (100000-num2).toString(16);

    let inputElement = document.getElementById("shopInput");
    console.log(inputElement.value);

}