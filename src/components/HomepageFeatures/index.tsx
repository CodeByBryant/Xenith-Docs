import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Life Dimensions',
    to: '/intro',
    description: (
      <>
        Track the areas that matter — health, mind, work, relationships, and
        more — each with its own focus and rhythm.
      </>
    ),
  },
  {
    title: 'Focus',
    to: '/intro',
    description: (
      <>
        A distraction-free timer with ambient soundscapes to help you do deep,
        intentional work.
      </>
    ),
  },
  {
    title: 'Growth',
    to: '/intro',
    description: (
      <>
        Personalized paths that turn long-term goals into concrete, achievable
        steps.
      </>
    ),
  },
];

function Feature({ title, to, description }: FeatureItem) {
  return (
    <div className="col col--4">
      <Link to={to} className={styles.card}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardBody}>{description}</p>
        <span className={styles.cardLink}>Learn more →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
