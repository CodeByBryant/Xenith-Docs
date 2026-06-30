import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Xenith Docs',
  tagline: 'Build a deliberate life — one dimension at a time.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.xenith.life',
  baseUrl: '/',

  organizationName: 'CodeByBryant',
  projectName: 'Xenith-Docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs at the site root.
          editUrl:
            'https://github.com/CodeByBryant/Xenith-Docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/xenith-social-card.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for Xenith — the deliberate-living app. Guides for Life Dimensions, Focus, Growth, and more.',
      },
      { name: 'keywords', content: 'Xenith, docs, productivity, life dimensions, focus, growth' },
      { property: 'og:type', content: 'website' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Xenith Docs',
      logo: {
        alt: 'Xenith',
        src: 'img/logo-x.svg',
        href: 'https://xenith.life',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://xenith.life',
          label: 'Open App',
          position: 'right',
        },
        {
          href: 'https://status.xenith.life',
          label: 'Status',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Open App', href: 'https://xenith.life' },
            { label: 'Status', href: 'https://status.xenith.life' },
          ],
        },
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/intro' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy', href: 'https://xenith.life/privacy' },
            { label: 'Terms', href: 'https://xenith.life/terms' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Xenith. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
