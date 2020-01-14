/*
 <script>
var secret = Math.floor((Math.random()*100) + 1); // generates random number
var tries = 0;
</script>
<input name="username" type="text" placeholder="username">
<input name="guess" type="text">
<input id="guess" type="button" value="Guess">


When the guess button is pressed, if the value in the input named guess is lower than the variable
secret, a dialog with the sentence ”go up”should be shown, if it is higher, the sentence should read
”go down”and if they are the same, a function named correct should be called. The tries variable
should be increased by one in any of the cases.

*/

//function created for testing Purposes on a)
function correct() {
    alert("Correct!\n");
}

function checkGuess() {

    let input = document.querySelector("input[name=\"guess\"");
    let guess = Number(input.value);


    tries++;

    if (guess === secret) {
        correct();
    } else if (guess < secret) {
        alert("go up");
    } else {
        alert("go down");
    }


}

let button = document.getElementById("guess");

button.onclick = function() {
    checkGuess();
    return false;
}