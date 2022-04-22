$(function () {
   $.scrollify({
     section: ".panel",
     scrollSpeed: 800,
     updateHash: false,
     interstitialSection:""
   });
  //NAV效果
  $(window).on('scroll resize', function (e) {
    let scrollHeight = 800,
    $nav = $('#nav');
    if ($(window).scrollTop() > scrollHeight) {
      $nav.addClass('mini');
    } else {
      $nav.removeClass('mini');
    }
  })
});
