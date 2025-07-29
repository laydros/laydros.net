// Startpage theme management for start
class StartpageThemeManager {
    constructor() {
        this.themes = ['original', 'vscode', 'catppuccin', 'dracula', 'tokyonight', 'ayu-light'];
        this.currentTheme = 'original';
        this.storageKey = 'startpage-d-theme';
        this.init();
    }

    init() {
        // Load saved theme or use default
        const savedTheme = localStorage.getItem(this.storageKey) || 'original';
        this.setTheme(savedTheme);

        // Add event listener to dropdown
        const select = document.getElementById('theme-select');
        if (select) {
            select.addEventListener('change', (e) => {
                const theme = e.target.value;
                this.setTheme(theme);
            });
        }

        // Update active option state
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
        const select = document.getElementById('theme-select');
        if (select) {
            select.value = this.currentTheme;
        }
    }
}

let themeManager;

// Time and greeting functionality
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning." : hours < 18 ? "Afternoon." : "Evening."}`;

window.addEventListener('load', (event) => {
    // Initialize theme manager
    themeManager = new StartpageThemeManager();

    // Set up greeting and time
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    determineGreet(new Date().getHours());
    displayTime(time);
});

// Add CSS for ripple animation
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

// Add ripple effect using event delegation
function addRippleEffect() {
    document.body.addEventListener('click', function (e) {
        // Check if clicked element is a link inside our containers
        const target = e.target;
        if (target.tagName === 'A' && target.closest('.tools, .dev, .nix, .media, .other')) {
            const ripple = document.createElement('span');
            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            // Get computed accent color for ripple
            const computedStyle = getComputedStyle(document.documentElement);
            const accentColor = computedStyle.getPropertyValue('--accent').trim();

            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: ${accentColor};
                opacity: 0.3;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.3s ease-out;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                z-index: 0;
            `;

            target.style.position = 'relative';
            target.style.overflow = 'hidden';
            target.appendChild(ripple);

            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 300);
        }
    });
}

// Set up ripple effect
addRippleEffect();

// Add keyboard shortcuts for theme switching
document.addEventListener('keydown', (e) => {
    // Only activate shortcuts if we're not focused on input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Ctrl/Cmd + 1-6 for theme switching
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const themeIndex = parseInt(e.key) - 1;
        const themes = ['original', 'vscode', 'catppuccin', 'dracula', 'tokyonight', 'ayu-light'];
        const theme = themes[themeIndex];

        if (theme) {
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
