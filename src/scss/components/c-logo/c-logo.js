const back = document.querySelector('.c-logo__return');

back.addEventListener('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, '3000');
})