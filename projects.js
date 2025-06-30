// Project card animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Staggered entrance animation
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Enhanced hover effects
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const icon = card.querySelector('.project-icon');
        
        card.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.borderColor = 'rgba(99, 102, 241, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
    
    // Parallax effect for project previews
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.project-preview');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Tech tag hover effects
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(99, 102, 241, 0.4)';
            this.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(99, 102, 241, 0.2)';
            this.style.transform = 'scale(1)';
        });
    });
});