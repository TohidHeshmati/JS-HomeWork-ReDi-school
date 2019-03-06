async function fechFunction(){
    let countryInputElement = document.getElementById("countryInput");
    let url = "https://restcountries.eu/rest/v2/name/" + countryInputElement.value;

    let response = await fetch(url);
    let result = await response.json();
    console.log(result);

for (let item of result) {
    let spanElement = document.getElementById("resultSpan");
    spanElement.innerText += item.currency + "\n";

}

}
let x = 3;
let myAarray= [1,2,3,4,5,6,7,8,9];
for (let i in myAarray){
    if (i == x){
        let sthh = myAarray.getIndexFromName(i);
        sthh++;
    }
}
