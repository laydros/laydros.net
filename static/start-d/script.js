// Startpage theme management for start-d
class StartpageThemeManager {
    constructor() {
        this.themes = ['original', 'vscode', 'catppuccin', 'dracula'];
        this.currentTheme = 'original';
        this.storageKey = 'startpage-d-theme';
        this.init();
    }

    init() {
        // Load saved theme or use default
        const savedTheme = localStorage.getItem(this.storageKey) || 'original';
        this.setTheme(savedTheme);
        
        // Add event listeners to theme buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.target.dataset.theme;
                this.setTheme(theme);
            });
        });

        // Update active button state
        this.updateActiveButton();
    }

    setTheme(theme) {
        if (!this.themes.includes(theme)) return;
        
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.storageKey, theme);
        this.updateActiveButton();
    }

    updateActiveButton() {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === this.currentTheme);
        });
    }
}

// Time and greeting functionality
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning." : hours < 18 ? "Afternoon." : "Evening."}`;

window.addEventListener('load', (event) => {
    // Initialize theme manager
    new StartpageThemeManager();
    
    // Set up greeting and time
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    determineGreet(new Date().getHours());
    displayTime(time);
});

// Add smooth link hover effects and ripple animation
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for ripple animation first
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Debug: log when DOMContentLoaded fires
    console.log('DOMContentLoaded fired, looking for links...');
    
    // Add ripple effect on link clicks - use more specific selectors
    const linkSelectors = ['.tools a', '.dev a', '.nix a', '.media a', '.other a'];
    const allLinks = document.querySelectorAll(linkSelectors.join(', '));
    
    console.log('Found links:', allLinks.length);
    
    allLinks.forEach((link, index) => {
        console.log(`Adding ripple to link ${index}:`, link.textContent.trim());
        
        link.addEventListener('click', function(e) {
            console.log('Link clicked, creating ripple effect');
            
            // Prevent the link from navigating immediately
            e.preventDefault();
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Get computed accent color for ripple
            const computedStyle = getComputedStyle(document.documentElement);
            const accentColor = computedStyle.getPropertyValue('--accent').trim();
            
            console.log('Ripple accent color:', accentColor);
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: ${accentColor};
                opacity: 0.6;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.5s ease-out;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                z-index: 10;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            console.log('Ripple element added:', ripple);
            
            // Navigate to the link after ripple effect
            const href = this.href;
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
                if (href) {
                    window.location.href = href;
                }
            }, 500);
        });
    });
});

// Add keyboard shortcuts for theme switching
document.addEventListener('keydown', (e) => {
    // Only activate shortcuts if we're not focused on input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    // Ctrl/Cmd + 1,2,3,4 for theme switching
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const themeIndex = parseInt(e.key) - 1;
        const themes = ['original', 'vscode', 'catppuccin', 'dracula'];
        const theme = themes[themeIndex];
        
        if (theme) {
            const themeManager = new StartpageThemeManager();
            themeManager.setTheme(theme);
        }
    }
});

// Time display
setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}