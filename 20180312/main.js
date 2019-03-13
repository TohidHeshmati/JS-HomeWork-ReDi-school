async function newInput() {
    let appId = "fQbm3OvKtn44q7f7wqu0";
    let appCode = "wBdfzzXp6j6sEYkp-pqP4g";

    let latitude = 52.510730;
    let longitude = 13.372075;

    let inptElement = document.getElementById("input");
    let inputText = inptElement.value;

    let suggestUrl = "https://places.cit.api.here.com/places/v1/autosuggest?at=" + latitude + "%2C" + longitude + "&app_id=" + appId + "&app_code=" + appCode + "&q="+inputText;

    let result = await fetch(suggestUrl);
    let responseAsJSON = await result.json();
    console.log(responseAsJSON);
    console.log(responseAsJSON.results[0]);
    let resultsList = responseAsJSON.results;

    let dataListElement = document.getElementById("suggestions");
    dataListElement.innerHTML = "";

    for (let result of resultsList){
        console.log(result.title);
        let optionElement = document.createElement("option");
        optionElement.value = result.title;
        dataListElement.appendChild(optionElement);
    }

    console.log(resultsList[0].href);

}
