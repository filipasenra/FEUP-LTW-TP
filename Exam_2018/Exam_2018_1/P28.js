function loadNewWord() {

    let result = this.responseText; //maybe JSON.parse here? but they don't talk about so?

    if (result.result === "wrong") {
        alert("WRONG");
        return;
    }

    let textInput = document.querySelectorAll("#game input[name=\"guess\"]")[0];
    textInput.value = "";
    let listOfLetters = document.querySelectorAll("#game ul")[0];
    listOfLetters.innerHTML = "";

    for (let i = 0; i < result.word.length; i++) {

        let makeLetter = document.createElement("li");
        makeLetter.innerHTML = result.word[i];
        makeLetter.onclick = addToText.bind(makeLetter, result.word[i]);
        listOfLetters.appendChild(makeLetter);

    }

}

function makeRequest() {


    let textInput = document.querySelectorAll("#game input[name=\"guess\"]")[0];

    let req = new XMLHttpRequest();
    req.onload = loadNewWord;
    req.open('post', 'is_guess_correct.php');
    req.setRequestHeader("Content-type", "application/x--www-form-urlencoded");
    req.send(encodeForAjax({ guess: textInput.value }));
}

let sendButton = document.querySelectorAll("#game input[name=\"send\"]")[0];
sendButton.onclick = makeRequest;

function encodeForAjax(data) {
    return Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}