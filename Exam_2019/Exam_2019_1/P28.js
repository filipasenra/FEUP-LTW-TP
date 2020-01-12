function makeRequest(location, id, div) {


    let req = new XMLHttpRequest();
    req.onLoad = function() {
        loadGame(id);
    }
    req.open("post", "play.php");
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({ id: id, location: location }));

    div.removeEventListener('click', makeRequest);
}

let objectWithId = document.getElementById("tic-tac-toe");
let id = objectWithId.getAttributeNode("data-id").value;

let divs = objectWithId.getElementsByTagName("div");

for (let i = 0; i < divs.length && i < data.length; i++) {

    divs[i].onclick = (function(id, location, div) {

        return function() {

            makeRequest(id, location, div);
        }
    })(id, location, divs[i]);
}