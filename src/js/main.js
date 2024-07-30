let burger_btn = document.querySelector('.burger_btn');
let menu_close = document.querySelector('.menu_close');
let media_menu = document.querySelector('.media_menu');

burger_btn.addEventListener('click', () => {
  media_menu.classList.add('active')
})

menu_close.addEventListener('click', () => {
  media_menu.classList.remove('active')
})
