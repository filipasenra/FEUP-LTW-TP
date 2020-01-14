function changeTextOfDiv() {

    let response = JSON.parse(this.responseText);


    let box = document.querySelector(".box");
    box.innerHTML = response.result;

}

function makeRequest() {
    let box = document.querySelector(".box");
    let color = box.style.getPropertyValue("background-color");

    let req = new XMLHttpRequest();
    req.onload = changeTextOfDiv;
    req.open('post', 'http://www.coloranalyzer.com/');
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send("color=" + color);
}

let inputSendButton = document.getElementById("send");
inputSendButton.onclick = makeRequest;