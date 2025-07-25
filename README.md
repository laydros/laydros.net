# Jason Hamilton's Personal Website

Personal website and blog built with [Zola](https://www.getzola.org/) static site generator.

## Live Site

Visit: [https://laydros.github.io](https://laydros.github.io)

## Development

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) static site generator

### Local Development

```bash
# Start development server with live reload
zola serve
```

The site will be available at http://127.0.0.1:1111

### Building

```bash
# Build static site
zola build
```

Built files are output to the `public/` directory.

### Validation

```bash
# Check site structure and links
zola check
```

## Project Structure

```
├── config.toml          # Site configuration
├── content/             # Markdown content
│   ├── _index.md       # Homepage
│   ├── about.md        # About page
│   └── docs/           # Documentation section
├── templates/          # Tera HTML templates
│   ├── base.html       # Base layout
│   ├── index.html      # Homepage template
│   ├── page.html       # Page template
│   └── section.html    # Section template
└── static/             # Static assets
    ├── css/            # Stylesheets
    ├── img/            # Images
    ├── js/             # JavaScript
    └── docs/           # Static documentation
```

## Styling

The site uses [sakura.css](https://oxal.org/projects/sakura/) as the primary CSS framework with custom overrides in `static/css/style.css`.

## Deployment

The site is automatically deployed to GitHub Pages from the `main` branch. The `.nojekyll` file ensures GitHub doesn't process the site with Jekyll.