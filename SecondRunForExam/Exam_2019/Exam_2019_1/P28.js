let section = document.getElementById("tic-tac-toe");
let id = section.getAttribute("data-id");
let divs = section.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {

    divs[i].addEventListener('click', makeRequest.bind(divs[i], id, i));

}

function makeRequest(id, position) {

    if (this.innerHTML != "")
        return;

    let req = new XMLHttpRequest();
    req.onload = updateGameBoard;
    req.open('post', 'play.php');
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({ id: id, position: position }));

    this.removeEventListener('click', makeRequest);
}