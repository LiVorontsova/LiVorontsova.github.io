function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
        const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = slider.querySelector(prevArrow),
        next = slider.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    // function slidesInfo (item, addr) {
    //     if (item < 10) {
    //         addr.textContent = `0${item}`;
    //     } else {
    //         addr.textContent = item;
    //     }
    // }

    // function indexInfo (item, addr) {
    //     if (item < 10) {
    //         addr.textContent = `0${slideIndex}`;
    //     } else {
    //         addr.textContent = slideIndex;
    //     }
    // }

    // function firstNumber(item) {
    //     if (item == 1) {
    //         item = slides.length;
    //     } else {
    //         item--;
    //     }
    //      return item;
    // }

    // slidesInfo(slides.length, total);
    // slidesInfo(slides.length, current);

    if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
    } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
    slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
        
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
    }

    function deleteNotDiggits(str) {
    return +str.replace(/\D/g, ''); 
    }

    next.addEventListener('click', () => {
    if (offset == deleteNotDiggits(width) * (slides.length -1)) {
        offset = 0;
    } else {
        offset +=  deleteNotDiggits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    // firstNumber(slideIndex);
    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    // indexInfo(slides.length, current);

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = deleteNotDiggits(width) * (slides.length -1);
    } else {
        offset -= deleteNotDiggits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    // firstNumber(slideIndex);
    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
    //  slideIndex = firstNumber(slideIndex);
    // indexInfo(slides.length, current);

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
    dot.addEventListener('click' , (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = deleteNotDiggits(width) * (slideTo -1);

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });
    });

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none'); //скрываем все слайды
    
    //     slides[slideIndex - 1].style.display = 'block'; //показываем нужный слайд

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });
}

export default  slider;