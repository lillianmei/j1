$(function () {
  const landing = document.querySelector('#landing')
  //啟動滑動效果
  // $.scrollify({
  //     section: ".panel",
  //     scrollSpeed: 2000,
  //     sectionName: false,
  //     updateHash: true,
  //     easing: "easeOutCubic",
  //     setHeights: false,
  //     after: function (e) {
  //       console.log(e)
  //       if(e===1){
  //         $.scrollify.destroy()
  //       }
  //     },
  //   });
  if(landing){
     $(window).on('mousewheel', function (e) {
       if (e) {
         $('body').addClass('start-scroll')
         $('body').removeClass('no-scroll')
       }
     });
     $('#landing').on('click', function () {
       $('body').addClass('start-scroll')
       $('body').removeClass('no-scroll')
     });
     
  }else{
     $('body').removeClass('no-scroll')
  }
  

  //NAV效果
  $(window).on('scroll resize', function (e) {
    let scrollHeight = 300
    $nav = $('#nav');
    $landing = $('#landing')
    if ($(window).scrollTop() > scrollHeight) {
      // $nav.addClass('mini');
      // $nav.css('z-index','2')
      // $nav.css('opacity', '1')
    } else {
      // $nav.css('z-index', '0')
      // $nav.css('opacity', '0')
      // $nav.removeClass('mini');
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

});
