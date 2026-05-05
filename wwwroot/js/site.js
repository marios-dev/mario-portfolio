// Scroll-triggered fade-in for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('visible');
            observer.unobserve(el.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-card, .skill-group, .edu-item, .about-facts .fact').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
    });
}, { passive: true });
