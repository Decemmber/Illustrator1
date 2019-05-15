$(document).ready(function() {
    $('.multiple-items').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
      });
})
