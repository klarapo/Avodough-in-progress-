const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('navbar__logo');
//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);


// active scroll
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home_page')
    const aboutMenu = document.querySelector('#about-page')
    const menuMenu = document.querySelector('#menu-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY

    //highlight na menu elemente
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        menuMenu.classList.remove('highlight');
        return ;
    } else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        menuMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 3345){
        menuMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 4000){
        contactMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        menuMenu.classList.remove('highlight');
        return;
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem){
        elem.classList.remove('highlight');
    }
};

//trigger
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//mobilni menu zatvori
const hiddenMobileMenu = document.querySelector('.is-active');
if(window.innerWidth <= 768 && menuBars){
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
}


menuLinks.addEventListener('click', hiddenMobileMenu);
navLogo.addEventListener('click', hiddenMobileMenu);
