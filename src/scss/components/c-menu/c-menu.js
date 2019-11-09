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
        $('.c-menu__list').toggleClass('c-menu__list--open');
        $('.c-menu__list').slideToggle();

    });

    $('.c-menu__list').click(function () {
        $('.c-menu__hamburger').removeClass('c-menu__hamburger--open');
        $('.c-menu__list').removeClass('c-menu__list--open');
        $('.c-menu__list').slideUp();

    });



    $('.c-menu__link').on('click', function () {
        const goToSection = $(this).attr('href');

        $('body, html').animate({
            scrollTop: $(goToSection).offset().top - $(window).height() / 4
        }, '3000');
    })
});