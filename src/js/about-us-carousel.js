var aboutUsCarousel = $('.about-us-carousel');

aboutUsCarousel.owlCarousel ({
  loop: false,
  responsiveClass: true,
  nav: true,
  navText: ['<img class="nav-arrows" src="img/icons/left-arrow.png" />', '<img class="nav-arrows" src="img/icons/right-arrow.png" />'],
  dots: true,
  autoWidth: true,
  responsive: {
    0: {
      items: 1
    }
  }
});

aboutUsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='about-controls'></div>");
});