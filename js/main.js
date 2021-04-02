const responsive = {
    0: {
        items: 1
    },
    400: {
        items: 1
    },
    640: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {
    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // AOS Instance
    AOS.init();
});