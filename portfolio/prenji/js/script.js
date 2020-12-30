$(document).ready(function(){
    $('.promo__slides').slick({
        slidesToShow:1,
        dots: true,
        autoplay: true,
	fade: true,
        speed: 150,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
                dots: false
            }
        }]
    });

    $('.decision__slides').slick({
        slidesToShow:1,
        dots: true,
        autoplay: true,
        speed: 150,
        fade: true,
        cssEase: 'linear',
        initialSlide: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png" ></button>',
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }]
    });
});