

    $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '.left_arrow',
      nextArrow: '.right_arrow',
      autoplay: true,
      speed: 1000,
      easing: 'linear',
      fade: true,
      dots: true,
      responsive: [{
        breakpoint: 600,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
        }
    }]  
    });
  
