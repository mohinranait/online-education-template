
var swiper = new Swiper(".courseCategory", {
    spaceBetween: 20,
    // loop: true,
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        778: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});