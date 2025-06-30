// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Staggered animation for stat items
document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item');
    const aboutCard = document.querySelector('.about-card');
    
    // Initial state
    statItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
    
    aboutCard.style.opacity = '0';
    aboutCard.style.transform = 'translateY(30px)';
    aboutCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Animate on load
    setTimeout(() => {
        aboutCard.style.opacity = '1';
        aboutCard.style.transform = 'translateY(0)';
        
        statItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        });
    }, 300);
    
    // Hover effects for stat items
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});