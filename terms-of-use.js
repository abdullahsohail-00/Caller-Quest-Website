document.addEventListener('DOMContentLoaded', function() {
    // Generate table of contents
    const toc = document.querySelector('#table-of-contents ul');
    const headings = document.querySelectorAll('main h2');
    
    headings.forEach((heading, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = heading.textContent;
        a.href = `#section-${index}`;
        li.appendChild(a);
        toc.appendChild(li);

        // Add ID to the heading
        heading.id = `section-${index}`;
    });

    // Smooth scrolling for table of contents links
    document.querySelectorAll('#table-of-contents a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight current section in table of contents
    window.addEventListener('scroll', () => {
        let currentSection = '';
        headings.forEach(heading => {
            const sectionTop = heading.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = heading.id;
            }
        });

        document.querySelectorAll('#table-of-contents a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Add animation to sections as they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('main > *').forEach(el => {
        observer.observe(el);
        el.classList.add('fade-in');
    });
});
