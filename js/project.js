const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

const navItems = menu.querySelectorAll('li');
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    });
};
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    });
});

const skillItems = document.querySelectorAll('section.skills .skill');
skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    });
});
// Common reveal options to create reveal animations
ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100
});
// Target elements, and specify options to create reveal animations
ScrollReveal().reveal('nav .container a', { delay: 700, origin: 'left' });
ScrollReveal().reveal('nav .container ul', { delay: 500, origin: 'top' });

ScrollReveal().reveal('.landing .socials', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.landing .info h1, .landing .info h3', { delay: 1200, origin: 'top' });
ScrollReveal().reveal('.landing .info p', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.landing .info', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.landing .profile-area', { delay: 1000, origin: 'bottom' });

ScrollReveal().reveal('.about h1', { delay: 1000, origin: 'top' });
ScrollReveal().reveal('.about .image', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.about .info', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.about .info p', { delay: 1200, origin: 'right' });
ScrollReveal().reveal('.about .info .read-more-content p', { delay: 1100, origin: 'left' });
ScrollReveal().reveal('.about .info .read-more', { delay: 900, origin: 'top' });
ScrollReveal().reveal('.about .info .read-more', { delay: 900, origin: 'top' });

ScrollReveal().reveal('.skills h1', { delay: 1000, origin: 'top' });
ScrollReveal().reveal('.skills .skill', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.skills .left', { delay: 1100, origin: 'left' });

ScrollReveal().reveal('.services h1', { delay: 1000, origin: 'top' });
ScrollReveal().reveal('.services .service', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.services .service span', { delay: 1200, origin: 'top' });
ScrollReveal().reveal('.services .service h3', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.services .service p', { delay: 800, origin: 'bottom' });

ScrollReveal().reveal('.recent-work h4', { delay: 1400, origin: 'bottom' });
ScrollReveal().reveal('.recent-work h1', { delay: 800, origin: 'right' });
ScrollReveal().reveal('.recent-work .projects', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.recent-work .projects .project .thubmnail img', { delay: 900, origin: 'top' });
ScrollReveal().reveal('.recent-work .projects .project h2', { delay: 1200, origin: 'left' });
ScrollReveal().reveal('.recent-work .projects .project p', { delay: 1400, origin: 'right' });
ScrollReveal().reveal('.recent-work .projects .project .action', { delay: 900, origin: 'bottom' });

ScrollReveal().reveal('.contact h1', { delay: 1000, origin: 'top' });
ScrollReveal().reveal('.contact p', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.contact form', { delay: 1300, origin: 'bottom' });

ScrollReveal().reveal('footer h3', { delay: 700, origin: 'top' });
ScrollReveal().reveal('footer ul', { delay: 1000, origin: 'bottom' });
ScrollReveal().reveal('footer .socials', { delay: 500, origin: 'right' });
ScrollReveal().reveal('footer .copyright', { delay: 1000, origin: 'bottom' });