async function fetchWeather() {
    let inputCountryElement = document.getElementById("inputCountry");
    let countryAsText = inputCountryElement.value;
    let CountryToCityurl = "https://restcountries.eu/rest/v2/name/" + countryAsText;

    let allCountries = await fetch(CountryToCityurl);
    let countriesArray = await allCountries.json();

    for (let country of countriesArray){
    let capital = country.capital;
    console.log(capital);
    let seccondURL = "https://openweathermap.org/data/2.5/weather?q="+capital+"&appid=b6907d289e10d714a6e88b30761fae22";
    let resultElement = document.getElementById("resultElement");


    let response = await fetch(seccondURL);
    let result = await response.json();
    console.log(result);
    console.log(result.main);
    console.log("current situation: " + result.weather[0].main);
    resultElement.textContent = "current weather situation in "+ capital + " capital of "+countryAsText+": " + result.weather[0].main;
    //one problem.... sometimes it finds more than one city

    }
}