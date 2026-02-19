/* ===============================================================
   CONTACTS PAGE - Enhanced JS
   =============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    initializeContactForm();
    initializeTrustBar();
    initializeCharCounter();
    initializeSmoothScroll();
});

/* ================= CONTACT FORM ================= */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    Utils.submitFormWithValidation(form, {
        validateFile: false,
        timeout: 30000,
        loadingText: 'Sending...',
        submitButtonSelector: '#contactSubmitBtn',
        onSuccess: () => {
            Utils.showSuccessMessage(
                'Message Sent!',
                "Thank you for reaching out. We've received your message and will get back to you within 24 hours."
            );
        },
        onError: (error) => {
            Utils.showErrorMessage(error.title, error.message);
        }
    });
}

/* ================= TRUST BAR ANIMATION ================= */
function initializeTrustBar() {
    const items = document.querySelectorAll('.trust-item');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const idx = Array.from(items).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
}

/* ================= CHARACTER COUNTER ================= */
function initializeCharCounter() {
    const textarea = document.getElementById('messageArea');
    const counter  = document.getElementById('charCount');
    if (!textarea || !counter) return;

    textarea.addEventListener('input', () => {
        const len = textarea.value.length;
        const max = parseInt(textarea.getAttribute('maxlength') || '1000');
        counter.textContent = `${len} / ${max}`;
        counter.classList.toggle('near-limit', len >= max * 0.85);
    });
}

/* ================= SMOOTH SCROLL ================= */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ================= GLOBAL FUNCTIONS ================= */
window.closeSuccessMessage = () => Utils.closeSuccessMessage();