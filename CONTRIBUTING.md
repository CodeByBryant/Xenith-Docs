# Contributing to Xenith Docs

Thanks for helping make the Xenith documentation better. This repo is the source
for [docs.xenith.life](https://docs.xenith.life).

## Spotted an error?

- For a quick fix (a typo, a broken link, an out-of-date detail), the fastest
  path is the **Edit this page** link at the bottom of any docs page — it opens
  the file directly in GitHub.
- For anything larger, or if you're not sure, open an
  [issue](https://github.com/CodeByBryant/Xenith-Docs/issues/new/choose).

## Running locally

```bash
npm install
npm start        # dev server with hot reload at http://localhost:3000
npm run build    # production build into build/
npm run serve    # serve the production build locally
```

## Writing guidelines

- Add Markdown/MDX files under `docs/`. The sidebar is generated from the folder
  structure; control order with `sidebar_position` and group with
  `_category_.json`.
- Use **relative links** to other docs (e.g. `../life-dimensions/overview.md`) so
  the build can validate them. Broken links fail the build.
- Keep callouts as plain blockquotes (`> **Note** ...`) for portability.
- Match the existing voice: clear, calm, and accurate. Describe how Xenith
  actually works — when in doubt, verify against the app rather than guessing.

## Licensing of contributions

By submitting a contribution you agree it is licensed back to Xenith as described
in [LICENSE](LICENSE). Please don't include any secrets or private data.
