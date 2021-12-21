// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-menu-desktop');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
})