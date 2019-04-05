async function fetching() {
    let url = "http://127.0.0.1:8080/engine-rest/task";
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
}
fetching();