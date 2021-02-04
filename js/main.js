let menuBtn = document.querySelector('.burger');
let menuList = document.querySelector('.menu');
let bodyLock = document.querySelector('body');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger__active');
  menuList.classList.toggle('menu__active');
});

// document.addEventListener('keydown', function (event) {
//   if (event.code == 'esc') {
//     menuBtn.removeClass('burger__active');
//   }
// });