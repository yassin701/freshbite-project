const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav-link');


burger.addEventListener('click', () => {
    navLink.classList.toggle('active')
});