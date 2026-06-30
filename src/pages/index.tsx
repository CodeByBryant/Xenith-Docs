import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.brandMark} aria-hidden="true">
          X
        </div>
        <span className={styles.badge}>Documentation</span>
        <Heading as="h1" className={styles.heroTitle}>
          Build a deliberate life,
          <br />
          <span className={styles.heroTitleMuted}>one dimension at a time.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          Everything you need to get the most out of {siteConfig.title.replace(' Docs', '')} —
          from your first intention to eight fully tracked life dimensions, Focus
          sessions, AI growth paths, and beyond.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--lg', styles.primaryBtn)} to="/intro">
            Get Started →
          </Link>
          <Link
            className={clsx('button button--lg', styles.secondaryBtn)}
            href="https://xenith.life"
          >
            Open App
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Official documentation for Xenith — the deliberate-living app. Guides for Life Dimensions, Focus, Routines, Growth, Insights, and more."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
