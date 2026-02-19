// Success and Error overlay functions
function showSuccessMessage(title, message) {
    const overlay = document.getElementById('successOverlay');
    if (!overlay) return;

    const titleEl = overlay.querySelector('h2');
    const messageEl = overlay.querySelector('p');

    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;

    overlay.classList.add('show');
    setTimeout(() => closeSuccessMessage(), 5000);
}

function closeSuccessMessage() {
    const overlay = document.getElementById('successOverlay');
    if (overlay) {
        overlay.classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showErrorMessage(title, message) {
    const overlay = document.getElementById('errorOverlay');
    if (!overlay) return;

    const titleEl = document.getElementById('errorTitle');
    const messageEl = document.getElementById('errorText');

    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;

    overlay.classList.add('show');
}

function closeErrorMessage() {
    const overlay = document.getElementById('errorOverlay');
    if (overlay) overlay.classList.remove('show');
}

// CONTACT FORM HANDLER
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.textContent;

            if (!navigator.onLine) {
                showErrorMessage(
                    'No Internet Connection',
                    'Please check your internet connection and try again.'
                );
                return;
            }

            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';

            try {
                const formData = new FormData(form);

                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                submitBtn.disabled = false;
                btnText.textContent = originalText;

                if (response.ok) {
                    showSuccessMessage(
                        'Message Sent!',
                        "Thank you for contacting us. We've received your message and will get back to you within 24 hours."
                    );
                    form.reset();
                } else {
                    throw new Error('Submission failed');
                }

            } catch (error) {
                console.error('Form error:', error);
                submitBtn.disabled = false;
                btnText.textContent = originalText;
                showErrorMessage(
                    'Submission Failed',
                    'There was an error submitting your form. Please try again or email us directly at hello@nxsys.com'
                );
            }
        });
    }

    // Close overlays on Escape key (contact overlays only)
    // NOTE: navbar Escape is handled by main.js
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSuccessMessage();
            closeErrorMessage();
        }
    });

    // Close on background click
    document.addEventListener('click', (e) => {
        if (e.target.id === 'successOverlay') closeSuccessMessage();
        if (e.target.id === 'errorOverlay') closeErrorMessage();
    });
});
// NOTE: Navbar scroll effect and mobile toggle are handled by main.js — no duplicates here.