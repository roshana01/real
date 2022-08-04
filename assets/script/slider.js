$(".owl-carousel").owlCarousel({
    loop: false,
    rewind: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 5,
        },
    },
});
