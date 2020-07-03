//list slide
$(document).ready(function () {
    $('.jq-list li a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();
    });
});

//ad-hide
$(document).ready(function () {
    $('.jq-ad').click(function (e) { 
        e.preventDefault();
        $('.jq-ad-none').hide();
        
    });
});
//top
$(document).ready(function () {
    $('.jq-top ').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },1500);
        
    });
});
//swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});