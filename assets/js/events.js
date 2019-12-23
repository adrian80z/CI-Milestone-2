document.getElementById("play").addEventListener("click", function () {
    document.getElementById("start").classList.add("hide");
    document.getElementById("category").classList.remove("hide");
})

document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("start").classList.remove("hide");
    document.getElementById("category").classList.add("hide");
})