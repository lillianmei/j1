$(function () {
   $.scrollify({
     section: ".panel",
     scrollSpeed: 800,
   });
  //NAV效果
  $(window).on('scroll resize', function (e) {
    let scrollHeight = 150,
      $nav = $('#nav');
    if ($(window).scrollTop() > scrollHeight) {
      $nav.addClass('mini');
    } else {
      $nav.removeClass('mini');
    }
  })
});
