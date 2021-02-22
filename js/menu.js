//let headerLink = getElementsByClassName(".header-link");

function showHide() {
    var x = document.getElementsByClassName("header-link");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}