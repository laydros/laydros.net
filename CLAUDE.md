# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Zola-based static site generator project. Key commands:

- `zola serve` - Start development server with live reload at http://127.0.0.1:1111
- `zola build` - Build the static site to `public/` directory (optional - GitHub Actions handles deployment)
- `zola check` - Validate site structure and check links without building

## Project Architecture

### Structure
- `config.toml` - Zola configuration with site metadata and build settings
- `content/` - Markdown content files with TOML front matter
  - `_index.md` - Homepage content
  - `about.md` - About page
  - `docs/` - Documentation section with converted markdown files
    - `_index.md` - Documentation index page
    - `unix-notes.md`, `firefox.md`, `openbsd.md`, etc. - Converted documentation
- `templates/` - Tera templating engine templates
  - `base.html` - Base template with navigation, layout, and footer
  - `index.html` - Homepage template
  - `page.html` - General page template
  - `section.html` - Section listing template
- `static/` - Static assets (CSS, images, JavaScript, legacy docs)
  - `css/` - Stylesheets (primarily using sakura.css framework)
  - `img/` - Images and photos
  - `docs/` - Legacy HTML documentation and PDFs (preserved for backwards compatibility)

### Content Management
- Content uses TOML front matter (between `+++` markers)
- Required front matter: `title`, `template`
- Optional: `description` for SEO meta tags
- HTML can be embedded directly in Markdown files
- New pages: create `content/page-name.md` with proper front matter
- New docs: create `content/docs/topic-name.md` with `template = "page.html"`

### Content Creation Examples
```toml
+++
title = "Page Title"
template = "page.html"
description = "Optional SEO description"
+++

Markdown content here...
```

### Styling
- Uses sakura.css as the primary CSS framework
- Additional custom styles in `static/css/style.css`
- Responsive design with viewport meta tag
- Site-wide layout controlled by `templates/base.html`

### Deployment
- Automated deployment via GitHub Actions (`.github/workflows/zola.yml`)
- Push to `main` branch triggers build and deploy
- GitHub Actions builds with Zola and deploys to `gh-pages` branch
- GitHub Pages serves from `gh-pages` branch at https://laydros.github.io
- No manual building required - just push markdown changes to `main`

### Documentation Migration Notes
- Site migrated from static HTML to Zola with markdown documentation
- Core documentation (Unix notes, OpenBSD, Firefox, etc.) converted to markdown
- Legacy HTML files preserved in `static/docs/` for backwards compatibility
- Documentation index at `content/docs/_index.md` links to both markdown and legacy HTML content