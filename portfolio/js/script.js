

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem =document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

closeElem.addEventListener('click', ()=> {
    menu.classList.remove('active');
});


$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();

        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#promo]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});