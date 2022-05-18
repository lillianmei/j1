$(function () {
  const landing = document.querySelector('#landing')
  if (landing) {
    $(window).on('mousewheel', function (e) {
      if (e) {
        $('body').addClass('start-scroll')
        setTimeout(function () {
          $('body').removeClass('no-scroll')
          $('#landing h1').css('display', 'none')
          $('#landing .welcome').css('display', 'none')
        }, 800);
      }
    });
  } else {
    $('body').removeClass('no-scroll')
  }


  //NAV效果
  $(window).on('scroll resize', function (e) {
    let scrollHeight = 300
    $nav = $('#nav');
    if ($(window).scrollTop() > scrollHeight) {
      // $nav.addClass('mini');
    } else {
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
