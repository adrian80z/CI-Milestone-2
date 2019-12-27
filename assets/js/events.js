var modalBox = document.getElementById("howToModal");
var btn = document.getElementById("howTo");
var span = document.getElementById("close");

// open the modal box after button clicked
btn.onclick = function () {
    modalBox.style.display = "block";
};

// close the modal box after clicks on X
span.onclick = function () {
    modalBox.style.display = "none";
};

//part of code taken from www.w3schools.com 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modalBox) {
        modalBox.style.display = "none";
    }
};

//attach onclick event to element and add/remove apropriate class
document.getElementById("play").addEventListener("click", function () {
    document.getElementById("start").classList.add("hide");
    document.getElementById("category").classList.remove("hide");
});

//attach onclick event to element and remove/add apropriate class
document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("start").classList.remove("hide");
    document.getElementById("category").classList.add("hide");
});