let burger_btn = document.querySelector('.burger_btn');
let menu_close = document.querySelector('.menu_close');
let media_menu = document.querySelector('.media_menu');

burger_btn.addEventListener('click', () => {
  media_menu.classList.remove('-right-full')
  media_menu.classList.add('right-0');
})

menu_close.addEventListener('click', () => {
  media_menu.classList.add('-right-full');
  media_menu.classList.remove('right-0');
})


let swiper = new Swiper(".newsSwiper", {
  spaceBetween: 31,
  navigation: {
    nextEl: ".news-button-next",
    prevEl: ".news-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
