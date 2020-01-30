let sectionGame = document.getElementById('game');
let inputWithLetters = sectionGame.querySelector(input[name = "send"]);

inputWithLetters.addEventListener('click', makeRequest);

function makeRequest() {


    let inputGuess = sectionGame.querySelector(input[name = "guess"]);

    let req = new XMLHttpRequest();
    req.onload = updateHTML;
    req.open("post", 'is_guess_correct.php', true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(encodeForAjax({ guess: inputGuess.value }));
}

function updateHTML() {

    let response = JSON.parse(this.responseText);

    if (response.result == "wrong") {
        alert("WRONG");
        return;

    }

    let listWithLetters = sectionGame.getElementsByTagName('ul')[0];
    listWithLetters.innerHTML = "";

    for (let i = 0; i < response.word.length; i++) {

        let newListItem = document.createElement('li');
        newListItem.innerHTML = response.word[i];
        newListItem.addEventListener('click', makeArrangements);
        listWithLetters.appendChild(newListItem);

    }


    let inputGuess = sectionGame.querySelector(input[name = "guess"]);
    inputGuess.innerHTML = "";

}