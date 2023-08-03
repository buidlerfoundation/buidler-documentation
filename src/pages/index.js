import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import  { Redirect } from 'react-router-dom';

import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.heroBanner}>
          <h1 style="visibility: hidden;">About Buidler</h1>
          <meta name="title" content="About Buidler"/>
          <meta name="description" content="Buidler is a messaging platform lets you dive into communities right on the sites you're browsing, instantly."/>
        </main>
      </Layout>
      <Redirect to='/about' />
    </>
  );
}

// export default function Home() {
//   // return (
//   //   <Layout>
//   //     <main className={clsx(styles.heroBanner)}>
//   //       <HomepageFeatures />
//   //     </main>
//   //   </Layout>
//   // );
//   return <Redirect to='/about'/>;
// }

