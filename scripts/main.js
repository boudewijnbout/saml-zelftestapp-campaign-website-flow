// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
})