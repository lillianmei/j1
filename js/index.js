$(function () {
  // $.scrollify({
  //   section: ".panel",
  //   scrollSpeed: 2000,
  //   sectionName:false,
  //   updateHash: true,
  //   easing: "easeOutCubic",
  //   setHeights: false,
  // });
 
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
  //account hover效果
  const account = document.querySelector('.user-account')
  const subaccount = document.querySelector('.account-sub')
  const line = document.querySelector('.account-sub hr')
  account.addEventListener('mouseenter', e => {
    subaccount.style.opacity = 1;
    subaccount.style.height = '145px';
    subaccount.classList.remove('animate-delay')
    line.style.opacity = 1;
    line.style.width = '80%'
  })
  account.addEventListener('mouseleave', e => {
    subaccount.style.opacity = 0;
    subaccount.style.height = '0';
    subaccount.classList.add('animate-delay')
    line.style.opacity = 0;
    line.style.width = 0;
    line.classList.add('animate-delay')
  })
});
