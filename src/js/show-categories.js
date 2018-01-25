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