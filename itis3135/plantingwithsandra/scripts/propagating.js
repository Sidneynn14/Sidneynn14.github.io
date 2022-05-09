$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        moveSlides: 1,
        pause: 3000,
        //pager display
        pager: true,
        pagerSelector: "#id_pager",
        pagerType: 'short'
    });
});