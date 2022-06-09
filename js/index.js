const app = Vue.createApp({
  components: {
    'nav-header': {
      template: `<header>
    <nav id="nav">
      <input type="checkbox" id="toggle" class="input-toggler" />
      <div class="sidebar-overlay"></div>
      <label for="toggle" class="menu-toggler">
        <span class="menu-toggler-line"></span>
        <span class="menu-toggler-line"></span>
        <span class="menu-toggler-line"></span>
      </label>
      <div class="sidebar">
        <a class="nav-brand" href="index.html">
          <h1>LOGO</h1>
        </a>
        <!-- navbar for pc  -->
        <div class="forpc">
          <ul class="menu">
            <li>
              <a class="menu-link" href="book.html" title="線上訂票">線上訂票</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" title="公館場次查詢">公館場次查詢</a></li>
                <li><a class="dropdown-item" href="#" title="新竹場次查詢">新竹場次查詢</a></li>
              </ul>
            </li>
            <li>
              <a class="menu-link" href="#" title="電影介紹">電影介紹</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" title="現正熱映">現正熱映</a></li>
                <li><a class="dropdown-item" href="#" title="即將上映">即將上映</a></li>
              </ul>
            </li>
            <li><a class="menu-link" href="news.html" title="最新消息">最新消息</a></li>
            <li><a class="menu-link" href="group-ticket.html" title="業務專區">業務專區</a></li>
            <li><a class="menu-link" href="#" title="關於影城">關於影城</a></li>
          </ul>
          <!-- login/logout style user-account toggle class 'isUser'/none   -->
          <div class="user-account isUser">
            <div class="user">
              HELLO! <span class="user-name">Yick</span><span class="material-icons"> person </span><span
                class="material-icons"> menu </span>
            </div>
            <div class="account-sub">
              <hr />
              <a href="book-history.html" title="訂票查詢與取消">訂票查詢與取消</a>
              <a href="account.html" title="會員資料">會員資料</a>
              <a href="" title="會員優惠PLUS">會員優惠PLUS</a>
            </div>
            <div class="user-login">
              <a href="#login" title="會員登入">會員登入</a>
            </div>
            <div class="user-regist">
              <a href="#regist" title="加入會員">加入會員</a>
            </div>

          </div>
        </div>
      </div>
    </nav>
    <!-- 登入modal -->
    <div class="modal" id="login">
      <div class="modal-content">
        <h2>WELCOME TO BROADWAY!</h2>
        <div class="modal-info">
          <form action="">
            <div class="row" >
              <label for="loginid">帳號（電子郵件信箱）</label>
              <input type="text" id="loginid" placeholder="aaabbb@gmail.com">
            </div>
            <div class="row">
              <label for="loginpassword">登入密碼 <a href="" class="forgetpwd">
                  <span class="material-icons">error</span> FORGOT PASSWORD</a></label>
              <input type="text" id="loginpassword" placeholder="PASSWORD">
              <label for="lockpwd" class="xs-font container-checkbox lockpwd">
                記住密碼
                <input type="checkbox" name="lockpwd" id="lockpwd">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="row safeverify">
              <label for="">安全驗證</label>
              <div>
                <input type="text" placeholder=" 請輸入右方驗證碼">
                <div class="imgsafe">
                  <img src="https://picsum.photos/g/150/40" alt="">
                  <a href=""><span class="material-icons">sync</span></a>
                </div>
              </div>
            </div>
            <div class="row actionbtn">
              <button type="submit">LOGIN</button>
              <a href="#regist" class="xs-font">尚未申請帳號！馬上註冊!</a>
            </div>
          </form>
        </div>
        <a href="#" class="close-modal"><span class="material-icons">close</span></a>
      </div>
    </div>
    <!-- 註冊modal -->
    <div class="modal" id="regist">
      <div class="modal-content">
        <h2>WELCOME TO BROADWAY!JOIN US!</h2>
        <div class="modal-info">
          <form action="">
            <div class="row">
              <label for="registid">帳號（電子郵件信箱)<span class="required-icon">*</span></label>
              <input type="text" id="registid" required="required" placeholder="aaabbb@gmail.com">
            </div>
            <div class="row">
              <label for="phone">聯絡電話<span class="required-icon">*<span
                    class="xs-font">將以此帳號作為日後訂單聯繫，請務必填寫正確</span></span></label>
              <input type="number" id="phone" required="required" placeholder="091234567">
            </div>
            <div class="row">
              <label for="setpwd">設定密碼<span class="required-icon">*</span></label>
              <input type="text" id="setpwd" required="required" placeholder="請輸入6-10位含大小寫英數字">
            </div>
            <div class="row">
              <label for="confirmpwd">確認密碼<span class="required-icon">*</span></label>
              <input type="text" id="confirmpwd" required="required" placeholder="請再次確認密碼">
            </div>
            <div class="row">
              <label for="confirmrule" class="xs-font container-checkbox">
                我同意 會員條款｜應用程式使用條款｜個人資料使用條款
                <input type="checkbox" id="confirmrule" required="required">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="row actionbtn">
              <button type="submit">REGISTER</button>
              <a href="#login" class="xs-font">已有帳號！馬上登入!</a>
            </div>
          </form>
        </div>
        <a href="#" class="close-modal"><span class="material-icons">close</span></a>
      </div>
    </div>
  </header>`
    },
    'bottom-footer': {
      template: `<footer><div class="footer"><img src="https://fakeimg.pl/250x100/" />
<div>
  <a href=""><img class="fb" src="image/svg/dashicons_facebook-alt.svg" /></a>
  <a href=""><img class="ig" src="image/svg/simple-line-icons_social-instagram.svg" /></a>
  <a href=""><img class="yt" src="image/svg/typcn_social-youtube.svg" /></a>
  <a href=""><img class="email" src="image/svg/dashicons_email-alt.svg" /></a>
  <div class="s-font">
    公館百老匯影城 02-8663-6128 | 新竹百老匯影城 02-86636128
  </div>
  <div class="s-font">
    Copyright© 2022 Broadway Cinemas All Rights Reserved.
  </div>
</div></div>
  </footer>`
    }
  }
});
app.mount('#app');

$(function () {

  const $landing = document.querySelector('.landing')
  const $account = document.querySelector('.user-account')
  const $body = document.querySelector('body')
  const $datePicker = document.querySelector('#datepicker')
  const $goup = $('.gotop');
  const $tab = $('.tab-item');
  const $eye = $('.pwd-eye');
  const $time = $('.time');
  const $datetime = $('.booktime')

  //ladnding page animation
  if ($landing) {
    $(window).on('wheel', function (e) {
      if (e) {
        $body.classList.add('start-scroll')

        setTimeout(function () {
          $body.classList.remove('no-scroll')
          $landing.style.display = 'none'
        }, 1800);
      }
    });
    if (window.matchMedia("(max-width: 768px)").matches) {
      setTimeout(function () {
        $body.classList.add('start-scroll')
      }, 3000)
      setTimeout(function () {
        $body.classList.remove('no-scroll')
      }, 4000);
      setTimeout(function () {
        $landing.style.display = 'none'
      }, 5500);
    }
  }
  if (!$landing) {
    $body.classList.remove('no-scroll')
  }

  //account hover效果
  if (!$account) return;
  $account.addEventListener('mouseenter', e => {
    $account.classList.add('-active')
    $account.classList.remove('-leave')
  })
  $account.addEventListener('mouseleave', e => {
    $account.classList.remove('-active')
    $account.classList.add('-leave')
  });

  //顯示go to top btn
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

  //分頁切換
  $tab.on('click', function (e) {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(`.tab-content[data-id='${e.target.id}']`).siblings().addClass('hide')
    $(`.tab-content[data-id='${e.target.id}']`).removeClass('hide')
  })

  // show or hide PWD
  $eye.on('click', function (e) {
    let isHide = e.target.innerText
    if (isHide === 'visibility') {
      e.target.innerText = 'visibility_off'
      e.target.classList.remove('pwd-on')
      $(this).next().attr('type', 'password')
    }
    if (isHide === 'visibility_off') {
      e.target.innerText = 'visibility'
      e.target.classList.add('pwd-on')
      $(this).next().attr('type', 'text')
    }
  })

  // jQ datepicker
  if ($datePicker) {
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      changeMonth: true,
      changeYear: true,
      yearRange: "1942:2023",
    });
  }

  // 選取時刻表效果
  $datetime.on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })
  $time.on('click',function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })



});