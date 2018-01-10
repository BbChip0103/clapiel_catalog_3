/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/


$(document).ready(function(){
  // $('.txt_button').each(function(i, e){

  // $('.mast__header>.txt_bt_margin.top>.txt_button').each(function(i, e){
  //   setTimeout(function() {
  //     $(e).fadeIn('slow');
  //   }, 200 * i);
  // });
  //
  // $('.mast__header>.txt_bt_margin.bottom>.txt_button').each(function(i, e){
  //   setTimeout(function() {
  //     $(e).fadeIn('slow');
  //   }, 200 * i);
  // });

  $('.mast__header>.txt_bt_margin.top>div>a>.js-spanize').each(function(i, e){
    setTimeout(function() {
      $(e).css('opacity', '100').html(function (i, el) {
        var spanizer = $.trim(el).replace(/&amp;/g,"&").split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    }, 100 * i);
  });

  $('.mast__header>.txt_bt_margin.bottom>div>a>.js-spanize').each(function(i, e){
    setTimeout(function() {
      $(e).css('opacity', '100').html(function (i, el) {
        var spanizer = $.trim(el).replace(/&amp;/g,"&").split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    }, 100 * i);
  });
});
