import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Abundant Connectors',
    Svg: require('@site/static/img/logo-light.svg').default,
    description: (
      <>
        TODO
      </>
    ),
  },
  {
    title: '纯钧——中国十大名剑之一',
    Svg: require('@site/static/img/logo-dark.svg').default,
    description: (
      <>
        越王勾践剑——纯钧
      </>
    ),
  },
  {
    title: 'Powered by Flink',
    Svg: require('@site/static/img/logo2d.svg').default,
    description: (
      <>
        TODO
      </>
    ),
  },
  {
    title: 'Massive Data Integration',
    Svg: require('@site/static/img/logo2l.svg').default,
    description: (
      <>
        TODO
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/logo-dark.svg').default,
    description: (
      <>
        TODO
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
