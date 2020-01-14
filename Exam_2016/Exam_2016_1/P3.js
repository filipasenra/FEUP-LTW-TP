function checkPasswordLength() {

    let password = this.value;

    if (password.length >= 8 && /!\w*/.test(password)) {
        this.style.border = ""

    } else {
        this.style.border = "solid red";
    }
}


let form = document.getElementById("register");
let inputOfPassword = form.querySelectorAll("input[name=\"password\"")[0];

inputOfPassword.onblur = checkPasswordLength.bind(inputOfPassword);