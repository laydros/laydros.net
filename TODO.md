# Site maintenance TODO

## Start page

- Resolve the duplicated start-page content in `content/start/_index.md` and `templates/start.html`.
- Choose one source of truth and have the template render from it while preserving the current URL and appearance.
- Verify the page and theme switcher after the change.

## Old branches

- Review these stale or merged branches and delete them if they contain no unique work worth keeping:
  - `codex/fix-github-actions-build-on-checkin`
  - `codex/fix-search-function-not-working`
  - `codex/update-/start-d/-page-structure-and-styles`
  - `codex/update-theme-chooser-to-dropdown`
  - `jekyll-migration`
- Confirm each branch is merged or otherwise safely superseded before deleting it, especially because earlier history cleanup rewrote branch commits.

## Optional polish

- Add a custom 404 page.
- Add Open Graph and other useful social-sharing metadata.
