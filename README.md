# Jason Hamilton's Personal Website

Personal website, blog, and documentation built with [Zola](https://www.getzola.org/) static site generator.

## Live Site

Visit: [https://laydros.github.io](https://laydros.github.io)

## Features

- **Blog** - Full-featured blog with pagination, tags, and RSS feeds
- **Documentation** - Technical notes and tutorials in markdown
- **Gallery** - Simple photo gallery
- **Search** - Site-wide content search
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
│   ├── taxonomy_list.html  # Tag/category listing
│   └── taxonomy_single.html # Posts for specific tag
├── static/                 # Static assets
│   ├── css/                # Stylesheets (sakura.css + custom)
│   ├── img/                # Images and photos
│   ├── pictures/           # Gallery photos
│   ├── js/                 # JavaScript files
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
- Full-text search across all content
- JavaScript-based using Zola's search index
- Available at `/search/`

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
- Search index at `/search_index.en.json`

## Documentation Migration

The site migrated from static HTML to Zola with the following improvements:

- **Converted to Markdown**: Core documentation (Unix notes, OpenBSD guides, Firefox tweaks, etc.)
- **Maintained Compatibility**: Legacy HTML files preserved in `static/docs/`
- **Added Blog**: Full blog functionality with tags and RSS
- **Enhanced Navigation**: Consistent theme across all content types
- **Improved Maintenance**: Version-controlled markdown instead of manual HTML