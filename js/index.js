const app = Vue.createApp({
  components: {
    "nav-header": {
      template: `<header>
  <nav id="nav">
    <input type="checkbox" id="hamberger-menu" class="input-toggler" />
    <div class="sidebar-overlay"></div>
    <label for="hamberger-menu" class="menu-toggler">
      <span class="menu-toggler-line"></span>
      <span class="menu-toggler-line"></span>
      <span class="menu-toggler-line"></span>
    </label>
    <div class="sidebar">
      <!-- navbar logo -->
      <a class="nav-brand" href="index.html">
      <img src="image/01_index_01_logo.png" alt="百老匯影城LOGO">
      </a>
      <!-- navbar menu  -->
      <div class="nav-menu">
        <ul class="menu">
          <li>
            <div class="menu-link">線上訂票</div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="book.html" title="公館場次查詢">公館場次查詢</a></li>
              <li><a class="dropdown-item" href="#" title="新竹場次查詢">新竹場次查詢</a></li>
            </ul>
          </li>
          <li>
            <div class="menu-link">電影介紹</div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="movies.html" title="現正熱映">現正熱映</a></li>
              <li><a class="dropdown-item" href="#" title="即將上映">即將上映</a></li>
            </ul>
          </li>
          <li><a class="menu-link" href="news.html" title="最新消息">最新消息</a></li>
          <li><a class="menu-link" href="group-ticket.html" title="業務專區">業務專區</a></li>
          <li>
          <div class="menu-link" >關於影城</div>
          <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="about.html" title="影城介紹">影城介紹</a></li>
              <li><a class="dropdown-item" href="contact.html" title="聯繫我們">聯繫我們</a></li>
            </ul>
          </li>
        </ul>
        <!-- class 'isUser' trigger login/out layout -->
        <div class="user-account">
          <div class="user">
            HELLO!<span class="user-name">Yick</span><span class="svg-icons i-person"></span><span
              class="svg-icons i-menu"></span>
          </div>
          <div class="account-sub">
            <hr />
            <a href="book-history.html" title="訂票查詢與取消">訂票查詢與取消</a>
            <a href="account.html" title="會員資料">會員資料</a>
            <a href="discount.html" title="會員優惠PLUS">會員優惠PLUS</a>
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
</header>`,
    },
    "bottom-footer": {
      template: `<footer><div class="footer"><img src="../image/01_index_01_logo.png" alt="百老匯影城LOGO" />
<div>
  <a href="" class="fb">
  <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.98753 19.2342H5.99466V9.6171H8.64737L9 6.2992H5.97062V4.63224C5.97062 3.7667 6.05877 3.30187 7.30098 3.30187H8.95993V0H6.2992C3.0935 0 1.98753 1.60285 1.98753 4.31968V6.31523H0V9.6171H1.98753V19.2342Z" fill="#141414"/>
  </svg>  
  </a>
  <a href="" class="ig">
  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5366 5.12738C9.83098 5.11371 9.12966 5.23889 8.47255 5.49652C8.16878 5.6153 7.8774 5.76141 7.6014 5.93231C7.28032 6.13141 6.98018 6.36383 6.70675 6.62701C5.67965 7.61481 5.08684 8.97003 5.05907 10.3949C5.03109 11.8198 5.57048 13.1976 6.55828 14.2247C7.54628 15.2518 8.90172 15.8448 10.3266 15.8726C11.7465 15.894 13.1178 15.3548 14.143 14.3721C15.1684 13.3895 15.765 12.0424 15.8041 10.6226V10.5C15.8203 9.79889 15.6962 9.10162 15.4386 8.44922C15.181 7.79681 14.7952 7.20294 14.3042 6.70221C13.8131 6.20105 13.2269 5.80371 12.5797 5.53326C11.9326 5.26324 11.2379 5.12482 10.5366 5.12738ZM10.5366 13.9739C9.65859 13.9291 8.82973 13.5552 8.21471 12.9272C7.59969 12.2991 7.24358 11.4626 7.21709 10.5837C7.1906 9.7049 7.49566 8.84869 8.0718 8.18475C8.64794 7.52081 9.45287 7.09784 10.3266 7C11.246 6.97864 12.137 7.32001 12.8068 7.95062C13.4765 8.58081 13.871 9.44983 13.9052 10.3688V10.5C13.9268 10.9542 13.8552 11.4083 13.6952 11.8339C13.6373 11.9877 13.5685 12.1364 13.4893 12.2795C13.3489 12.532 13.1761 12.7661 12.9747 12.9755C12.7762 13.1818 12.5528 13.3608 12.3099 13.5095C12.1667 13.5971 12.0168 13.674 11.8613 13.7394C11.4421 13.9154 10.9912 14.0043 10.5366 14V13.9739Z" fill="#141414"/>
  <path d="M16.9474 3.94904C16.7319 3.71448 16.4362 3.57007 16.119 3.54358C16.0214 3.547 15.9248 3.56238 15.8312 3.58887C15.7716 3.60596 15.7135 3.62775 15.6571 3.65381C15.5121 3.72089 15.382 3.81659 15.2743 3.93451C15.1666 4.05286 15.0838 4.19128 15.0306 4.3421C15.0009 4.42584 14.9808 4.51257 14.9703 4.60059C14.962 4.67065 14.9599 4.74158 14.9641 4.8125C14.9547 4.97144 14.9774 5.1308 15.0306 5.28119C15.084 5.43158 15.1671 5.56958 15.2747 5.68707C15.3826 5.80457 15.5127 5.89899 15.6578 5.96521C15.8028 6.03143 15.9596 6.06775 16.119 6.07245C16.4362 6.04596 16.7319 5.90112 16.9474 5.66699C17.163 5.43286 17.2826 5.1261 17.2826 4.8078C17.2826 4.4895 17.163 4.18317 16.9474 3.94904Z" fill="#141414"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4892 0H5.47905C4.74483 0.0102539 4.02001 0.165771 3.34645 0.458008C2.67269 0.749817 2.06365 1.17236 1.55416 1.70129C1.04488 2.23022 0.645405 2.85486 0.379017 3.53888C0.112415 4.22333 -0.0157584 4.95349 0.00154508 5.6875V15.3475C0.0171396 16.8297 0.608021 18.2481 1.64965 19.3026C2.69127 20.3574 4.10204 20.9658 5.58416 21H15.5941C17.088 20.9838 18.5143 20.3762 19.5609 19.3098C20.6072 18.2438 21.1883 16.8062 21.1767 15.3125V5.65247C21.156 4.15369 20.5491 2.72241 19.4859 1.66583C18.4229 0.609253 16.988 0.0111084 15.4892 0ZM19.1729 15.2775C19.1753 15.7893 19.0759 16.2969 18.8811 16.7703C18.6863 17.2437 18.3996 17.6739 18.0375 18.0358C17.6756 18.3981 17.2454 18.6848 16.772 18.8796C16.2984 19.0744 15.7911 19.1735 15.279 19.1714H5.65401C5.50853 19.1714 5.36348 19.1628 5.2195 19.1466C4.86232 19.1056 4.5122 19.0137 4.17958 18.8732C3.71282 18.6762 3.29049 18.3878 2.93715 18.0247C2.70964 17.7905 2.51375 17.5291 2.35418 17.2462C2.26595 17.0903 2.18862 16.9275 2.12304 16.7596C1.93889 16.2879 1.85131 15.7838 1.86541 15.2775V5.75757C1.85601 4.73987 2.24886 3.76019 2.9583 3.03088C3.66796 2.30157 4.63674 1.88202 5.65401 1.86365H15.279C16.3076 1.87732 17.2901 2.29175 18.0174 3.01935C18.7446 3.74652 19.1593 4.72919 19.1729 5.75757V15.2775Z" fill="#141414"/>
  </svg>
  
</a>
  <a href="" class="yt" >
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1802 18.4598C26.927 17.4603 27.4109 16.2895 27.588 15.0539C27.8868 13.6974 28.024 12.3104 27.9966 10.9218V10.1723C27.9625 8.73044 27.94 7.30022 27.8605 5.85836C27.7235 4.47249 27.3388 3.1232 26.7252 1.87315C26.4743 1.42246 26.1001 1.05215 25.6467 0.806024C24.893 0.410773 24.0565 0.200674 23.2056 0.192913C22.1271 0.0909133 21.0373 0.0909133 19.9588 0.0909133C19.4687 0.0909133 18.977 0.103663 18.485 0.11475C17.6663 0.133598 16.8461 0.147457 16.0307 0.0909133C15.662 0.0654132 15.2914 0.0471197 14.9203 0.0338153C13.9768 0 13.028 0 12.0909 0C11.3217 0 10.5612 0.0144131 9.80339 0.0288262C9.05141 0.0426849 8.30193 0.0565436 7.54968 0.0565436H5.27907C4.8026 0.0399131 4.32642 0.0720654 3.85771 0.152446C3.57112 0.201229 3.28757 0.267751 3.00845 0.352012C2.52977 0.539936 2.09572 0.82598 1.734 1.1913C1.55633 1.37091 1.39807 1.5677 1.26142 1.77835C1.11979 1.99677 1.00115 2.23015 0.908301 2.47517C0.599806 3.05225 0.432669 3.69418 0.420197 4.34831C0.399131 4.6582 0.327066 4.95865 0.255555 5.25578C0.17268 5.60114 0.0909132 5.94207 0.0909132 6.28964C0.125006 7.31131 0 8.32189 0 9.34355C0 12.0798 0 14.8499 1.13531 17.3589L1.40777 17.8356C1.60068 18.0856 1.66887 18.426 1.88451 18.6417C2.45771 19.0319 3.1329 19.2448 3.82612 19.2548C4.30009 19.3108 4.76518 19.3324 5.22723 19.354C5.51799 19.3673 5.80736 19.3806 6.09673 19.4022C7.32267 19.4704 8.58299 19.4022 9.82029 19.4022H13.51C14.7548 19.3645 15.9996 19.3795 17.2444 19.3945C18.997 19.4161 20.7493 19.4377 22.5019 19.3113C22.7715 19.2913 23.0557 19.2891 23.3445 19.2864C24.3814 19.2775 25.4787 19.2681 26.1802 18.4598ZM13.0901 6.55074C13.51 6.84566 13.953 7.08403 14.3956 7.33404C15.2925 7.84459 16.019 8.57135 17.0182 9.05973C17.7333 9.43447 18.4033 9.86575 19.0846 10.2859C19.0278 10.2632 17.5859 11.4667 17.1657 11.7616C16.7458 12.0571 16.2801 12.2727 15.8375 12.5222C15.3352 12.821 14.8471 13.1375 14.3593 13.4541C13.976 13.703 13.5932 13.9519 13.2035 14.1913C12.9765 14.3388 11.2735 15.1675 11.2735 15.1675V10.9556C11.2311 10.6158 11.2522 8.60849 11.2655 7.34457C11.2699 6.92049 11.2735 6.58012 11.2735 6.41437V5.27907C11.2735 5.3661 11.4639 5.45812 11.6574 5.55125C11.7666 5.60392 11.8769 5.65713 11.9548 5.71035C12.1402 5.84173 12.3126 5.97256 12.4884 6.10616C12.6782 6.25029 12.872 6.39719 13.0901 6.55074Z" fill="#141414"/>
  </svg>
  
  </a>
  <a href="" class="email">
  <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 11.1477L9.52276 8.79543L0.920518 0.159091C1.13125 0.0621509 1.35915 0.00807223 1.59097 0H23.4091C23.6842 0.0134959 23.9509 0.0997649 24.1818 0.25L13.2955 11.1477C13.1062 11.3344 12.8511 11.439 12.5853 11.439C12.3194 11.439 12.0643 11.3344 11.875 11.1477Z" fill="#141414"/>
<path d="M24.7955 0.863367C24.9252 1.10059 24.9954 1.36576 25 1.63609V16.5451C24.9967 16.8193 24.9265 17.0884 24.7955 17.3292L16.5568 9.09061L24.7955 0.863367Z" fill="#141414"/>
<path d="M15.9091 9.70427L13.8523 11.7611C13.7642 11.8527 13.6649 11.9329 13.5568 11.9997L13.4318 12.0679L13.2386 12.1588H13.0795L12.8977 12.2156H12.1818C12.1029 12.2051 12.0262 12.1821 11.9545 12.1474H11.8295L11.6136 12.0338L11.5114 11.977C11.4053 11.9073 11.3064 11.8274 11.2159 11.7384L9.17046 9.69291L0.886394 17.977C1.09079 18.0804 1.31642 18.1348 1.54548 18.1361H23.409C23.6811 18.1328 23.9475 18.0584 24.1818 17.9202L15.9091 9.70427Z" fill="#141414"/>
<path d="M0 1.63627C0.00174731 1.32395 0.0967125 1.01927 0.272726 0.761273L8.60225 9.09079L0.272726 17.4203C0.0967125 17.1623 0.00174731 16.8576 0 16.5453V1.63627Z" fill="#141414"/>
</svg>

  </a>
  <div class="s-font">
    公館百老匯影城 02-8663-6128 | 新竹百老匯影城 02-86636128
  </div>
  <div class="s-font">
    Copyright© 2022 Broadway Cinemas All Rights Reserved.
  </div>
</div></div>
  </footer>`,
    },
    "modal":{
      template:`  <!-- 登入modal -->
      <div class="modal" id="login">
        <div class="modal-content">
          <h2>WELCOME TO BROADWAY!</h2>
          <div class="modal-info">
            <form action="">
              <div class="row">
                <label for="loginid">帳號（電子郵件信箱）</label>
                <input type="email" id="loginid" placeholder="aaabbb@gmail.com">
              </div>
              <div class="row">
                <label for="loginpassword">登入密碼 <a href="" class="forgetpwd">
                    <span class="svg-icons i-notice-gray"></span> FORGOT PASSWORD</a></label>
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
                    <img src="../image/demo.png" alt="">
                    <a href=""><span class="svg-icons i-fresh"></span></a>
                  </div>
                </div>
              </div>
              <div class="row actionbtn">
                <button type="submit" class="login">LOGIN</button>
                <a href="#regist" class="xs-font">尚未申請帳號！馬上註冊!</a>
              </div>
            </form>
          </div>
          <a href="#" class="close-modal"><span class="svg-icons i-close"></span></a>
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
                <input type="email" id="registid" required="required" placeholder="aaabbb@gmail.com">
              </div>
              <div class="row">
                <label for="phone">聯絡電話<span class="required-icon">*<span
                      class="xs-font">將以此帳號作為日後訂單聯繫，請務必填寫正確</span></span></label>
                <input type="tel" id="phone" required="required" placeholder="091234567">
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
                <button type="submit" class="regist">REGISTER</button>
                <a href="#login" class="xs-font">已有帳號！馬上登入!</a>
              </div>
            </form>
          </div>
          <a href="#" class="close-modal"><span class="svg-icons i-close"></span></a>
        </div>
      </div>`
    }
  },
});
app.mount("#app");

$(function () {
  const $account = document.querySelector(".user-account");
  const $body = document.querySelector("body");
  const $hamberger = $("#hamberger-menu");
  const $landing = $(".landing");
  const $goup = $(".gotop");
  const $tab = $(".tab-item");
  const $collapse = $('.collapse .collapse-btn')
  const $eye = $(".i-eye");
  const $time = $(".time");
  const $datetime = $(".booktime");
  const $seatSelect = $(".seat");

  //偵測是否為手機裝置
  function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
  }

  //ladnding page animation
  if ($landing.length === 1) {
    $body.classList.add('no-scroll') //禁止在背景下滑動
    if (!isMobileDevice()) {
      $landing.on("wheel", function () {
        $landing.fadeOut(1000);
        setTimeout(function () { $body.classList.remove('no-scroll') }, 1100);
      });
    }
    if (isMobileDevice()) {
      $body.classList.remove('no-scroll')
      $('.welcome').css('display', 'none')
      setTimeout(function () { $landing.fadeOut(1200); }, 2300);
    }
  }

  // 限制手機版選單開啟時背景滑動
  $hamberger.on("click", function (e) {
    let isCheck = e.target.checked
    if (isMobileDevice()) {
      $body.classList.remove('no-scroll')
      if (isCheck) {
        $body.classList.add('no-scroll')
      }
    }
  })
  // account hover效果
  $account.addEventListener("mouseenter", () => {
    $account.classList.add("-active");
    $account.classList.remove("-leave");
  });
  $account.addEventListener("mouseleave", () => {
    $account.classList.remove("-active");
    $account.classList.add("-leave");
  });

  // 顯示gototop btn
  $(window).on("scroll", function () {
    let $scrollHeight = 300;
    let $windowTop = $(window).scrollTop()
    if ($windowTop > $scrollHeight) {
      $goup.addClass("show");
    } else {
      $goup.removeClass("show");
    }
  });
  // go top
  $goup.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // 分頁切換
  $tab.on("click", function (e) {
    let $this = $(this)
    $this.addClass("active");
    $this.siblings().removeClass("active");
    $(`.tab-content[data-id='${e.target.id}']`).siblings().addClass("hide");
    $(`.tab-content[data-id='${e.target.id}']`).removeClass("hide");
  });

  // show or hide PWD
  $eye.on("click", function (e) {
    let checkEyeOn = e.target.classList.contains('isText')
    if (checkEyeOn) {
      e.target.classList.remove("isText");
      $(this).next().attr("type", "password");
    }
    if (!checkEyeOn) {
      e.target.classList.add("isText");
      $(this).next().attr("type", "text");
    }
  });

  //訂票查詢訂單開啟/收起效果
  $collapse.on("click", function () {
    let $this = $(this)
    let $parentDiv = $this.closest('.ticket-state')
    $parentDiv.next().slideToggle()
    $this.siblings().removeClass("hide");
    $this.addClass("hide");
  })

  // 選取時刻表效果
  $datetime.on("click", function () {
    let $this = $(this)
    $this.siblings().removeClass("active");
    $this.addClass("active");
  });
  $time.on("click", function (e) {
    let $this = $(this)
    // e.preventDefault();
    if ($this.is('.disable') === false) {
      $this.siblings().removeClass("active");
      $this.addClass("active");
    }
  });

  // 座位表選取效果
  $seatSelect.on("click", function (e) {
    let $this = $(this)
    let $parentDiv = $this.parent()
    if ($parentDiv.is('.disable') || $parentDiv.is('.soldout')) {
      return;
    } else {
      $parentDiv.toggleClass("booked");
    }
  });
});
