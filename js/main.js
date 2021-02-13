// mobile menu
let menuBtn = document.querySelector('.burger');
let menuList = document.querySelector('.menu');
let bodyLock = document.querySelector('body');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger__active');
  menuList.classList.toggle('menu__active');
});

// trending tabs
document.querySelectorAll('.tabs-trigger__item').forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs-trigger__item').forEach(
      (child) => child.classList.remove('tabs-trigger__item_active')
    );

    document.querySelectorAll('.tabs-content__item').forEach(
      (child) => child.classList.remove('tabs-content__item_active')
    );

    item.classList.add('tabs-trigger__item_active');
    document.getElementById(id).classList.add('tabs-content__item_active');

  })
);

document.querySelector('.tabs-trigger__item').click();

// swiper-slider for feedback section
const swiper = new Swiper('.feedback__swiper-container', {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 1500,
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// swiper-slider for story
const storySwiper = new Swiper('.story__swiper-container', {
  loop: true,

  keyboard: {
    enabled: true,
  },


  // autoplay: {
  //   delay: 1500,
  // },

  // effect: 'coverflow',




  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

