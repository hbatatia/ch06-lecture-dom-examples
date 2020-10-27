function moveHorizontal(dx) {
    let book = document.getElementById('book');
    document.getElementById('book').style.left = book.offsetLeft + dx + "px";

}

function init() {
    let book = document.getElementById('book');
    book.addEventListener("mouseenter", processMouseEnter);
    book.addEventListener("mouseout", processMouseeOut);
    book.addEventListener("click", processClick);
}

function processMouseEnter(e) {
    document.getElementById('feeling').innerHTML = 'Tickling';
}

function processMouseeOut(e) {
    document.getElementById('feeling').innerHTML = 'Ouf';
}

function processClick(e) {
    document.getElementById('feeling').innerHTML = 'Ooooy';
}