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

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-33.33333333333333%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')) {
            slides.style.transform = 'translatex(-66.6666666667%)';
            e.target.classList.add('active');
        }
    }
});