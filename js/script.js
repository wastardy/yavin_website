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

const incrementStats = () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const number = +counter.innerText;

            const increment = target / 200; // increment speed

            if (number < target) {
                counter.innerText = Math.ceil(number + increment);
                
                // call it recusively
                setTimeout(updateCounter, 1);
            }
            else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

document.addEventListener('DOMContentLoaded', incrementStats);

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