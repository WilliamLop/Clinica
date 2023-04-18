AOS.init({
    offset: 100,
});
let ubicacionPrincipal = window.pageYOffset;
const header = document.getElementsByClassName("header");
const navButton = document.querySelector(".nav__box");
const navMenu = document.querySelector(".nav__container");

const navLogo = document.querySelector(".nav__logo");
const navText = document.querySelector(".text__logo");


window.addEventListener("scroll", function () {

    const desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
        this.document.getElementsByTagName("header")[0].style.top = "0px";
    } else {
        this.document.getElementsByTagName("header")[0].style.top = "-100px";
    }

    ubicacionPrincipal = desplazamientoActual;
});


navButton.addEventListener("click", (e) => {
    e.preventDefault();


    navMenu.classList.toggle("nav__container--active");
    navText.classList.toggle('text__logo--active');
    navLogo.classList.toggle('nav__logo--active');


    if (navMenu.classList.contains("nav__container--active")) {
        navButton.setAttribute('src', './img/icon-close.svg');
    } else {
        navButton.setAttribute('src', './img/icon-hamburger.svg');
    }

});


window.addEventListener('resize', () => {

    const isMenuActive = document.querySelector('.nav__container--active');


    if (isMenuActive) {

        navMenu.classList.remove('nav__container--active');
        navButton.setAttribute('src', './img/icon-hamburger.svg');
        navText.classList.remove('text__logo--active');
        navLogo.classList.remove('nav__logo--active');

    }
});

var swiper = new Swiper(".slide__content", {
    cssMode: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    mousewheel: true,
    keyboard: true,
    simulateTouch: true,
});