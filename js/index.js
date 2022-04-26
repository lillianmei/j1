$(function () {

  //啟動滑動效果
  AOS.init({
    mirror:true,
    // easing: 'ease-out-back',
  });
    // $.scrollify({
    //   section: ".panel",
    //   scrollSpeed: 2000,
    //   sectionName: false,
    //   updateHash: true,
    //   easing: "easeOutCubic",
    //   setHeights: false,
    // });

  //NAV效果
  $(window).on('scroll resize', function (e) {
    let scrollHeight = 600
    let sectionY = $('section[data-id]').offset().top;
      $nav = $('#nav');
    if ($(window).scrollTop() > scrollHeight) {
      // $nav.addClass('mini');
      $nav.css('z-index','2')
      $nav.css('opacity', '1')
      $('html,body').animate({
        scrollTop: div
      }, 500);
    } else {
      $nav.css('z-index', '0')
      $nav.css('opacity', '0')
      // $nav.removeClass('mini');
    }
  })
  //scroll滑動效果
   $(window).on('scroll resize', function (e) {
     let sectionY = $('section[data-id]').offset().top;
     let scrollHeight = sectionY/2

     if ($(window).scrollTop() > scrollHeight) {
       $('html,body').animate({
         scrollTop: sectionY
       }, 500);
     }
   })
  //account hover效果
  const account = document.querySelector('.user-account')
  account.addEventListener('mouseenter', e => {
    account.classList.add('-active')
    account.classList.remove('-leave')
  })
  account.addEventListener('mouseleave', e => {
    account.classList.remove('-active')
    account.classList.add('-leave')
  });

  //

});
