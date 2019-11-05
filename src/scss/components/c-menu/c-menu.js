const menu = document.querySelector('.c-menu');


document.addEventListener("scroll", () => {

    if (window.pageYOffset >= window.innerHeight) {
        menu.classList.add('c-menu--fixed');
    } else {
        menu.classList.remove('c-menu--fixed');
    }
})

$(document).ready(function () {
    $('.c-menu__hamburger').click(function () {
        $(this).toggleClass('c-menu__hamburger--open');
        $('.c-menu__list').slideToggle();
    });
});