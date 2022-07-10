$(document).ready(function () {
  var $element = $('.can__skills');
  let counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset() && $element.offset().top;

    if (scroll > offset && counter == 0) {
      $('.can__skills').addClass('can__skills-animate');
      counter = 1;
    }
  });

  var target = $('.ourProjects');
  var targetPos = target.offset() && target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      setTimeout(function () {
        $('.ourProjects__drag').removeClass("active");
      }, 2500);
    }
  });

});

$('.ourProjects__slider').slick({
  infinite: true,
  arrows: false,
  dots: false
});

$('.ourProjects__slider-arrow__next').on('click', function () {
  $('.ourProjects__slider').slick('slickNext');
});

$('.ourProjects__slider-arrow__prev').on('click', function () {
  $('.ourProjects__slider').slick('slickPrev');
});


$().ready(function () {
  setTimeout(function () {
    $(".fix_order").addClass("show");
  }, 30000);
});


$(".can__svg svg").on("click", function () {
  $('.can__svg').removeClass("active");
  $(this).parent().toggleClass("active");
});

$(window).scroll(function () {
  YaMapsShown = false;
  $(document).ready(function () {

    $(window).scroll(function () {
      if (!YaMapsShown) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
          showYaMaps();
          YaMapsShown = true;
        }
      }
    });

  });
  function showYaMaps() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A360b50f7f8ac4c24d0ea7e0120d305807b7e921c696157d1f26329593dcec19c&amp;width=100%25&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("YaMaps").appendChild(script);
  }
});




$(document).ready(function () {



  $(".menu.big ul li a").on("click", function () {
    $("#menus-2").toggleClass("show");
    $(".menuLi").removeClass("activeLi");
    $(".menuLi").removeClass("on");
    $(".menuLi").removeClass("off");
  });

  $(".menuLi1 a").on("click", function () {
    $(".menuLi").removeClass("activeLi");
    $(".menuLi").toggleClass("off");
    $(".menuLi1").toggleClass("activeLi on");
  });

  $(".menuLi2 a").on("click", function () {
    $(".menuLi").removeClass("activeLi");
    $(".menuLi").toggleClass("off");
    $(".menuLi2").toggleClass("activeLi on");
  });
  $(".menuLi3 a").on("click", function () {
    $(".menuLi").removeClass("activeLi");
    $(".menuLi").toggleClass("off");
    $(".menuLi3").toggleClass("activeLi on");
  });
  $(".menuLi4 a").on("click", function () {
    $(".menuLi").removeClass("activeLi");
    $(".menuLi").toggleClass("off");
    $(".menuLi4").toggleClass("activeLi on");
  });

  $('.call-modal').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    fixedContentPos: false
  });

  $('.thanks-modal').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    fixedContentPos: false
  });

  $('.popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.cases-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: false,
    touchMove: false,
    draggable: false,
    fade: false,
    lazyLoad: 'ondemand',
    pauseOnHover: false,
    variableWidth: true,
    swipeToSlide: true
  });

  $('.cases__arrow-right').on('click', function () {
    $('.cases-slider').slick('slickNext');
  });
  $('.cases__arrow-left').on('click', function () {
    $('.cases-slider').slick('slickPrev');
  });

  $('.caption').each(function () {
    $(this).find('li').each(function (i) {
      $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.tabs').find('.tab').removeClass('active').eq(i).addClass('active');
        return false;
      });
    });
  });


  const player = new Plyr('#player', {
    settings: []
  });

  $('.main-block .video a').on('click', function () {
    player.play();
    $(this).addClass('open-video').find('img').hide(0);
    $(this).next().show(0);
    return false;
  });


  $('#team-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    infinite: true,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    fade: false,
    pauseOnHover: false,
    swipeToSlide: true
  });

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    infinite: true,
    arrows: true,
    dots: false,
    touchMove: false,
    draggable: false,
    fade: false,
    lazyLoad: 'ondemand',
    pauseOnHover: false,
    variableWidth: true,
    swipeToSlide: true
  });

  $('.descriptionCase__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });



  var windowWidth = $(window).width();
  if (windowWidth > 991) $("#menu-1").addClass("show");
  else $("#menu-1").removeClass("show");
  if (windowWidth > 991) $("#submenu-1").addClass("show");
  else $("#submenu-1").removeClass("show");
  if (windowWidth > 991) $("#menus-1 ul li:first-child a").addClass("active");
  else $("#menus-1 ul li:first-child a").removeClass("active");
  if (windowWidth > 991) $('.service-block .menu ul li a').on('click', function () {
    var MenuOne = $('#menus-1');
    var MenuTwo = $('#menus-2');
    var MenuThree = $('#menus-3');

    var Menu = $(this)
    var MenuId = Menu.data('menu');
    var SubMenuId = Menu.data('submenu');

    if (MenuId == undefined) {

    } else {
      MenuOne.find('.active').removeClass('active');
      MenuTwo.find('.active').removeClass('active');
      MenuThree.find('.show').removeClass('show');
      MenuTwo.find('.show').removeClass('show');
      MenuTwo.find('#' + MenuId).addClass('show').find('li:first-child a').click();
    }

    if (SubMenuId == undefined) {

    } else {
      MenuTwo.find('.active').removeClass('active');
      MenuThree.find('.show').removeClass('show');
      MenuThree.find('#' + SubMenuId).addClass('show');
    }

    var InfoMenuThree = $(this).parents('.menu').prop('id');
    if (InfoMenuThree == 'menus-3') {

    } else {
      $(this).addClass('active');
    }

    return false;

  });
  else $('.service-block .menu ul li a').on('click', function () {
    var MenuOne = $('#menus-1');
    var MenuTwo = $('#menus-2');
    var MenuThree = $('#menus-3');

    var Menu = $(this);
    var MenuId = Menu.data('menu');
    var SubMenuId = Menu.data('submenu');

    if (MenuId == undefined) {

    } else {
      MenuOne.find('.active').removeClass('active');
      MenuTwo.find('.active').removeClass('active');
      MenuThree.find('.show').removeClass('show');
      MenuTwo.find('.show').removeClass('show');
      MenuTwo.find('#' + MenuId).addClass('show').find('li:first-child').click();
    }

    if (SubMenuId == undefined) {

    } else {
      MenuTwo.find('.active').removeClass('active');
      MenuThree.find('.show').removeClass('show');
      MenuThree.find('#' + SubMenuId).addClass('show');
    }

    var InfoMenuThree = $(this).parents('.menu').prop('id');
    if (InfoMenuThree == 'menus-3') {

    } else {
      $(this).addClass('active');
    }

    return false;

  });

  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 991) $("#menu-1").addClass("show");
    else $("#menu-1").removeClass("show");
    if (windowWidth > 991) $("#submenu-1").addClass("show");
    else $("#submenu-1").removeClass("show");
    if (windowWidth > 991) $("#menus-1 ul li:first-child a").addClass("active");
    else $("#menus-1 ul li:first-child a").removeClass("active");
    if (windowWidth > 991) $('.service-block .menu ul li a').on('click', function () {
      var MenuOne = $('#menus-1');
      var MenuTwo = $('#menus-2');
      var MenuThree = $('#menus-3');

      var Menu = $(this)
      var MenuId = Menu.data('menu');
      var SubMenuId = Menu.data('submenu');

      if (MenuId == undefined) {

      } else {
        MenuOne.find('.active').removeClass('active');
        MenuTwo.find('.active').removeClass('active');
        MenuThree.find('.show').removeClass('show');
        MenuTwo.find('.show').removeClass('show');
        MenuTwo.find('#' + MenuId).addClass('show').find('li:first-child a').click();
      }

      if (SubMenuId == undefined) {

      } else {
        MenuTwo.find('.active').removeClass('active');
        MenuThree.find('.show').removeClass('show');
        MenuThree.find('#' + SubMenuId).addClass('show');
      }

      var InfoMenuThree = $(this).parents('.menu').prop('id');
      if (InfoMenuThree == 'menus-3') {

      } else {
        $(this).addClass('active');
      }

      return false;

    });
    else $('.service-block .menu ul li a').on('click', function () {
      var MenuOne = $('#menus-1');
      var MenuTwo = $('#menus-2');
      var MenuThree = $('#menus-3');

      var Menu = $(this);
      var MenuId = Menu.data('menu');
      var SubMenuId = Menu.data('submenu');

      if (MenuId == undefined) {

      } else {
        MenuOne.find('.active').removeClass('active');
        MenuTwo.find('.active').removeClass('active');
        MenuThree.find('.show').removeClass('show');
        MenuTwo.find('.show').removeClass('show');
        MenuTwo.find('#' + MenuId).addClass('show').find('li:first-child').click();
      }

      if (SubMenuId == undefined) {

      } else {
        MenuTwo.find('.active').removeClass('active');
        MenuThree.find('.show').removeClass('show');
        MenuThree.find('#' + SubMenuId).addClass('show');
      }

      var InfoMenuThree = $(this).parents('.menu').prop('id');
      if (InfoMenuThree == 'menus-3') {

      } else {
        $(this).addClass('active');
      }

      return false;

    });


  });


  $(".main-slider .slick-active").prev().addClass("slick-unactive");
  $(".main-slider .slick-next.slick-arrow").on("click", function () {
    $(".main-slider .slick-slide").removeClass("slick-unactive");
    $(".main-slider .slick-active").prev().addClass("slick-unactive");
    $(".main-slider .slick-active").removeClass("slick-unactive");
  });

  $(".services .service-block .menu.big ul li a").on("click", function () {
    $("#menus-1").toggleClass("menu-show");
  });
  $(".menuLi a").on("click", function () {
    $("#menus-3").toggleClass("thirdMenu-active");
  });


  $(".play").on("click", function () {
    var video = document.querySelector("video");
    video.volume = 0.5;
    $("video").attr("src", "images/bg/showReal.mp4");
    video.muted = !video.muted;
    video.setAttribute("controls", "true");
    $(".videoplay").addClass("dn");
    $(".videoplay").removeClass("play");
    var elem = document.getElementById("video");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  });

  document.getElementById('block-call-input').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
  }

  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });

  $(".menu-btn").on("click", function () {
    $("header").toggleClass("active");
    $(".fix_order").toggleClass("dn");
    $("body").toggleClass("oh");
  });

  $(".faq__tab-loadMore").on("click", function () {
    $(".faq__tab ul li").toggleClass("tab__off");
    $(".faq__tab-loadMore").removeClass("tab__off");
    $(".faq__tab-return").removeClass("tab__off");
    $(".faq__tab").find("active").removeClass('active');
    $(".faq__tab-content#tab6").addClass("active");
    $(".faq__tab li:nth-child(6)").addClass("active");
    $(".faq__tab-return").addClass("actives");
    setTimeout(function () {
      $(".faq__tab-loadMore").addClass("firstClick");
    }, 600);
  });

  $(".faq__tab-return").on("click", function () {
    $(".faq__tab ul li").toggleClass("tab__off");
    $(".faq__tab-return").removeClass("actives");
    $(".faq__tab-return").removeClass("tab__off");
    $(".faq__tab-loadMore").removeClass("tab__off");
    $(".faq__tab-loadMore").removeClass("firstClick");
    $(".faq__tab .firstTab").removeClass('active');
    $(".faq__tab .secondTab").removeClass('active');
    $(".faq__tab .thirdTab").removeClass('active');
    $(".faq__tab .faq__tab-content").removeClass('active');
    $(".faq__tab-content#tab1").addClass("active");
    $(".faq__tab li:first-child").addClass("active");
  });

  $('body').on('click', '.firstClick', function () {
    $(".faq__tab ul li").addClass("tab__off");
    $(".tab__off2").removeClass("tab__off2 , tab__off");
    $(".faq__tab-return").addClass("returnClick");
    $(".faq__tab-return").removeClass("tab__off");
    $(".faq__tab").find("active").removeClass('active');
    $(".faq__tab-content#tab11").addClass("active");
    $(".faq__tab li:nth-child(11)").addClass("active");
    $(".faq__tab-loadMore").addClass("tab__off");
  });

  $('body').on('click', '.returnClick', function () {
    $(".faq__tab ul .firstTab").addClass("tab__off");
    $(".faq__tab ul .secondTab").removeClass("tab__off, tab__off2");
    $(".faq__tab ul .thirdTab").addClass("tab__off2");
    $(".faq__tab-return").removeClass("returnClick");
    $(".faq__tab-return").addClass("actives");
    $(".faq__tab .firstTab").removeClass('active');
    $(".faq__tab .secondTab").removeClass('active');
    $(".faq__tab .thirdTab").removeClass('active');
    $(".faq__tab .faq__tab-content").removeClass('active');
    $(".faq__tab").find("active").removeClass('active');
    $(".faq__tab-content#tab6").addClass("active");
    $(".faq__tab li:nth-child(6)").addClass("active");
    $(".faq__tab-loadMore").removeClass("tab__off");
  });

  $(".closeModal").on("click", function () {
    $(".index").removeClass("modalOpen");
    $(".wrapper").removeClass("modalOpen");
    $("footer").removeClass("modalOpen");
    $("body").removeClass("modalOpen");
    $("#thanks-modal").removeClass("active");
  });

  //САБМИТ ФОРМЫ В ФУТЕРЕ
  $(".footer-form").submit(function (event) {
    event.preventDefault();

    var data = $(this).serialize();

    $.ajax({
      url: "ajax/mail.php",
      type: "POST",
      data: data,
      success: function (response) {
        console.log(response);
        $(".index").addClass("modalOpen");
        $(".wrapper").addClass("modalOpen");
        $("footer").addClass("modalOpen");
        $("body").addClass("modalOpen");
        $("#thanks-modal").addClass("active");
      },
      error: function (xhr, status, error) {
        console.log(status);
      }
    });
  });

  //САБМИТ ФОРМЫ В ПОПАП
  $(".ajax_form").submit(function (event) {
    event.preventDefault();

    var data = $(this).serialize();

    $.ajax({
      url: "ajax/mail.php",
      type: "POST",
      data: data,
      success: function (response) {
        console.log(response);
        $('.modal-title').slideUp();
        $('.ajax_form').slideUp();
        $('.modal .thanks').slideDown(700);
      },
      error: function (xhr, status, error) {
        console.log(status);
      }
    });
  });


});



$(function () {
  var tab_m = $('.faq__tab');
  var tab_sel = tab_m.find('ul>li>a');
  tab_sel.on('click', function (e) {
    e.preventDefault();
    var t = $(this).parent();
    var path = $(this).attr('href');
    tab_sel.parent().removeClass('active');
    $(this).parents(".faq__tab ul").find("li").removeClass("active");
    $(this).parent("li").addClass("active");
    $('.faq__tab-content').not(path).removeClass('active');
    $(path).addClass('active');
  });

  $('.ourProjects__card-imidge').on('click', function () {
    $('.ourProjects').addClass('dark');
    $('.ourProjects__inner').addClass('dn');
    $('.ourProjects .ourProjects__slider-imidge').addClass('active');
    $('.ourProjects__slider-arrow').addClass('active');
  });
  $('.ourProjects__card-advertising').on('click', function () {
    $('.ourProjects').addClass('dark');
    $('.ourProjects__inner').addClass('dn');
    $('.ourProjects .ourProjects__slider-advertising').addClass('active');
    $('.ourProjects__slider-arrow').addClass('active');
  });
  $('.ourProjects__card-reportage').on('click', function () {
    $('.ourProjects').addClass('dark');
    $('.ourProjects__inner').addClass('dn');
    $('.ourProjects .ourProjects__slider-reportage').addClass('active');
    $('.ourProjects__slider-arrow').addClass('active');
  });
  $('.ourProjects__card-documental').on('click', function () {
    $('.ourProjects').addClass('dark');
    $('.ourProjects__inner').addClass('dn');
    $('.ourProjects .ourProjects__slider-documental').addClass('active');
    $('.ourProjects__slider-arrow').addClass('active');
  });

  $('.turnBack').on('click', function () {
    $('.ourProjects').removeClass('dark');
    $('.ourProjects__inner').removeClass('dn');
    $('.ourProjects .ourProjects__slider-wrapper').removeClass('active');
    $('.ourProjects__slider-arrow').removeClass('active');
    $('iframe').attr('src', '');
  });

  $('.ourProjects__card-imidge').on('click', function () {
    $('#Nornikel-iframe').attr('src', 'https://www.youtube.com/embed/j8KXoMZSQ1g');
  });
  $('.ourProjects__card-imidge').on('click', function () {
    $('#WASD-iframe').attr('src', 'https://www.youtube.com/embed/KqOWIUMy0kw');
  });
  $('.ourProjects__card-advertising').on('click', function () {
    $('#Alloy-iframe').attr('src', 'https://www.youtube.com/embed/0YaBbgbn4MY');
  });
  $('.ourProjects__card-advertising').on('click', function () {
    $('#IMStick-iframe').attr('src', 'https://www.youtube.com/embed/4DQelKTW1uw');
  });
  $('.ourProjects__card-documental').on('click', function () {
    $('#Liga-iframe').attr('src', 'https://www.youtube.com/embed/1HAow3KdVEs');
  });
  $('.ourProjects__card-reportage').on('click', function () {
    $('#HyperX-iframe').attr('src', 'https://www.youtube.com/embed/i0NphqdU6m4');
    $('#Streamfest-iframe').attr('src', 'https://www.youtube.com/embed/vstp42bg2w0');
  });

  $(".ourProjects").on('click', '[href*="#"]', function (e) {
    var offset = 180;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top + offset }, 1000);
    e.preventDefault();
  });

});


$(function () {
  AOS.init({
    duration: 800,
    offset: -50,
    once: true,
    anchorPlacement: 'bottom-bottom'
  });
});

$(document).ready(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".willPlay__snitch");
    if (windowWidth < 992) {
      elem.addClass('willPlay__snitch-mobile');
      elem.children().remove('willPlay__snitch-hint');
    }
    else {
      elem.removeClass('willPlay__snitch-mobile');
    }
  }

  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });

  $('.willPlay__inner').on('mouseover', '.willPlay__snitch', function () {
    $(this).css('left', '33%');
    $(this).children('.willPlay__snitch-hint').removeClass('first-hint');
    setTimeout(function () {
      $('.willPlay__snitch').addClass('hover-benq');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-benq', function () {
    $(this).css('left', '45%');
    $(this).css('top', '55%');
    $(this).children('.willPlay__snitch-hint').addClass('second-hint');
    setTimeout(function () {
      $('.hover-benq').addClass('hover-nornicel');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-nornicel', function () {
    $(this).css('left', '87%');
    $(this).css('top', '55%');
    setTimeout(function () {
      $('.hover-nornicel').addClass('hover-wolf');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-wolf', function () {
    $(this).css('left', '87%');
    $(this).css('top', '25px');
    $(this).children('.willPlay__snitch-hint').removeClass('second-hint');
    setTimeout(function () {
      $('.hover-wolf').addClass('hover-chudo');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-chudo', function () {
    $(this).css('left', '24%');
    $(this).css('top', '55%');
    setTimeout(function () {
      $('.hover-chudo').addClass('hover-w');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-w', function () {
    $(this).css('left', '18%');
    $(this).css('top', '25px');
    $(this).children('.willPlay__snitch-hint').addClass('third-hint');
    setTimeout(function () {
      $('.hover-w').addClass('hover-hyperX');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-hyperX', function () {
    $(this).css('left', '-40px');
    $(this).css('top', '55%');
    setTimeout(function () {
      $('.hover-hyperX').addClass('hover-dostaevskiy');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-dostaevskiy', function () {
    $(this).css('left', '50%');
    $(this).css('top', '25px');
    $(this).children('.willPlay__snitch-hint').removeClass('third-hint');
    setTimeout(function () {
      $('.hover-dostaevskiy').addClass('hover-aorus');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-aorus', function () {
    $(this).css('left', '67%');
    $(this).css('top', '55%');
    setTimeout(function () {
      $('.hover-aorus').addClass('hover-rostelecom');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-rostelecom', function () {
    $(this).css('left', '67%');
    $(this).css('top', '25px');
    setTimeout(function () {
      $('.hover-rostelecom').addClass('hover-parimatch');
    }, 300);
    $(this).addClass('hover-parimatch');
  });
  $('.willPlay__inner').on('mouseover', '.hover-parimatch', function () {
    $(this).css('left', '67%');
    $(this).css('top', '25px');
    setTimeout(function () {
      $('.hover-parimatch').addClass('hover-zowie');
    }, 600);
  });
  $('.willPlay__inner').on('mouseover', '.hover-zowie', function () {
    $(this).css('left', '-40px');
    $(this).css('top', '25px');
    setTimeout(function () {
      $('.willPlay__snitch').removeClass().addClass('willPlay__snitch');
      $(this).addClass('hover-benq');
    }, 600);
  });
});

$(function () {

  $(".descriptionCase__slider-item-description-title.first ").on("click", function () {
    $('.descriptionCase__slider-item-description').children().removeClass("active");
    $('.descriptionCase__slider-item-description-text.first').addClass("active");
    $('.descriptionCase__slider-item-description-title.first').addClass("active");
  });

  $(".descriptionCase__slider-item-description-title.second ").on("click", function () {
    $('.descriptionCase__slider-item-description').children().removeClass("active");
    $('.descriptionCase__slider-item-description-text.second').addClass("active");
    $('.descriptionCase__slider-item-description-title.second').addClass("active");
  });

  $(".descriptionCase__slider-item-description-title.third ").on("click", function () {
    $('.descriptionCase__slider-item-description').children().removeClass("active");
    $('.descriptionCase__slider-item-description-text.third').addClass("active");
    $('.descriptionCase__slider-item-description-title.third').addClass("active");
  });

});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".main-slider__item-right img");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.main-slider__item-right').find('.actives').addClass("dn");
      $('.main-slider__item-right').find('.active').addClass("dn");
    }
  });
});


$('.main-slider__item-inner').click(function () {

});


$(".main-slider__item-right__instagram-plus-1").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__instagram-plus-1").addClass('actives');
  $(".main-slider__item-right__twitch-plus-2").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__instagram-plus-hint.hint-1').addClass("active");
  $('.main-slider__item-right__twitch-plus-hint.hint-2').addClass("active");
});
$(".main-slider__item-right__instagram-plus-2").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__instagram-plus-2").addClass('actives');
  $(".main-slider__item-right__twitch-plus-3").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__instagram-plus-hint.hint-2').addClass("active");
  $('.main-slider__item-right__twitch-plus-hint.hint-3').addClass("active");
});
$(".main-slider__item-right__instagram-plus-3").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__instagram-plus-3").addClass('actives');
  $(".main-slider__item-right__twitch-plus-1").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__instagram-plus-hint.hint-3').addClass("active");
  $('.main-slider__item-right__twitch-plus-hint.hint-1').addClass("active");
});
$(".main-slider__item-right__instagram-minus-1").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__instagram-minus-1").addClass('actives');
  $(".main-slider__item-right__twitch-minus-1").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__instagram-minus-hint.hint-1').addClass("active");
  $('.main-slider__item-right__twitch-minus-hint.hint-1').addClass("active");
});
$(".main-slider__item-right__instagram-minus-2").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__instagram-minus-2").addClass('actives');
  $(".main-slider__item-right__twitch-minus-2").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__instagram-minus-hint.hint-2').addClass("active");
  $('.main-slider__item-right__twitch-minus-hint.hint-2').addClass("active");
});


$(".main-slider__item-right__twitch-plus-1").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__twitch-plus-1").addClass('actives');
  $(".main-slider__item-right__instagram-plus-3").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__twitch-plus-hint.hint-1').addClass("active");
  $('.main-slider__item-right__instagram-plus-hint.hint-3').addClass("active");
});
$(".main-slider__item-right__twitch-plus-2").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__twitch-plus-2").addClass('actives');
  $(".main-slider__item-right__instagram-plus-1").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__twitch-plus-hint.hint-2').addClass("active");
  $('.main-slider__item-right__instagram-plus-hint.hint-1').addClass("active");
});
$(".main-slider__item-right__twitch-plus-3").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__twitch-plus-3").addClass('actives');
  $(".main-slider__item-right__instagram-plus-2").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__twitch-plus-hint.hint-3').addClass("active");
  $('.main-slider__item-right__instagram-plus-hint.hint-2').addClass("active");
});
$(".main-slider__item-right__twitch-minus-1").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__twitch-minus-1").addClass('actives');
  $(".main-slider__item-right__instagram-minus-1").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__twitch-minus-hint.hint-1').addClass("active");
  $('.main-slider__item-right__instagram-minus-hint.hint-1').addClass("active");
});
$(".main-slider__item-right__twitch-minus-2").on("click", function () {
  $('.main-slider__item-right').find('.actives').addClass("dn");
  $(".main-slider__item-right__twitch-minus-2").addClass('actives');
  $(".main-slider__item-right__instagram-minus-2").addClass('actives');
  $('.main-slider__item-right').find('.active').addClass("dn");
  $('.main-slider__item-right__twitch-minus-hint.hint-2').addClass("active");
  $('.main-slider__item-right__instagram-minus-hint.hint-2').addClass("active");
});

$(".can__svg:first-child svg").on("click", function () {
  $('.can__skills').removeClass("active");
  $('.can__skills:first-child').toggleClass("active");
});

$(".can__svg:nth-child(2) svg").on("click", function () {
  $('.can__skills').removeClass("active");
  $('.can__skills:nth-child(2)').toggleClass("active");
});

$(".can__svg:nth-child(3) svg").on("click", function () {
  $('.can__skills').removeClass("active");
  $('.can__skills:nth-child(3)').toggleClass("active");
});



$('.ourProjects__inner').slick({
  infinite: true,
  dots: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: false,
  mobileFirst: true,
  appendDots: '.ourProjects__dots',
  responsive: [
    {
      breakpoint: 991,
      settings: "unslick"
    }
  ]
});



function rand(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var classBox = ["utteranceOne", "utteranceTwo"], arrL = classBox.length - 1;

$(".ourProjects__arrow").hover(
  function () {
    var $this = $(this), cl = classBox[rand(0, arrL)];

    $this.addClass(cl);
  },
  function () {
    $(this).removeClass(classBox.join(" "));
  }
);

$(function () {
  if ($(window).width() < 991) {
    $('.ourProjects__drag').attr('draggable', 'false');
    $('.ourProjects__arrow').remove();
    $('.ourProjects__inner').removeAttr('id');
  }
  $(".main-slider").on("click", ".slick-next.slick-arrow", function () {
    $(".main-slider__item-right img").removeClass('actives dn');
    $(".main-slider__item-right .hint").removeClass('active dn');
  });
});