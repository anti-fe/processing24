const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    grabCursor: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
    breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        960: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
    
  });

  export default reviewsSlider;