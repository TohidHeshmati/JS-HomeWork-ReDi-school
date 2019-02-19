function Get(yourUrl){ //completely copy from StackOverflow
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}



function randomJoke() {/**  Not Successful
    let jokeElement = Get("http://api.icndb.com/jokes/random");
    let divElement = document.getElementById("divOfAnswer");
    let jokeId = (jokeElement.value).id;
    console.log(jokeText);
    divElement.textContent = jokeId;**/

        /**  Not Successful
    let jokeText = Get("http://api.icndb.com/jokes/random");
    console.log(jokeText);      **/
}


let spanElement = document.getElementById("spanOfAnswer");
//spanElement.textContent = randomJoke().value;

function fetchUrl() {
    let url = "http://api.icndb.com/jokes/random";
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log(out.value);
            let spanElement = document.getElementById("spanOfAnswer");
            spanElement.textContent = out.value.value;
            return out;
        })
        .catch(err => { throw err });
}


/**
function createNew(){
    let jokeJSONElement = fetchUrl();
    let jokeText = jokeJSONElement.value;
    console.log("joke: "+ jokeText);
}
let element = fetchUrl();

function cons(){console.log(element);}
cons();
spanElement.textContent = console.log(element);
 **/