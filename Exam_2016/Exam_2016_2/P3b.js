function parseResponse() {

    let response = JSON.parse(this.responseText);

    if (response.valid == "true")
        return;

    let formPin = document.getElementById("pin");
    let pin = formPin.querySelector("input[name=\"pin\"");

    pin.style.border = "solid red";

}

function makeRequest() {


    let formPin = document.getElementById("pin");
    let username = formPin.querySelector("input[name=\"username\"");
    let pin = formPin.querySelector("input[name=\"pin\"");

    let req = new XMLHttpRequest();
    req.onload = parseResponse;
    req.open('POST', 'verify pin.php');
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send("username=" + username + "&pin=" + pin);

}

let formPin = document.getElementById("pin");
let submitButton = formPin.querySelector("input[type=\"submit\"");

submitButton.onclick = function() {
    makeRequest();
    return false;
}