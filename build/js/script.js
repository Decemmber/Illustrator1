$(document).ready(function(){$(".multiple-items").slick({lazyLoad:"ondemand",infinite:!0,slidesToShow:4,slidesToScroll:2,arrows:!1,dots:!0,dotsClass:"dots-style",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(window).scroll(function(){0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body,html").animate({scrollTop:0},800)})});