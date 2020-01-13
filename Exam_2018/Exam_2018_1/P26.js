function addToText(letter) {

    if (this.className === "used")
        return;


    let textInput = document.querySelectorAll("#game input[name=\"guess\"]")[0];

    textInput.value = textInput.value + letter;

    this.className = "used";

}


let sectionGame = document.getElementById("game");
let listOfLetters = sectionGame.getElementsByTagName("ul")[0];
let elementsOfList = listOfLetters.getElementsByTagName("li");

for (let i = 0; i < elementsOfList.length; i++) {

    if (elementsOfList[i].className !== "reset") {
        let letter = elementsOfList[i].innerHTML;
        elementsOfList[i].onclick = addToText.bind(elementsOfList[i], letter);
    }
}