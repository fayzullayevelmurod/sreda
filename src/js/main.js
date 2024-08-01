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

let workbtn = document.querySelector('.work-btn');
let workbtntwo = document.querySelector('.work-btn-two');
let contentone = document.querySelector('.content-one');
let contenttwo = document.querySelector('.content-two');
let iconone = document.querySelector('.icon');
let icontwo = document.querySelector('.icon-two');

workbtn.addEventListener('click', () => {
  contentone.classList.remove('hidden');
  contenttwo.classList.add('hidden')
  iconone.classList.add('rotate-[-90deg]')
  icontwo.classList.remove('rotate-[-90deg]')
})

workbtntwo.addEventListener('click', () => {
  contenttwo.classList.remove('hidden');
  contentone.classList.add('hidden');
  iconone.classList.remove('rotate-[-90deg]')
  icontwo.classList.add('rotate-[-90deg]')
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
