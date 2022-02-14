const swiper = new Swiper('.main__slider', {
  spaceBetween: 30,
  
  loop: true,
  navigation: {
    nextEl: '.main__slider-arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

const burger = document.querySelector('.menu-burger');
const closeMenu = document.querySelector('.header__menu-close');
const menuMobile = document.querySelector('.header');
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});

buttonModal.addEventListener('click', (evt) => {
  modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.classList.remove('active');
  }
})
