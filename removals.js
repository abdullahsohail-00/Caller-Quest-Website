document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const searchForm = document.querySelector('form');
    const agreeCheckbox = document.getElementById('agreeTerms');
    const beginRemovalBtn = document.querySelector('.btn-primary');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Search functionality would be implemented here.');
    });

    agreeCheckbox.addEventListener('change', function() {
        beginRemovalBtn.disabled = !this.checked;
    });

    beginRemovalBtn.addEventListener('click', function() {
        if (agreeCheckbox.checked) {
            alert('Removal process would start here.');
        }
    });

    // Animate list items on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('main ul li').forEach(item => {
        animateOnScroll.observe(item);
    });
});

