
  (function ($) {
  
  "use strict";

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $('.carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });

    $('.carousel-most').owlCarousel({
      center: false,
      loop: false,
      margin: 30,
      autoplay: false,
      responsiveClass: true,
      responsive:{
          0:{
              items: 1,
          },
          590:{
              items: 2,
          },
          767:{
              items: 3,
          },
          996:{
              items: 4,
          },
          1200:{
              items: 5,
          }
      }
  });
  
  })(window.jQuery);


