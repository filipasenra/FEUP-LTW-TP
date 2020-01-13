function resetGame() {
    let textInput = document.querySelectorAll("#game input[name=\"guess\"]")[0];
    textInput.value = "";

    let listElements = document.querySelectorAll("#game ul li");

    for (let i = 0; i < listElements.length; i++) {

        listElements[i].className = "";

    }

}

let resetButton = document.querySelectorAll("#game input[name=\"reset\"]")[0];

resetButton.onclick = resetGame;