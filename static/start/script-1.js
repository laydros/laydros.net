// Startpage theme management - isolated from main site
class StartpageThemeManager {
    constructor() {
        this.themes = ['vscode', 'catppuccin', 'dracula'];
        this.currentTheme = 'vscode';
        this.storageKey = 'startpage-theme';
        this.init();
    }

    init() {
        // Load saved theme or use default
        const savedTheme = localStorage.getItem(this.storageKey) || 'vscode';
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

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StartpageThemeManager();
});

// Add keyboard shortcuts for theme switching (only on startpage)
document.addEventListener('keydown', (e) => {
    // Only activate shortcuts if we're focused on the startpage (not in input fields)
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    // Ctrl/Cmd + 1,2,3 for theme switching
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '3') {
        e.preventDefault();
        const themeIndex = parseInt(e.key) - 1;
        const themes = ['vscode', 'catppuccin', 'dracula'];
        const theme = themes[themeIndex];
        
        if (theme) {
            const themeManager = new StartpageThemeManager();
            themeManager.setTheme(theme);
        }
    }
});

// Add smooth link hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect on link clicks
    document.querySelectorAll('.links-grid a').forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: var(--accent);
                opacity: 0.3;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.3s ease-out;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 300);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});