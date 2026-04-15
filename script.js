// Contact form: client-side validation + simulated submission
(function () {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        status.classList.remove('error');
        status.textContent = '';

        const data = new FormData(form);
        const name = (data.get('name') || '').toString().trim();
        const email = (data.get('email') || '').toString().trim();
        const enquiry = (data.get('enquiry') || '').toString().trim();
        const message = (data.get('message') || '').toString().trim();

        if (!name || !email || !enquiry || !message) {
            e.preventDefault();
            status.classList.add('error');
            status.textContent = 'Please complete all required fields.';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            e.preventDefault();
            status.classList.add('error');
            status.textContent = 'Please enter a valid email address.';
            return;
        }

        // Validation passed — let the form POST natively to the configured action URL.
        status.textContent = 'Sending your enquiry…';
    });

    // Header shrink on scroll
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            header.style.padding = '0';
        }
    }, { passive: true });
})();
