const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 900 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

function smoothScroll(target,duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top - 80;
    var startPosition = window.pageYOffset;
    var startTime = null;
    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) {
            window.requestAnimationFrame(animation)       || 
            window.webkitRequestAnimationFrame(animation) || 
            window.mozRequestAnimationFrame(animation)    || 
            window.oRequestAnimationFrame(animation)      || 
            window.msRequestAnimationFrame(animation)     
        }
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var logo = document.querySelector('#navbar__logo');
var home = document.querySelector('#home-page');
var about = document.querySelector('#about-page');
var projects = document.querySelector('#projects-page');
var mywork = document.querySelector('.main__btn');

logo.addEventListener('click', function(){
    hideMobileMenu();
    smoothScroll('#home', 500);
});

home.addEventListener('click', function(){
    hideMobileMenu();
    smoothScroll('#home', 500);
});

about.addEventListener('click', function(){
    hideMobileMenu();
    smoothScroll('#about', 500);
});

projects.addEventListener('click', function(){
    hideMobileMenu();
    smoothScroll('#projects', 500);
});

mywork.addEventListener('click', function(){
    smoothScroll('#projects', 500);
});