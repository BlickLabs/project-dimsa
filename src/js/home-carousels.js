var coverCarousel = $('.cover-carousel');
var productsCarousel = $('.products-carousel');

coverCarousel.owlCarousel ({
  loop: false,
  responsiveClass: true,
  nav: true,
  navText: ['<img class="nav-arrows" src="img/icons/left-arrow.png" />', '<img class="nav-arrows" src="img/icons/right-arrow.png" />'],
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: true
    },
      1000: {
      items: 1,
      nav: true,
      loop: false
    }
  }
});

coverCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='owl-controls'></div>");
});

productsCarousel.owlCarousel ({
  loop: false,
  margin: 10,
  nav: true,
  autoWidth: true,
  items: 5,
  dots: true,
  center: false,
  navText: ['<img class="nav-arrows" src="img/icons/left-arrow.png" />', '<img class="nav-arrows" src="img/icons/right-arrow.png" />'],
  responsive: {
    1265: {
      loop: false,
      margin: 10,
      nav: true,
      autoWidth: false,
      items: 4,
      dots: true,
      center: true,
    }
  }
});

productsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='products-owl-controls'></div>");
});
