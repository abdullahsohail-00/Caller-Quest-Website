document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');

    // Simulated search results
    const results = [
        { name: "Melanie S Martin", age: 48, location: "Bacliff, TX", previousLocations: "Houston TX, Friendswood TX, League City TX", relatives: "Amy Nicole Martin, Darrell Wayne Martin" },
        { name: "Melanie S Martin", age: 48, location: "Bacliff, TX", previousLocations: "Houston TX, Friendswood TX, League City TX", relatives: "Amy Nicole Martin, Darrell Wayne Martin" },
        { name: "Melanie S Martin", age: 48, location: "Bacliff, TX", previousLocations: "Houston TX, Friendswood TX, League City TX", relatives: "Amy Nicole Martin, Darrell Wayne Martin" },
        { name: "Melanie S Martin", age: 48, location: "Bacliff, TX", previousLocations: "Houston TX, Friendswood TX, League City TX", relatives: "Amy Nicole Martin, Darrell Wayne Martin" }
    ];

    // Populate search results
    results.forEach((result, index) => {
        const resultCard = document.createElement('div');
        resultCard.className = 'card result-card mb-3 animate-in';
        resultCard.style.animationDelay = `${index * 0.1}s`;
        resultCard.innerHTML = `
            <div class="card-body">
                <h3 class="card-title">${result.name}</h3>
                <p>Age: ${result.age}</p>
                <p>Lives in ${result.location}</p>
                <p>Used to live in ${result.previousLocations}</p>
                <p>Related to ${result.relatives}</p>
                <button class="btn btn-primary view-details-btn">View Details >></button>
            </div>
        `;
        searchResults.appendChild(resultCard);
    });

    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Performing new search...');
    });

    // Handle "View Details" button clicks
    searchResults.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details-btn')) {
            alert('Viewing details...');
        }
    });

    // Animate elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.result-card').forEach(card => {
        animateOnScroll.observe(card);
    });
});
