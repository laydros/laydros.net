# Jason Hamilton's Personal Website

Personal website and documentation built with [Zola](https://www.getzola.org/) static site generator.

## Live Site

Visit: [https://laydros.github.io](https://laydros.github.io)

## Development

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) static site generator

### Development Workflow

```bash
# Start development server with live reload
zola serve
# Site available at http://127.0.0.1:1111

# Build for production (optional - GitHub Actions handles this)
zola build
# Output goes to public/ directory

# Validate site structure and check links
zola check
```

### Adding Content

**New page:**
```bash
# Create content/new-page.md
+++
title = "Page Title"
template = "page.html"
+++

Your markdown content here...
```

**New documentation page:**
```bash
# Create content/docs/topic.md
+++
title = "Topic Name"
template = "page.html"
+++

Documentation content...
```

**New section:**
```bash
# Create content/section/_index.md
+++
title = "Section Name"
+++

Section intro content...
```

### Front Matter Requirements

Every `.md` file needs TOML front matter:
```toml
+++
title = "Required Title"
template = "page.html"  # or section.html for listings
description = "Optional SEO description"
+++
```

## Project Structure

```
├── config.toml              # Site configuration
├── content/                 # Markdown content
│   ├── _index.md           # Homepage
│   ├── about.md            # About page
│   └── docs/               # Documentation section
│       ├── _index.md       # Docs index page
│       ├── unix-notes.md   # Converted markdown docs
│       ├── firefox.md      # Browser configuration
│       └── ...             # Other documentation
├── templates/              # Tera HTML templates
│   ├── base.html           # Base layout with nav/footer
│   ├── index.html          # Homepage template
│   ├── page.html           # General page template
│   └── section.html        # Section listing template
├── static/                 # Static assets
│   ├── css/                # Stylesheets (sakura.css + custom)
│   ├── img/                # Images and photos
│   ├── js/                 # JavaScript files
│   └── docs/               # Legacy HTML docs and PDFs
└── .github/workflows/      # GitHub Actions deployment
    └── zola.yml            # Automated build and deploy
```

## Key Locations

- `content/` - All markdown content files
- `templates/base.html` - Site-wide layout, navigation, and footer
- `static/css/style.css` - Custom CSS overrides
- `config.toml` - Site metadata and build settings

## Styling

The site uses [sakura.css](https://oxal.org/projects/sakura/) as the primary CSS framework with custom overrides in `static/css/style.css`. The design is clean, minimal, and responsive.

## Deployment

The site uses GitHub Actions for automated deployment:

1. **Push to `main`** - Triggers the build workflow
2. **GitHub Actions** - Runs Zola build via `.github/workflows/zola.yml`
3. **Deploy to `gh-pages`** - Built site pushed to `gh-pages` branch
4. **GitHub Pages** - Serves the site from `gh-pages` branch

No manual building required - just push markdown changes to `main` and the site updates automatically.

## Documentation Migration

The site recently migrated from static HTML to Zola with markdown documentation. Core docs (Unix notes, OpenBSD guides, Firefox tweaks, etc.) have been converted to markdown for easier maintenance, while legacy HTML files remain in `static/docs/` for backwards compatibility.