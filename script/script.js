$(document).ready(function (){
    /* navbar scroll */
    $(window).scroll(function(){
        if (this.scrollY > 60) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
});

// when in the scroll, appears icon scroll to top
$(window).scroll(function () {
    var totalHeight = $(window).scrollTop();
    if (totalHeight > 300) {
        $(".scroll-up").fadeIn();
    } else {
        $(".scroll-up").fadeOut();
    }
});
//process scroll
$('.scroll-up').on('click', function (event) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
    }, 1200, 'easeInOutExpo');
});

/* owl carousel - image slider */
$('.owl-carousel').owlCarousel({
    stagePadding: 80,
    margin: 55,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 90,
            
        },
        600: {
            items: 2,
            
        },
        824: {
            items: 2,
            stagePadding: 60,

        },
        1000: {
            items: 3,
            
        },
        1292: {
            items: 4,
            stagePadding: 90,
            
        }
    }
});