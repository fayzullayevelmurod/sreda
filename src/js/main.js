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
