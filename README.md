# Jason Hamilton's Personal Website

Personal website, blog, and documentation built with [Zola](https://www.getzola.org/) static site generator.

## Live Site

Visit: [https://laydros.github.io](https://laydros.github.io)

## Features

- **Blog** - Full-featured blog with pagination, tags, and RSS feeds
- **Documentation** - Technical notes and tutorials in markdown
- **Gallery** - Simple photo gallery
- **Search** - Site-wide content search
- **Startpage** - Personal browser startpage with theme switching and organized links
- **Responsive Design** - Mobile-friendly sakura.css theme
- **Automated Deployment** - GitHub Actions with link checking
- **SEO Ready** - Sitemaps, meta tags, and structured data

## Development

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) static site generator
- Or run `scripts/setup_zola.sh` to download a prebuilt binary

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

**New blog post:**
```bash
# Create content/blog/YYYY-MM-DD-post-title.md
+++
title = "Post Title"
date = 2025-01-25
description = "Brief description"
[taxonomies]
tags = ["tag1", "tag2"]
+++

Your content here...
<!-- more -->  # Optional summary separator
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

**New general page:**
```bash
# Create content/page-name.md
+++
title = "Page Title"
template = "page.html"
description = "Optional SEO description"
+++

Page content...
```

### Front Matter Requirements

Every `.md` file needs TOML front matter:
```toml
+++
title = "Required Title"
template = "page.html"  # or section.html for listings
description = "Optional SEO description"
date = 2025-01-25      # Required for blog posts
[taxonomies]           # Optional for blog posts
tags = ["tag1", "tag2"]
+++
```

## Project Structure

```
├── config.toml              # Site configuration with features enabled
├── content/                 # Markdown content
│   ├── _index.md           # Homepage
│   ├── about.md            # About page
│   ├── gallery.md          # Photo gallery
│   ├── search.md           # Search page
│   ├── start/              # Personal startpage
│   │   └── _index.md       # Startpage content with organized links
│   ├── blog/               # Blog posts
│   │   ├── _index.md       # Blog index with pagination
│   │   └── *.md            # Individual blog posts
│   └── docs/               # Documentation section
│       ├── _index.md       # Docs index page
│       ├── unix-notes.md   # Converted markdown docs
│       ├── firefox.md      # Browser configuration
│       └── ...             # Other documentation
├── templates/              # Tera HTML templates
│   ├── base.html           # Base layout with nav/footer
│   ├── index.html          # Homepage template
│   ├── page.html           # General page template
│   ├── section.html        # Section listing template
│   ├── blog-page.html      # Individual blog post template
│   ├── search.html         # Search page template
│   ├── start.html          # Startpage template with theme switching
│   ├── taxonomy_list.html  # Tag/category listing
│   └── taxonomy_single.html # Posts for specific tag
├── static/                 # Static assets
│   ├── css/                # Stylesheets (sakura.css + custom)
│   ├── img/                # Images and photos
│   ├── pictures/           # Gallery photos
│   ├── js/                 # JavaScript files
│   ├── start/              # Startpage assets
│   │   ├── style.css       # Startpage-specific CSS with themes
│   │   └── script.js       # Theme switching and interactive features
│   └── docs/               # Legacy HTML docs and PDFs
└── .github/workflows/      # GitHub Actions deployment
    └── zola.yml            # Automated build, check, and deploy
```

## Key Files

- `content/` - All markdown content files
- `templates/base.html` - Site-wide layout, navigation, and footer
- `static/css/style.css` - Custom CSS overrides and navigation fixes
- `config.toml` - Site configuration with taxonomies, search, and link checking
- `.github/workflows/zola.yml` - CI/CD pipeline with validation

## Features Configuration

### Blog
- Pagination (10 posts per page)
- Tags and categories with automatic taxonomy pages
- RSS feed generation
- Post navigation (previous/next)

### Search
- **Full-text search** across all content (blog posts, documentation, pages)
- **ElasticLunr-powered** client-side search with real-time results as you type
- **Smart ranking** with title matches boosted 2x higher than body content
- **No server required** - all search processing happens in the browser
- **Auto-generated index** - Zola builds the search index during site generation
- Available at `/search/`

#### Search Implementation
The search functionality is implemented using:
1. **Zola's built-in search index generation** (`build_search_index = true`)
2. **ElasticLunr library** for client-side full-text search
3. **Custom JavaScript** in `templates/search.html` for search interface

When you build the site, Zola automatically:
- Crawls all markdown content
- Creates an ElasticLunr search index (`/search_index.en.js`)
- Includes the ElasticLunr library (`/elasticlunr.min.js`)
- Enables fast, typo-tolerant search without requiring a backend

### Startpage
- **Personal browser startpage** at `/start/` with organized link categories
- **Theme switching** with VS Code Dark, Catppuccin, and Dracula themes
- **Interactive features** including keyboard shortcuts (Ctrl/Cmd + 1,2,3) and click ripple effects
- **Responsive design** optimized for various screen sizes
- **Isolated styling** that doesn't interfere with the main site's sakura.css theme
- **Local storage** remembers your preferred theme across browser sessions

The startpage is designed as a standalone feature with its own template (`start.html`) and assets (`static/start/`) to provide a clean, customizable landing page for daily browsing.

**Attribution**: The `/start/` layout is based on design by [grtcdr](https://benalita.tn) from https://git.sr.ht/~grtcdr/startpages/tree/master

### Syntax Highlighting
- Monokai theme for code blocks
- Supports all major programming languages

### Link Checking
- Automated external link validation
- Configured to skip problematic domains (redirects, bot protection)
- Runs on all pushes and pull requests

## Styling

The site uses [sakura.css](https://oxal.org/projects/sakura/) as the primary CSS framework with custom overrides in `static/css/style.css`. Key customizations include:

- Navigation clearfix for proper layout
- Responsive design for mobile devices
- Custom footer styling
- Monospace font for navigation

## Deployment

The site uses GitHub Actions for automated deployment with validation:

1. **Push to `main`** - Triggers the build workflow
2. **Validation** - Runs `zola check` to validate links and structure
3. **Build** - Generates static site with search index and sitemap
4. **Deploy** - Pushes to `gh-pages` branch
5. **GitHub Pages** - Serves the site from `gh-pages` branch

Features automatically generated:
- Sitemap at `/sitemap.xml`
- RSS feeds at `/rss.xml` and taxonomy feeds
- ElasticLunr search index at `/search_index.en.js`
- ElasticLunr library at `/elasticlunr.min.js`

## Documentation Migration

The site migrated from static HTML to Zola with the following improvements:

- **Converted to Markdown**: Core documentation (Unix notes, OpenBSD guides, Firefox tweaks, etc.)
- **Maintained Compatibility**: Legacy HTML files preserved in `static/docs/`
- **Added Blog**: Full blog functionality with tags and RSS
- **Enhanced Navigation**: Consistent theme across all content types
- **Improved Maintenance**: Version-controlled markdown instead of manual HTML