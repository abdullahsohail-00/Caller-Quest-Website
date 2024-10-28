document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Interactive phone numbers
    document.querySelectorAll('.list-unstyled li').forEach(item => {
        item.addEventListener('click', function() {
            alert(`Calling ${this.textContent}`);
        });
    });

    // Map interaction
    const map = document.getElementById('map');
    if (map) {
        map.addEventListener('click', function() {
            alert('Opening map view');
        });
    }

    // Form submission
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Performing new search');
        });
    }

    // Add more interactivity as needed
});