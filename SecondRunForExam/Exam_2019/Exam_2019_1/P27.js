let section = document.getElementById("tic-tac-toe");
let id = section.getAttribute("data-id");

let req = new XMLHttpRequest();
req.onload = updateGameBoard;
req.open('post', 'play.php');
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.send(encodeForAjax({ id: id }));

function updateGameBoard() {

    let stateGame = JSON.parse(this.responseText);
    let divs = section.getElementsByTagName("div");

    for (let i = 0; i < divs.length && i < stateGame.length; i++) {

        divs[i].innerHTML = stateGame.squares[i];
    }

    let stateFromHTML = section.getElementById("state");
    stateFromHTML.innerHTML = section.state;

}