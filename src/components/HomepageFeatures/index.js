import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Did you know?',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Almost half of all temperate grasslands and 16 percent of tropical grasslands have been
        converted to agricultural or industrial uses and only one percent of the original tallgrass prairie exists today.
      </>
    ),
  },
  {
    title: 'Uphill Battle',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our planet is currently losing forests at a staggering rate: We’re losing more than
        18 million acres of forests every year — that’s about 27 soccer fields of forest lost every minute.
      </>
    ),
  },
  {
    title: 'Making an Impact',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        By planting 20 million trees, the earth and its people will be provided with 260 million more
        tons of oxygen. Those same 20 million trees will remove 10 million tons of CO2.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : <></>}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
