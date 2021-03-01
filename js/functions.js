//menu-bar
function toggleMenu() {
    const nav = document.getElementById("nav");
    const hamburgerButton = document.getElementById('hamburgerButton');

    if (nav.style.display === "none" || nav.style.display === '') {
        nav.style.display = "flex";
        hamburgerButton.classList.add('is-active');
    } else {
        nav.style.display = "none";
        hamburgerButton.classList.remove('is-active');
    }
}

const resizeObserver = new ResizeObserver((entries) => {
    const nav = document.getElementById("nav");
    if (entries[0].contentRect.width === 0 && nav.style.display !== '') {
        nav.style.display = "flex";
    }

});

resizeObserver.observe(document.getElementById("menubar"));