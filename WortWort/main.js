async function wiki() {
    let wordInputElement = document.getElementById("wordInput");
    let inputText = wordInputElement.value;
    let wikitionaryURL = "https://de.wiktionary.org/w/api.php?action=query&origin=*&list=search&srsearch="+inputText+"&format=json";
    let responceFromWikitionary = await fetch(wikitionaryURL);
    let resultOfWikitionary = await responceFromWikitionary.json();
    console.log(resultOfWikitionary);
    let query = resultOfWikitionary.query;
    console.log(query)
}