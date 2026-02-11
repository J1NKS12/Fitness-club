const menuButton = document.querySelector('.menu__btn');
const headerNav = document.querySelector('.header-nav');
const menuCloseBtn = document.querySelector('.menu__close-btn'); // исправил селектор

menuButton.addEventListener('click', function() {
    headerNav.classList.add('header-nav__open')

});

menuCloseBtn.addEventListener('click', function() {
    headerNav.classList.remove('header-nav__open')

});