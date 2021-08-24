$(function(){
  $('.partners__slider').slick({
    arrows:false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll:1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 594,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
})