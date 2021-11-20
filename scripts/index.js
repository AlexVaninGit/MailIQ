$(window).on('scroll', () => {
    $(window).scrollTop() > 50
        ? $('nav').addClass('bg-dark')
        : $('nav').removeClass('bg-dark')
})

$('.navbar-toggler').on('click', () => {
    !$('nav').hasClass('bg-dark') && $('nav').toggleClass('bg-dark')

})

$('.footer__link-top').on('click', (e) => {
    $('html, body').animate({scrollTop: 0}, 600);
    return false
})