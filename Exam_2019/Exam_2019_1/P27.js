function loadGame() {

    let data = JSON.parse(this.responseText);

    let objectWithId = document.getElementById("tic-tac-toe");
    let divs = objectWithId.getElementsByTagName("div");

    for (let i = 0; i < divs.length && i < data.length; i++) {

        divs[i].innerHTML = data.squares[i];
    }

    let P_State = objectWithId.getElementById("state");
    P_State.innerHTML = data.state;

}

let objectWithId = document.getElementById("tic-tac-toe");

let id = objectWithId.getAttributeNode("data-id").value;

let req = new XMLHttpRequest();
req.onLoad = loadGame

req.open("post", "play.php");
req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
req.send(encodeForAjax({ id: id }));