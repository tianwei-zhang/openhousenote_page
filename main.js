// Add this to your existing JavaScript or create a new file
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach((card) => {
        observer.observe(card);
    });
}); 