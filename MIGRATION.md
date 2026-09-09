# Legacy page migration

This inventory tracks the hand-written pages under `static/docs/`. Convert pages in
small batches and preserve their existing public URLs with Zola aliases.

## Migration rules

- Put converted documents in `content/docs/<slug>.md`.
- Keep the old `.html` URL working with `aliases = ["/docs/<old-name>.html"]`.
- Preserve the original author, source URL, publication date, and archival context.
- Move page-owned images and downloads to a stable directory under `static/`.
- Remove the old static HTML only after comparing the rendered page and checking links.
- Run `zola check` and `zola build` after every batch.

## First-party conversion candidates

| Existing URL | Source | Suggested destination | Notes |
| --- | --- | --- | --- |
| `/docs/computers.html` | `static/docs/computers.html` | `content/docs/computers.md` | Personal reference page; good early conversion. |
| `/docs/concrete.html` | `static/docs/concrete.html` | `content/docs/concrete.md` | Review authorship and context before conversion. |
| `/docs/dropbox.html` | `static/docs/dropbox.html` | `content/docs/dropbox.md` | Likely short and low-risk. |
| `/docs/fossdroid.html` | `static/docs/fossdroid.html` | `content/docs/fossdroid.md` | Already linked from the docs index. |
| `/docs/mac-survival.html` | `static/docs/mac-survival.html` | `content/docs/mac-survival.md` | Large page; migrate separately and retain headings. |
| `/docs/mobile-history.html` | `static/docs/mobile-history.html` | `content/docs/mobile-history.md` | Check image paths during conversion. |
| `/docs/new-master-password.html` | `static/docs/new-master-password.html` | `content/docs/new-master-password.md` | Confirm that no personal secret material is present. |
| `/docs/openbsd66_on_laptop.html` | `static/docs/openbsd66_on_laptop.html` | `content/docs/openbsd-66-on-a-laptop.md` | Preserve the underscore URL as an alias. |
| `/docs/tipmonkies-distros.html` | `static/docs/tipmonkies-distros.html` | `content/docs/tipmonkies-distros.md` | Already linked from the docs index. |

## Preserve or review before converting

These appear to be copied, mirrored, generated, or third-party works. They may be
best left as faithful static archives unless conversion materially improves them.

| Existing URL | Source | Review point |
| --- | --- | --- |
| `/docs/archive/` | `static/docs/archive/index.html` | Old site index; useful as historical navigation. |
| `/docs/craphound/` | `static/docs/craphound/index.html` | Archive with accompanying source text; retain attribution. |
| `/docs/emergency_elisp.html` | `static/docs/emergency_elisp.html` | Third-party article; preserve source and license context. |
| `/docs/hipsternews-computing.html` | `static/docs/hipsternews-computing.html` | Archived external page; preserve provenance. |
| `/docs/look_like_a_unix_guru.html` | `static/docs/look_like_a_unix_guru.html` | Third-party tutorial; review redistribution terms. |
| `/docs/sdf-unix-intro.html` | `static/docs/sdf-unix-intro.html` | Large archived document with embedded archive URLs. |
| `/docs/stevekeys.html` | `static/docs/stevekeys.html` | Small archival page; retain photo attribution. |
| `/docs/template.html` | `static/docs/template.html` | Development artifact; probably remove rather than migrate. |

## Consolidation candidates

- Compare `/docs/oldlinks.html` with `content/docs/links.md`; migrate anything still
  useful, then preserve `/docs/oldlinks.html` with an alias or redirect.
- Keep `static/docs/conf/` as downloadable configuration files unless explanatory
  Markdown would add value.
- Treat `static/docs/facebook/` as a separate privacy/archive decision rather than a
  normal Markdown migration.

## Completed cleanup

- Removed unreferenced backup and editor files from the published tree.
- Removed unused jQuery 3.4.1 copies.
- Removed dead documentation-index entries for files absent from the repository.
- Removed the process core dump from the current branch. History cleanup remains.
