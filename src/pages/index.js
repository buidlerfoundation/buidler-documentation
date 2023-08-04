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
        <h1 style={{ display: 'none' }}>About Buidler</h1>
        <p style={{ display: 'none' }}>Buidler is a messaging platform lets you dive into communities right on the sites you're browsing, instantly. By installing the Buidler Extension, you can hang out, ask questions, or collaborate with everyone on the website directly on your browser - without switching or searching for chat channels. Imagine this: You're scrolling through your favorite sites and find something cool. You want to talk about it, but where do you go? Enter Builder! It's like a lively hangout space right on the sites you love. Instantly connect and discuss with like-minded people on the same site, all within your browser.</p>
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

