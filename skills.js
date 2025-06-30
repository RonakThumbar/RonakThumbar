// Skills constellation and progress bar animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 500);
        });
    };
    
    // Intersection Observer for progress bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
            }
        });
    }, { threshold: 0.5 });
    
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        observer.observe(skillsGrid);
    }
    
    // Planet hover effects with tooltips
    const skillPlanets = document.querySelectorAll('.skill-planet');
    
    skillPlanets.forEach(planet => {
        const skillName = planet.getAttribute('data-skill');
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = skillName;
        tooltip.style.cssText = `
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 10;
        `;
        planet.appendChild(tooltip);
        
        planet.addEventListener('mouseenter', function() {
            tooltip.style.opacity = '1';
            this.querySelector('.planet-core').style.background = 'linear-gradient(45deg, #10b981, #3b82f6)';
        });
        
        planet.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            this.querySelector('.planet-core').style.background = 'linear-gradient(45deg, #6366f1, #a855f7)';
        });
    });
    
    // Staggered animation for skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Constellation interaction
    const constellation = document.querySelector('.skills-constellation');
    let isHovering = false;
    
    constellation.addEventListener('mouseenter', function() {
        isHovering = true;
        skillPlanets.forEach(planet => {
            planet.style.animationPlayState = 'paused';
        });
    });
    
    constellation.addEventListener('mouseleave', function() {
        isHovering = false;
        skillPlanets.forEach(planet => {
            planet.style.animationPlayState = 'running';
        });
    });
    
    // Add click effects to planets
    skillPlanets.forEach(planet => {
        planet.addEventListener('click', function() {
            const core = this.querySelector('.planet-core');
            core.style.transform = 'scale(1.3)';
            core.style.boxShadow = '0 0 50px rgba(99, 102, 241, 0.8)';
            
            setTimeout(() => {
                core.style.transform = 'scale(1)';
                core.style.boxShadow = 'none';
            }, 300);
        });
    });
});