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

$(function(){
	var container = $('#st-container'),
            	reset = $('#st-trigger-effects'),
    resetMenu = function() {
      $('.st-container.st-effect').removeClass('st-menu-open');
      $('.burger-toggler').toggleClass('show');
      $('.icon-bar').toggleClass('show');

      $(document).unbind( "click", bodyClickFn );
      $(document).unbind( "click", resetClickFn );
    },
		bodyClickFn = function(evt) {
      if( $(evt.target).parents('.st-menu').length || $(evt.target).hasClass('st-menu') ) {
			} else {
        resetMenu();
      }
		},
		resetClickFn = function(evt) {
			if (evt.target == reset) {
				resetMenu();
			}
		};

    $('#st-trigger-effects').click(function (ev) {
      ev.stopPropagation();
      ev.preventDefault();

      $('.burger-toggler').toggleClass('show');
      $('.icon-bar').toggleClass('show');

      setTimeout( function() {
				$('.st-container.st-effect').addClass('st-menu-open');
			}, 50 );

      $(document).bind( "click", bodyClickFn );
      $(document).bind( "click", resetClickFn );
    });
});
