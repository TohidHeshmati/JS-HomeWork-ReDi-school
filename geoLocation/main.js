function injectLocation() {
    navigator.geolocation.getCurrentPosition(handlerCurrentlocation);
}
let lat;
let long;
let url;
function handlerCurrentlocation(location){
    lat = location.coords.latitude;
    long = location.coords.longitude;
    console.log(location);
    console.log("lat is: " + lat + " and the long is: "+ long);

    let latSpanElement = document.getElementById("latSpan");
    latSpanElement.innerHTML = lat;
    let longSpanElement = document.getElementById("longSpan");
    longSpanElement.innerHTML = long;
    url = "http://api.timezonedb.com/v2.1/get-time-zone?by=position&key=8AJ12SKT3BSQ&format=json&lng="+long+"&lat="+lat;
}

async function timeZone() {
    let response = await fetch(url);
    let result = await response.json();
    console.log("result: "+result);
    console.log("result.formatted: "+result.formatted);
    document.getElementById("timeSpan").innerHTML= result.formatted;

    document.getElementById("friendTime").innerHTML =  moment().tz("America/New_York").format();
    console.log(moment().tz("America/New_York").format());
    console.log(moment.tz.names());
    for (let i=0; i < moment.tz.names().length; i++){
        console.log(moment.tz.names()[i]);
    }
}