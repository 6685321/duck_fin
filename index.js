$(function(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        PrevArrow: '<span class="priv_arrow"><i class="fa-regular fa-chevron-left"></i></span>',
        NextArrow: '<span class="next_arrow"><i class="fa-regular fa-chevron-right"></i></span>',
      });
});