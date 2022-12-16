// navbar changes status on scroll

const navbarEl = document.querySelector('nav');

window.onscroll = ()=> {
    if(window.scrollY >= 60) {
        navbarEl.classList.add('bg-white', 'shadow-sm');
    } else {
        navbarEl.classList.remove('bg-white', 'shadow-sm');
    }
}