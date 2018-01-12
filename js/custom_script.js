$(function($) {
  $("body").fadeIn('fast');
  $('a[href$=".html"]').click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut('fast', redirectPage);
  });
  function redirectPage() {
    window.location = linkLocation;
  }
});


$('.burger-toggler').click(function () {
  $('.burger-toggler').toggleClass('show');
  $('.icon-bar').toggleClass('show');
  $('.navbar').stop(true, true).fadeToggle();
  // $('.navbar').stop(true, true).slideToggle();
});

$(document).ready(function(){
  $('#obj_fade>div').each(function(i, e){
    setTimeout(function() {
      // $(e).fadeIn('slow');
      $(e).show('drop', { direction: 'down' }, 'slow');
    }, 250 * i);
  });

  // $('.fade_obj.in').each(function(i, e){
  //   setTimeout(function() {
  //     $(e).fadeIn('slow');
  //   }, 200 * i);
  // });
});
