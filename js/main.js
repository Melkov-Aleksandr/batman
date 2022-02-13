const swiper = new Swiper('.main__slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  
  loop: true,
  navigation: {
    nextEl: '.main__slider-arrow',
  },
});
