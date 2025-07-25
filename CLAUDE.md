# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Zola-based static site generator project with full blog and search functionality. Key commands:

- `zola serve` - Start development server with live reload at http://127.0.0.1:1111
- `zola build` - Build the static site to `public/` directory (optional - GitHub Actions handles deployment)
- `zola check` - Validate site structure and check links (includes external link validation with skip list)

## Project Architecture

### Site Features
- **Blog system** with pagination, tags, RSS feeds, and post navigation
- **Full-text search** using JavaScript and Zola's search index
- **Documentation** with converted markdown and legacy HTML preservation
- **Gallery** for photos with simple markdown image display
- **SEO optimization** with sitemaps, meta tags, and structured URLs
- **Automated deployment** with link checking and validation

### Structure
- `config.toml` - Zola configuration with taxonomies, search, sitemap, and link checking
- `content/` - Markdown content files with TOML front matter
  - `_index.md` - Homepage content
  - `about.md` - About page
  - `gallery.md` - Photo gallery using static/pictures/
  - `search.md` - Search page with JavaScript functionality
  - `blog/` - Blog posts with date-based sorting and pagination
    - `_index.md` - Blog index page (paginate_by = 10, sort_by = "date")
    - `YYYY-MM-DD-post-title.md` - Individual blog posts with tags
  - `docs/` - Documentation section with converted markdown files
    - `_index.md` - Documentation index page linking markdown and legacy HTML
    - `unix-notes.md`, `firefox.md`, `openbsd.md`, etc. - Converted documentation
- `templates/` - Tera templating engine templates
  - `base.html` - Base template with navigation, layout, footer, and clearfix CSS
  - `index.html` - Homepage template
  - `page.html` - General page template
  - `section.html` - Section listing template with blog-specific pagination logic
  - `blog-page.html` - Individual blog post template with metadata and navigation
  - `search.html` - Search page template with JavaScript search functionality
  - `taxonomy_list.html` - Tag/category listing pages
  - `taxonomy_single.html` - Posts for specific tags
- `static/` - Static assets (CSS, images, JavaScript, legacy docs)
  - `css/style.css` - Custom CSS with navigation clearfix and layout improvements
  - `css/sakura.css` - Primary CSS framework
  - `img/` - Site images and headshots
  - `pictures/` - Gallery photos referenced by gallery.md
  - `docs/` - Legacy HTML documentation and PDFs (preserved for backwards compatibility)

### Content Management

#### Blog Posts
```toml
+++
title = "Post Title"
date = 2025-01-25
description = "Brief description for SEO"
[taxonomies]
tags = ["tag1", "tag2", "category"]
+++

Blog content here...
<!-- more -->  # Optional summary separator
```

#### Documentation Pages
```toml
+++
title = "Topic Title"
template = "page.html"
description = "Optional SEO description"
+++

Documentation content...
```

#### General Pages
```toml
+++
title = "Page Title"
template = "page.html"
description = "Optional SEO description"
+++

Page content...
```

### Key Configuration Features
- **Taxonomies**: Tags and categories with automatic taxonomy pages and feeds
- **Search**: `build_search_index = true` generates search index for JavaScript search
- **Sitemap**: `generate_sitemap = true` creates `/sitemap.xml`
- **Feeds**: `generate_feeds = true` creates RSS feeds for blog and taxonomies
- **Syntax Highlighting**: Monokai theme for code blocks
- **Link Checking**: External link validation with skip list for problematic domains

### Link Checker Configuration
```toml
[link_checker]
skip_prefixes = [
    "https://twitter.com/",
    "https://stackoverflow.com/",
    # ... other domains that fail due to bot protection or redirects
]
```

### Styling
- Uses sakura.css as the primary CSS framework for clean, minimal design
- Custom styles in `static/css/style.css` include navigation clearfix and responsive improvements
- Responsive design with viewport meta tag
- Site-wide layout controlled by `templates/base.html`
- Navigation includes: home, blog, docs, search, repo, about

### Deployment
- Automated deployment via GitHub Actions (`.github/workflows/zola.yml`)
- **Validation**: Runs `zola check` on all pushes and PRs to validate links and structure
- **Build**: Push to `main` branch triggers build with search index and sitemap generation
- **Deploy**: GitHub Actions builds with Zola and deploys to `gh-pages` branch
- **Serve**: GitHub Pages serves from `gh-pages` branch at https://laydros.github.io
- No manual building required - just push markdown changes to `main`

### Generated Files
- `/sitemap.xml` - Automatic sitemap for search engines
- `/rss.xml` - RSS feed for blog posts
- `/search_index.en.json` - Search index for JavaScript search functionality
- `/tags/` and `/categories/` - Automatic taxonomy pages

### Documentation Migration Notes
- Site migrated from static HTML to Zola with comprehensive feature additions
- Core documentation (Unix notes, OpenBSD, Firefox, etc.) converted to markdown
- Legacy HTML files preserved in `static/docs/` for backwards compatibility
- Documentation index at `content/docs/_index.md` links to both markdown and legacy HTML content
- Added full blog functionality with tags, pagination, and RSS feeds
- Implemented site-wide search and SEO improvements
- Fixed CSS layout issues with navigation clearfix
- Automated validation and deployment pipeline