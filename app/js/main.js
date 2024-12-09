$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,

  });

  $(".works__inner").slick({
    // infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow-right.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 456,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });


  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });

  $('.header__drop-down.drop-down').on('click', function () {
    $(this).children('.drop-down__list').toggleClass('active');
    $(this).children('.drop-down__link').toggleClass('active');
  });


});
