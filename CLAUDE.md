# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Zola-based static site generator project. Key commands:

- `zola serve` - Start development server with live reload at http://127.0.0.1:1111
- `zola build` - Build the static site to `public/` directory
- `zola check` - Validate site structure and check links without building

## Project Architecture

### Structure
- `config.toml` - Zola configuration with site metadata and build settings
- `content/` - Markdown content files with front matter
  - `_index.md` - Homepage content
  - `about.md` - About page
  - `docs/` - Documentation section
- `templates/` - Tera templating engine templates
  - `base.html` - Base template with navigation and layout
  - `index.html` - Homepage template
  - `page.html` - General page template
  - `section.html` - Section listing template
- `static/` - Static assets (CSS, images, JavaScript, docs)
  - `css/` - Stylesheets (primarily using sakura.css framework)
  - `img/` - Images and photos
  - `docs/` - Static HTML documentation and archives

### Content Management
- Content uses TOML front matter (between `+++` markers)
- Required front matter: `title`, `template`
- Optional: `description` for SEO meta tags
- HTML can be embedded directly in Markdown files

### Styling
- Uses sakura.css as the primary CSS framework
- Additional custom styles in `static/css/style.css`
- Responsive design with viewport meta tag

### Deployment
- Static site hosted on GitHub Pages at https://laydros.github.io
- Built files go to `public/` directory (git ignored)
- `.nojekyll` file disables Jekyll processing on GitHub Pages