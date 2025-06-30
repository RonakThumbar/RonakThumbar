// Contact form and animations
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const inputs = document.querySelectorAll('input, textarea');
    const submitBtn = document.querySelector('.submit-btn');
    const socialPlanets = document.querySelectorAll('.social-planet');
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Animate button
            submitBtn.innerHTML = `
                <span class="btn-text">Message Launched!</span>
                <div class="btn-rocket">
                    <i class="fas fa-check"></i>
                </div>
            `;
            submitBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
            
            setTimeout(() => {
                alert('Thank you for your message! I\\'ll get back to you soon.');
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = `
                    <span class="btn-text">Launch Message</span>
                    <div class="btn-rocket">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <div class="btn-trail"></div>
                `;
                submitBtn.style.background = 'linear-gradient(45deg, #6366f1, #a855f7)';
            }, 2000);
        } else {
            // Shake animation for empty fields
            form.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                form.style.animation = '';
            }, 500);
        }
    });
    
    // Input focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Social planet interactions
    socialPlanets.forEach(planet => {
        planet.addEventListener('mouseenter', function() {
            this.style.animation = 'orbit 2s linear infinite';
        });
        
        planet.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
        
        planet.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: 50%;
                top: 50%;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                window.open(this.href, '_blank');
            }, 300);
        });
    });
    
    // Entrance animations
    const infoCard = document.querySelector('.info-card');
    const contactForm = document.querySelector('.contact-form');
    
    infoCard.style.opacity = '0';
    infoCard.style.transform = 'translateX(-30px)';
    infoCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    contactForm.style.opacity = '0';
    contactForm.style.transform = 'translateX(30px)';
    contactForm.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
    
    setTimeout(() => {
        infoCard.style.opacity = '1';
        infoCard.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            contactForm.style.opacity = '1';
            contactForm.style.transform = 'translateX(0)';
        }, 200);
    }, 300);
    
    // Floating animation for social planets
    socialPlanets.forEach((planet, index) => {
        planet.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite alternate`;
    });
});\n\n// CSS animations\nconst style = document.createElement('style');\nstyle.textContent = `\n    @keyframes shake {\n        0%, 100% { transform: translateX(0); }\n        25% { transform: translateX(-5px); }\n        75% { transform: translateX(5px); }\n    }\n    \n    @keyframes ripple {\n        to {\n            transform: scale(4);\n            opacity: 0;\n        }\n    }\n    \n    @keyframes orbit {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n    }\n    \n    @keyframes float {\n        0% { transform: translateY(0px); }\n        100% { transform: translateY(-10px); }\n    }\n`;\ndocument.head.appendChild(style);