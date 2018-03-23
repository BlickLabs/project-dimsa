$("a.allproducts-scroll").click(function() {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 160
  }, 800);
});
