function changeBackgroundColor() {

    let inputCopyButton = document.querySelector("input[name=\"color\"");
    let color = inputCopyButton.value;

    let box = document.querySelector(".box");
    box.style.setProperty("background-color", color);


}

let inputCopyButton = document.getElementById("copy");
inputCopyButton.onclick = changeBackgroundColor;
/*
<input name="color" type="text" value="#336699">
<button id="copy" value="Copy">Copy</button>
<button id="send" value="Send">Send</button>
<div class="box">
TESTE</div>
 */