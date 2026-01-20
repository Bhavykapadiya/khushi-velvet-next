document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Active Navigation Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            // Animate hamburger spans (Optional simple toggle effect)
            hamburger.children[0].style.transform = navLinksContainer.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
            hamburger.children[1].style.opacity = navLinksContainer.classList.contains('active') ? '0' : '1';
            hamburger.children[2].style.transform = navLinksContainer.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
        });
    }
});
