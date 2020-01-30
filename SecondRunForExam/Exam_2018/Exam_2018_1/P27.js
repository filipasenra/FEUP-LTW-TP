let sectionGame = document.getElementById('game');
let inputWithLetters = sectionGame.querySelector(input[name = "guess"]);

inputWithLetters.addEventListener('click', resetGame);

function resetGame() {


    let listWithLetters = sectionGame.getElementsByTagName('ul')[0];
    let elementsWithLetters = listWithLetters.getElementsByTagName('li');

    for (let i = 0; i < elementsWithLetters.length; i++) {


        elementsWithLetters[i].className = "";

    }

    inputWithLetters.value = "";

}