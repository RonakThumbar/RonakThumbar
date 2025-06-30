// Loading Screen Handler
document.addEventListener('DOMContentLoaded', function() {
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">RT</div>
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading Portfolio...</div>
        </div>
    `;
    
    // Insert at beginning of body
    document.body.insertBefore(loadingScreen, document.body.firstChild);
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000); // Show loading for at least 1 second
    });
});