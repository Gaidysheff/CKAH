$(function () {
  $(".carousel__slider").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    draggable: false,
    waitForAnimate: false,

    // ----------------- Медиа-адаптация -------------------
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],
    // --------------------------------------------
  });

  $(".carousel__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".carousel__slider").slick("slickPrev");
  });
  $(".carousel__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".carousel__slider").slick("slickNext");
  });
});
