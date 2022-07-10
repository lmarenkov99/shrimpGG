$(document).on('change keyup', '.required', function (e) {
  let Disabled = true;
  $(".required").each(function () {
    let value = this.value
    if ((value) && (value.trim() != '')) {
      Disabled = false;
    } else {
      Disabled = true;
      return false;
    }
  });

  if (Disabled) {
    $('#first').prop("disabled", true);
  } else {
    $('#first').prop("disabled", false);
  }

});

$(document).ready(function () {

  let selector = document.querySelectorAll('input[type="tel"]'),
    im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  $(".banner__item input:checkbox").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

  $('.banner__item input').click(function (e) {
    $(this).parent('.banner__item').toggleClass('active').siblings().removeClass('active');
    $(this).parent('.banner__item').toggleClass('hatchDn').siblings().addClass('hatchDn');
    if ($(".banner__item").hasClass("active")) {
      $(this).parent('.banner__item').find('video').trigger('play');
      $(".banner__item").removeClass('unactiveBanner');
    }
  });


  $('.banner__item').mouseover(function (e) {
    $(this).siblings().addClass('unactiveBanner');
    if ($(".banner__item").hasClass("active")) {
      $(".banner__item").removeClass('unactiveBanner');
    }
  });
  $('.banner__item').mouseout(function (e) {
    $('.banner__item').removeClass('unactiveBanner');
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
  });

  $('.form__services__tabs .form__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.form__services__tabs').find('.form__tab-item').removeClass('form__active-tab').hide();
    $('.form__services__tabs .form__tabs').find('.form__tab').removeClass('form__active');
    $(this).addClass('form__active');
    $('#' + id).addClass('form__active-tab').fadeIn();
    return false;
  });
  let contacts = document.querySelector('.form-contacts'),
    services = document.querySelector('.services'),
    yourBudget = document.querySelector('.your-budget');


  let btn = document.querySelector('#first').addEventListener('click', function () {
    event.preventDefault();
    contacts.style.display = 'none';
    services.style.display = 'block';
  });
  let btnSecond = document.querySelector('#second').addEventListener('click', function () {
    event.preventDefault();
    services.style.display = 'none';
    yourBudget.style.display = 'block';
  });
  let btnPrev = document.querySelector('.btn-prev').addEventListener('click', function () {
    event.preventDefault();
    services.style.display = 'none';
    contacts.style.display = 'block';
  });
  let btnPrevSecond = document.querySelector('#seconds-prev').addEventListener('click', function () {
    event.preventDefault();
    yourBudget.style.display = 'none';
    services.style.display = 'block';
  });

  document.getElementById('tel').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
  };

  $('.call-modal').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });


  $(".closeModal").on("click", function () {
    $(".index").removeClass("modalOpen");
    $(".wrapper").removeClass("modalOpen");
    $("footer").removeClass("modalOpen");
    $("body").removeClass("modalOpen");
    $("#thanks-modal").removeClass("active");
  });

  //	САБМИТ ФОРМЫ
  $(".main__form").submit(function (event) {
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