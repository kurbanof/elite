let menuBtn = document.querySelector('.burger');
let menuList = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger__active');
  menuList.classList.toggle('menu__active');

});