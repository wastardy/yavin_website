const userScroll = () => {
    const navbar = document.querySelector('.navbar');
    const toTopButton = document.querySelector('.to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 55) {
            navbar.classList.add('navbar-background');
            toTopButton.classList.add('show');
        }
        else {
            navbar.classList.remove('navbar-background')
            toTopButton.classList.remove('show');
        }
    });
}

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

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.querySelector('#to-top').addEventListener('click', scrollToTop)