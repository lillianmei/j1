$(function () {
  //ladnding page
  const $landing = document.querySelector('#landing')
  if ($landing) {
    $(window).on('mousewheel', function (e) {
      if (e) {
        $('body').addClass('start-scroll')
        setTimeout(function () {
          $('body').removeClass('no-scroll')
          $('#landing .landing-page').css('display', 'none')
        }, 1500);
      }
    });
    // $('#landing').on('click', function () {
    //     $('body').addClass('start-scroll')
    //     setTimeout(function () {
    //       $('body').removeClass('no-scroll')
    //       $('#landing h1').css('display', 'none')
    //       $('#landing .welcome').css('display', 'none')
    //     }, 800);
    // })
  } else {
    $('body').removeClass('no-scroll')
  }

  //account hover效果
  const $account = document.querySelector('.user-account')
  if (!$account) return;
  $account.addEventListener('mouseenter', e => {
    $account.classList.add('-active')
    $account.classList.remove('-leave')
  })
  $account.addEventListener('mouseleave', e => {
    $account.classList.remove('-active')
    $account.classList.add('-leave')
  });

  //顯示GO TO TOP
  const $goup = $('.gotop');
  $(window).on('scroll', function () {
    let scrollHeight = 300
    if ($(window).scrollTop() > scrollHeight) {
      $goup.addClass('show')
      // $nav.addClass('mini');
    } else {
      $goup.removeClass('show')
      // $nav.removeClass('mini');
    }
  })
  //go top
  $goup.on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  })


  $('.footer').load('footer.html')

});