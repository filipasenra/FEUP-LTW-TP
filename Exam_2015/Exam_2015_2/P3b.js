/*
 <script>
var secret = Math.floor((Math.random()*100) + 1); // generates random number
var tries = 0;
</script>
<input name="username" type="text" placeholder="username">
<input name="guess" type="text">
<input id="guess" type="button" value="Guess">


 Create the function named correct, that was mentioned in the previous question, so that it shows
a dialog with the sentence ”correct”and also makes an Ajax call to a save score.php script. The
username (input with name username) and the number of tries (variable tries) should also be sent
to that script. Inform the user if the script was called successfully or not.


*/
function correct() {

    alert("Correct!\n");

    let usernameInput = document.querySelector("input[name=\"username\"").value;

    var req = new XMLHttpRequest();
    req.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("The call was a success!\n");
        } else {
            alert("The call was not a success!\n");
        }
    };

    req.onerror = function() {
        alert("The call was not a success!\n");
    };
    req.open('post', 'save_score.php');
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send("username=" + usernameInput.value + "&tries=" + tries);
}