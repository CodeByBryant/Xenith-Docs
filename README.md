# Xenith Docs

The documentation site for Xenith, served at
[docs.xenith.life](https://docs.xenith.life). Built with
[Docusaurus](https://docusaurus.io/) and themed to match the Xenith brand
(monochrome, dark by default).

## Development

```bash
npm install
npm start        # local dev server with hot reload
npm run build    # production build → build/
npm run serve    # serve the production build locally
```

## Writing docs

- Add Markdown/MDX files under [`docs/`](docs). The sidebar is generated
  automatically from the folder structure.
- Control ordering with `sidebar_position` front matter; group pages with
  `_category_.json` files.
- Docs are served at the site root (`routeBasePath: '/'`), so `docs/intro.mdx`
  is at `/intro`.

## Deployment

The build output is a static `build/` folder. On Vercel or Cloudflare Pages the
Docusaurus preset is detected automatically:

- **Build command:** `npm run build`
- **Output directory:** `build`

Point the `docs.xenith.life` DNS record at the deployment.

## SEO

- `url` / `baseUrl` are set for `docs.xenith.life`.
- A sitemap is generated at `/sitemap.xml` (via the classic preset).
- Social/Open Graph metadata is configured in `docusaurus.config.ts`; the social
  card lives at `static/img/xenith-social-card.svg`.

## Branding

Theme tokens live in [`src/css/custom.css`](src/css/custom.css). Fonts: Inter
(body), Playfair Display (headings), Chomsky (the blackletter "X" mark).

## Contributing

Spotted an error or something unclear? Use the **Edit this page** link on any
docs page, or open an issue. See [CONTRIBUTING.md](CONTRIBUTING.md) for local
setup and writing guidelines, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Security issues should be reported privately — see [SECURITY.md](SECURITY.md).

## License

This repository is **source-available but proprietary** — © 2026 Xenith, all
rights reserved. You may read it and suggest changes, but reuse requires
permission. See [LICENSE](LICENSE) for the full terms.
