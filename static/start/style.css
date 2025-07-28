/* Startpage-specific CSS - completely isolated from main site */

/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Theme definitions */
:root[data-theme="vscode"] {
    --bg-primary: #1e1e1e;
    --bg-secondary: #252526;
    --text-primary: #cccccc;
    --text-secondary: #9d9d9d;
    --accent: #007acc;
    --accent-hover: #1177bb;
    --border: #3e3e42;
    --shadow: rgba(0, 0, 0, 0.3);
}

:root[data-theme="catppuccin"] {
    --bg-primary: #1e1e2e;
    --bg-secondary: #313244;
    --text-primary: #cdd6f4;
    --text-secondary: #a6adc8;
    --accent: #89b4fa;
    --accent-hover: #74c7ec;
    --border: #45475a;
    --shadow: rgba(0, 0, 0, 0.4);
}

:root[data-theme="dracula"] {
    --bg-primary: #282a36;
    --bg-secondary: #44475a;
    --text-primary: #f8f8f2;
    --text-secondary: #6272a4;
    --accent: #bd93f9;
    --accent-hover: #ff79c6;
    --border: #6272a4;
    --shadow: rgba(0, 0, 0, 0.5);
}

/* Base styles */
html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.title {
    font-size: 2rem;
    font-weight: 300;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.theme-switcher {
    display: flex;
    gap: 0.5rem;
}

.theme-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-btn:hover {
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--shadow);
}

.theme-btn.active {
    background: var(--accent);
    border-color: var(--accent);
}

/* Main content */
.main {
    flex: 1;
}

.links-grid {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.links-grid h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--accent);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
    text-transform: lowercase;
    letter-spacing: 0.5px;
    break-inside: avoid;
    break-after: avoid;
    margin-top: 0;
}

.links-grid h2 + ul {
    break-before: avoid;
}

.links-grid ul {
    list-style: none;
    margin: 0;
    margin-bottom: 2rem;
    break-inside: avoid;
}

.links-grid li {
    margin-bottom: 0.25rem;
}

.links-grid a {
    color: var(--text-primary);
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    display: block;
    transition: all 0.2s ease;
    font-size: 0.95rem;
    position: relative;
}

.links-grid a:hover {
    background-color: var(--bg-secondary);
    color: var(--accent-hover);
    transform: translateX(4px);
    box-shadow: 0 2px 8px var(--shadow);
}

.links-grid a:active {
    transform: translateX(2px);
}

/* Footer */
.footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    text-align: center;
}

.footer a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
}

.footer a:hover {
    color: var(--accent);
}

/* Responsive design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    .header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .title {
        font-size: 1.5rem;
    }
    
    .links-grid {
        columns: 1;
        column-gap: 0;
    }
    
    .theme-switcher {
        justify-content: center;
    }
}

@media (max-width: 1024px) and (min-width: 769px) {
    .links-grid {
        columns: 2;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0.5rem;
    }
    
    .links-grid h2 {
        font-size: 1.1rem;
    }
    
    .links-grid a {
        font-size: 0.9rem;
        padding: 0.4rem 0.6rem;
    }
}

/* Focus styles for accessibility */
.theme-btn:focus,
.links-grid a:focus,
.footer a:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}