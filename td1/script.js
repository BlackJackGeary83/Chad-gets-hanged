let send_button = document.getElementById("sendit");
let button = document.getElementById("buted");
let textfield = document.getElementById("field")
let letters = []
let letterfield = document.getElementById("lettered")
let toguess = "kumalala"
let currtab = []
let state = false
function startgame() {
    unhide();
    for (let i = 0; i < toguess.length; i++) {
        currtab.push("_")
    }
    showArray();
}
function showArray() {
    let divi = document.getElementById("hangman")
    divi.innerHTML = "<h1>"
    for (let i = 0; i < currtab.length; i++) {
        divi.innerHTML += " " + currtab[i]

    }
    divi.innerHTML += "</h1>"
}
function unhide() {

    let eee = document.getElementsByClassName("notDisplayed")
    for (let i = 1; i < eee.length; i++) {
        console.log(i)
        eee[i].classList.remove("notDisplayed");
        i--;
    }
    document.getElementById("buted").classList.add("notDisplayed")
}

function checkletter() {
    let text = textfield.value;
    text = text.toLowerCase();
    if (!isLetter(text)) {
        alert("ALLERTE");
        textfield.value = "";
        return;
    }
    if (letters.includes(text) || currtab.includes(text)) {
        alert("ALREADY GUESSED")
        textfield.value = "";
        return;
    }
    if (!toguess.includes(text)) {
        // alert("add useless letter")
        addletter(text)
        textfield.value = "";
        return;
    }
    if (toguess.includes(text)) {
        // alert("goo leyyet, we uopdtare array accrodingmly")

        updateArray(text);
        checkforthewin();

        textfield.value = "";
        return;
    }

}
function checkforthewin() {
    let errors = 0
    for (let i = 0; i < toguess.length; i++) {
        if (toguess.charAt(i) != currtab[i]) {
            errors += 1;
        }

    }
    if (errors == 0) {
        win();
    }
}
function win() {

    document.getElementById("ee").textContent = "YOU WIN !"
    let a = document.getElementsByClassName("ezz")

    a[0].classList.remove("ezz")
    var audio = new Audio('sexe.mp3');
    audio.volume = 0.1
    audio.play();

}
function updateArray(letter) {
    for (let i = 0; i < toguess.length; i++) {
        if (toguess.charAt(i) == letter) {

            currtab[i] = letter
        }
    }
    showArray();
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
function addletter(letter) {
    letters.push(letter);
    letterfield.innerHTML += "<div class='letterbox'>" + letter + "</div>"

}

button.addEventListener("click", startgame)
send_button.addEventListener("click", checkletter)



document.getElementById("field").addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("sendit").click();
    }
});












