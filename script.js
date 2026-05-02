// Generate animated stars for universe theme
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 2 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Smooth scroll for any internal links (though none yet)
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add subtle parallax effect on scroll
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    smoothScroll();
    parallaxEffect();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});