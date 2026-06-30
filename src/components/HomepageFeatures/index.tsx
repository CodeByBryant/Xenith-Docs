import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  icon: ReactNode;
  description: ReactNode;
};

/* Minimal monochrome line icons (stroke = currentColor), matching the app's
   Lucide-style iconography without pulling in an icon dependency. */
const Icon = {
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  timer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="2" x2="14" y2="2" />
      <line x1="12" y1="14" x2="15" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    to: '/getting-started/creating-an-account',
    icon: Icon.compass,
    description: <>Create your account, complete onboarding, and learn your way around the workspace.</>,
  },
  {
    title: 'Daily Workflow',
    to: '/daily-workflow/daily-intentions',
    icon: Icon.sun,
    description: <>Intentions, Focus sessions, routines, and end-of-day reflection — the rhythm of a deliberate day.</>,
  },
  {
    title: 'Life Dimensions',
    to: '/life-dimensions/overview',
    icon: Icon.layers,
    description: <>The eight areas of life Xenith helps you track and balance, each with its own dedicated tools.</>,
  },
  {
    title: 'Focus',
    to: '/daily-workflow/focus',
    icon: Icon.timer,
    description: <>A distraction-free timer with ambient soundscapes built for deep, intentional work.</>,
  },
  {
    title: 'Growth & Insights',
    to: '/growth-and-insights/growth',
    icon: Icon.trending,
    description: <>AI growth paths, your personal coach, projects, and the analytics that tie it all together.</>,
  },
  {
    title: 'Account & Privacy',
    to: '/account/settings',
    icon: Icon.shield,
    description: <>Settings, notifications, and exactly how your data is stored, used, and protected.</>,
  },
];

function Feature({ title, to, icon, description }: FeatureItem) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.cardIcon} aria-hidden="true">
        {icon}
      </span>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardBody}>{description}</p>
      <span className={styles.cardLink}>Read the guide →</span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Explore the docs</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Find what you need
          </Heading>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
