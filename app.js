$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    items: 3,
    loop: true,
    center: false,
    rewind: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
        loop: false,
      },
      992: {
        items: 4,
        loop: false,
      },
    },
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    fallbackEasing: "swing",
    info: false,
    nestedItemSelector: false,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
    autoHeight: false,
    lazyLoad: false,
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
