const burger = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const navLink = document.querySelectorAll('nav ul li');
const button = document.querySelector('.button');

burger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
// navLink.forEach((el, index) => {
//         el.style.animation = `navLinks 0.5s ease forward ${index / 7 + 0.3}s`
//     });
burger.classList.toggle('menu-active');
});
button.addEventListener('click', (e) => {
    document.body.classList.toggle('dark');
})

