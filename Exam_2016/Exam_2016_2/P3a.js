function addNumber(number) {

    this.value += number;
}

let keypad = document.getElementById("keypad");
let numbers = keypad.getElementsByTagName("a");

let formPin = document.getElementById("pin");
let pinInput = formPin.querySelector("input[name=\"pin\"");

for (let i = 0; i < numbers.length; i++) {

    numbers[i].onclick = addNumber.bind(pinInput, numbers[i].innerHTML);
}

/*<form id="pin" method="post">
 <input type="text" name="username">
 <input type="text" name="pin">
 <input type="submit" value="Verify">
</form>
<div id="keypad">
<a href="#">1</a> <a href="#">2</a> <a href="#">3</a><br>
<a href="#">4</a> <a href="#">5</a> <a href="#">6</a> <br>
<a href="#">7</a> <a href="#">8</a> <a href="#">9</a> <br> */