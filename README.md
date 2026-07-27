# Personal research website

A custom Astro research site published at `https://halleyverse.github.io`.

## Edit the content

- Update identity, biography, contact information, and profile links in `src/data/site.ts`.
- Update experience, education, expertise, talks, and recognition in `src/data/profile.ts`.
- Add research entries in `src/content/research/`. Set `complete: true` to publish and `featured: true` to show an entry on the home page.
- Add publication records to `src/data/publications.bib`. Set `complete = {true}` to publish and `selected = {true}` to feature an entry.

## Develop locally

```sh
npm install
npm run dev
```

Run validation and a production build with:

```sh
npm run build
```

## Deploy

The workflow in `.github/workflows/deploy.yml` checks, builds, and deploys the site to GitHub Pages after a push to `main` or `master`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
