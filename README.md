# Portfolio site

Static site built from the files in `content/`. Nothing here is hand-edited HTML.

## Add or edit a project

1. Add `content/projects/<name>.md`. Copy an existing one and change it.
2. Put its images and videos in `content/media/<name>/`.
3. Run `python build.py`. Open `site/index.html` to check it.
4. Commit and push. GitHub builds and publishes the site.

Set `draft: true` in a project's frontmatter to keep it unpublished.
Set `featured: true` and `order: 1..4` to put it on the home page.

## Files

- `content/site.yml`: name, intro, contact links, labels, words to avoid
- `content/projects/*.md`: one file per project
- `content/experience.yml`, `content/about.yml`: those two pages
- `content/cv.pdf`: optional, adds a CV link
- `templates/`, `static/`: layout and styling

The build prints a warning for missing media files, long dashes, and the words listed under `avoid_words`.
Use `python build.py --strict` to make warnings fail the build.

## Publishing

Settings, Pages, Source: GitHub Actions (one time). The workflow in `.github/workflows/pages.yml` does the rest.

## Rule

Only refined material goes in this repo. Raw project folders, lab code and CAD stay outside it (`raw/` is ignored).
