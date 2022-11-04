const sertificatesSlider = new Swiper('.sertificates__slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sertificates__next',
      prevEl: '.sertificates__prev',
    },
    breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        610: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1180: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },
    
  });

  export default sertificatesSlider;