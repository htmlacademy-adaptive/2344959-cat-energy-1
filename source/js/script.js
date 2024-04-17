let navHeader = document.querySelector('.header__nav nav');
let navButton = document.querySelector('.nav__button-header');

navHeader.classList.remove('header__nav nav--nojs');

navButton.addEventListener('click', function () {
  if (navHeader.classList.contains('header__nav nav--closed')) {
    navHeader.classList.remove('header__nav nav--closed');
    navHeader.classList.add('header__nav nav--opened');
  } else {
    navHeader.classList.add('header__nav nav--closed');
    navHeader.classList.remove('header__nav nav--opened');
  }
});


