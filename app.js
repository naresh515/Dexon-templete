$(document).ready(function () {
  $(".slider-container").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  let progressPath = document.querySelector(".prgoress_indicator path");
  let progressBtn = $(".prgoress_indicator");
  let pathLength = progressPath.getTotalLength();
  let updateProgress = function () {
    let scroll = $(window).scrollTop();
    let height = $(document).height() - $(window).height();
    let progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  let offset = 50;
  let duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(progressBtn).addClass("active-progress");
    } else {
      $(progressBtn).removeClass("active-progress");
    }
  });
  $(progressBtn).on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  let sticky = $(".dexon_nav_manu");
  isScrolled = false;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      sticky.addClass("fixed");
    } else {
      sticky.removeClass("fixed");
    }
    if (scroll >= 4000 && isScrolled == false) {
      isScrolled = true;
      $(".counter").each(function () {
        var countValue = parseInt($(this).text());
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: countValue,
            },
            {
              duration: 3000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    }
  });

  $(".humberg2").click(function () {
    $(".humberg2").toggleClass("is-active");
    $(".menu-nav").toggleClass("nav-open");
  });
});
