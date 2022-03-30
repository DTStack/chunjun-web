import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy To Use',
    Svg: require('@site/static/img/easyuse.svg').default,
      viewBoxVal : "0 0 1000 1000",
    description: (
      <>
        基于json,sql 快速构建数据同步任务,你只需要关注数据源的结构信息即可, 让您节省时间,专注于数据集成的开发。
      </>
    ),
  },
    {
        title: '基于 Flink',
        Svg: require('@site/static/img/flink_header_logo.svg').default,
        viewBoxVal : "0 0 500 500",
        description: (
            <>
               该项目构建于flink之上，基于flink 原生的input,output 相关接口来实现多种数据源之间的数据传输，同时你可以基于
                flink 自己扩展插件。
            </>
        ),
    },
  {
    title: '关键特性',
    Svg: require('@site/static/img/doc.svg').default,
      viewBoxVal : "0 0 1200 1200",
    description: (
      <>
        1. 多种数据源之间数据传输
        2. 断点续传
        3. 增量同步
        4. 实时采集
        5. 脏数据管理
        6. 实时数据还原
      </>
    ),
  }
];

function Feature({Svg, title, description, viewBoxVal}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" viewBox={viewBoxVal} />
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
