const userScroll = () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 55) {
            navbar.classList.add('navbar-background');
        }
        else {
            navbar.classList.remove('navbar-background')
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);

document.addEventListener('click', (event) => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#nav-dropdown');

    if (
        navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        navbarToggler.click();
    }
});