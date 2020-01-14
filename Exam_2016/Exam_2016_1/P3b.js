function checkResponseUsername() {

    let response = JSON.parse(this.responseText);

    if (response.valid == "true") {

        this.submit();
    } else {

        let inputOfUsername = this.querySelectorAll("input[name=\"username\"")[0];
        inputOfUsername.style.border = "solid red";
    }

}

function makeRequest() {

    let form = document.getElementById("register");
    let inputOfUsername = form.querySelectorAll("input[name=\"username\"")[0];

    let req = new XMLHttpRequest();
    req.onload = checkResponseUsername.bind(form);
    req.open("post", "verifyusername.php");
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send("username=" + inputOfUsername.value);

    return false;

}



let form = document.getElementById("register");
let submitButton = form.querySelectorAll("input[type=\"submit\"")[0];

submitButton.onclick = makeRequest;