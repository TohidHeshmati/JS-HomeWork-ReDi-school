let lat = 52.520008;
let long = 13.404954;

var mymap = L.map('mapid').setView([lat, long], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">captain </a>uhahahaha  <a href="https://www.mapbox.com/">ReDi</a>',
    maxZoom: 50,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGFycnlmIiwiYSI6ImNqcDJvemhyZTA4b2gza3J3ZjdtdXE4cTIifQ.HlXCgyVsWG6esxjVjE7oRg'
}).addTo(mymap);



async function setAsCenter() {
    let inputElement = document.getElementById("input");
    let url = "https://restcountries.eu/rest/v2/name/"+inputElement.value;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    lat = result[0].latlng[0];
    long = result[0].latlng[1];
    console.log("lat is: " + lat + " long is: " + long);

    mymap.setView([lat, long], 10);

    L.marker([lat, long]).addTo(mymap)
        .bindPopup('here is your selected Country')
        .openPopup();
}