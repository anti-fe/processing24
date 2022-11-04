const partnersSlider = new Swiper('.partners__slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 115,
    loop: true,
    grabCursor: true,
  
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 60
        },
        568: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        610: {
          slidesPerView: 2,
          spaceBetween: 60
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 80
        },
        1180: {
          slidesPerView: 4,
          spaceBetween: 115
        }
      },
    
  });

  export default partnersSlider;