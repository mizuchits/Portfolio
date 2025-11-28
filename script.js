const burgerBtn = document.querySelector('.js-menu-toggle-btn')
const slide_menu = document.getElementById('slide_menu')

const toggleMenu = () => {
    burgerBtn.classList.toggle('hamburger-menu--active')

    if (slide_menu.style.display === "block") {
        slide_menu.style.display = "none"
    } else {
        slide_menu.style.display = "block"

    }
}

if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu)
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}