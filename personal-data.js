document.addEventListener('DOMContentLoaded', function() {
    const removalLink = document.querySelector('.removal-link');
    
    removalLink.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    removalLink.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Animate sections on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        animateOnScroll.observe(section);
    });
});