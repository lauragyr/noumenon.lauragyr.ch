//menu-bar
function toggleMenu() {
    var x = document.getElementById("nav");
    if (x.style.display === "none" || x.style.display === '') {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

const resizeObserver = new ResizeObserver((entries) => {
    const nav = document.getElementById("nav");
    if (entries[0].contentRect.width === 0 && nav.style.display !== '') {
        nav.style.display = "flex";
    }

});

resizeObserver.observe(document.getElementById("menubar"));

//backtotop
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}