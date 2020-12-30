$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 0,
        speed: 1000,
        variableWidth: true,
        adaptiveHeight: true,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" ></button>' ,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1
                }
            }
        ]
        
    });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 1200) {
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

    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem =document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active'),
    hamburger.classList.add('active');
});

closeElem.addEventListener('click', ()=> {
    menu.classList.remove('active'),
    hamburger.classList.remove('active');
});
