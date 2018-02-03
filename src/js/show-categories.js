$(document).ready(function() {
  $('.select-option').on('click', function(event) {

    var selectSection = $(this).data('section');
    var elContentOption = $('.' + selectSection);

    $(this).addClass('active');
    $('.select-option').not(this).removeClass('active');

    elContentOption.addClass('active');
    $('.info-selected-option').not(elContentOption).removeClass('active');

  });
});

window.addEventListener('scroll', function (){
  var windowHeight = window.innerHeight;
  var homeIsoPos = document.getElementsByClassName('home-iso-logo')[0].getBoundingClientRect().top;
  var homeIso = document.querySelector('.home-iso-logo');

  var homeDesignPos = document.getElementsByClassName('home-design-img-container')[0].getBoundingClientRect().top;
  var homeDesign = document.querySelector('.home-design-img-container');
  if (homeIsoPos < windowHeight) {
    homeIso.classList.add('pulse');
  } else {
    homeIso.classList.remove('pulse');
  }

  if (homeDesignPos < windowHeight) {
    homeDesign.classList.add('fadeInDown');
  } else {
    homeDesign.classList.remove('fadeInDown');
  } 
});
