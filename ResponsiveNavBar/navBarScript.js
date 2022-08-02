const burger = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const navLink = document.querySelectorAll('nav ul li');

burger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
burger.classList.toggle('menu-active');
});

