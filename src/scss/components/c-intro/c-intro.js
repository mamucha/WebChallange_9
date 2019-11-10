$('.c-intro__arrow').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#about').offset().top - $(window).height() / 4
    }, '3000');
})