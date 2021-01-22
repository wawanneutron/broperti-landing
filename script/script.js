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