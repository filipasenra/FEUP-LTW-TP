let sectionGame = document.getElementById('game');
let listWithLetters = sectionGame.getElementsByTagName('ul')[0];
let elementsWithLetters = listWithLetters.getElementsByTagName('li');


for (let i = 0; i < elementsWithLetters.length; i++) {


    elementsWithLetters[i].addEventListener('click', makeArrangements);

}

function makeArrangements() {

    if (this.className != 'used')
        return;

    this.className = 'used';

    let inputWithLetters = sectionGame.querySelector(input[name = "guess"]);
    inputWithLetters.value += this.innerHTML;

}