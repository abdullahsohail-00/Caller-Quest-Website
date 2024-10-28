document.addEventListener('DOMContentLoaded', function() {
    // Animate sections as they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animationDelay = '0s';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('h2, p, .info-table').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive table rows
    const tableRows = document.querySelectorAll('.info-table tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            row.classList.toggle('highlight');
        });
    });

    // Back to top button
    const backToTopButton = document.createElement('a');
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.setAttribute('id', 'back-to-top');
    backToTopButton.setAttribute('href', '#');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Expandable sections
    const sections = document.querySelectorAll('h2');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const content = section.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});
