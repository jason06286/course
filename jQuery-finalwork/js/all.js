$(document).ready(function () {
    $('.jq-list li a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();
    });
});
//swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});