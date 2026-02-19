// ===== NX►SYS - Professional JavaScript =====

'use strict';

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
}

// ===== MOBILE MENU TOGGLE =====
// Works universally across ALL pages (index, about, services, careers, contact).
// index.html wraps the CTA in id="navCta"; other pages use class="btn-nav-wrapper".
// ALL CSS files show the mobile menu via .nav-links.open  (NOT .active).

const mobileToggle = document.getElementById('mobileToggle');
const navLinks     = document.getElementById('navLinks');
// Support both CTA wrapper patterns
const navCta = document.getElementById('navCta') || document.querySelector('.btn-nav-wrapper');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        mobileToggle.classList.toggle('active', isOpen);
        if (navCta) navCta.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileToggle.classList.remove('active');
            if (navCta) navCta.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// Close mobile menu when clicking outside the navbar
document.addEventListener('click', (e) => {
    if (!navbar) return;
    if (!navbar.contains(e.target) && navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navCta) navCta.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navCta) navCta.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// ===== COUNTER ANIMATION =====
const observerOptions = { threshold: 0.5, rootMargin: '0px' };

function animateCounter(element, target) {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            if (target && !isNaN(target)) {
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('[data-count]').forEach(counter => {
    counterObserver.observe(counter);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = navbar ? navbar.offsetHeight : 0;
            window.scrollTo({ top: target.offsetTop - navHeight - 20, behavior: 'smooth' });
        }
    });
});

// ===== SCROLL REVEAL (used by index.html) =====
(function () {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

// ===== FADE IN ANIMATION ON SCROLL =====
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

['.service-card', '.visual-card', '.feature-item', '.metric-card', '.trust-stat'].forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
});

// ===== ACTIVE NAVIGATION LINK =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}
setActiveNavLink();

// ===== METRIC BAR ANIMATION =====
const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.metric-fill');
            if (fill) {
                const targetWidth = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => { fill.style.width = targetWidth; }, 200);
            }
            metricObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metric-card').forEach(card => metricObserver.observe(card));

// ===== PAGE LOAD FADE IN =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== EXTERNAL LINKS =====
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===== CONSOLE BRANDING =====
console.log('%cNX►SYS Corporation', 'font-size:24px;font-weight:bold;color:#1A365D;');
console.log('%cProfessional Business Process Outsourcing', 'font-size:14px;color:#718096;');
console.log('%c' + window.location.hostname, 'font-size:12px;color:#C53030;');

// ===== DEBOUNCE UTILITY =====
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
window.addEventListener('scroll', debounce(() => {}, 100), { passive: true });