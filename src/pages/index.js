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
      <main className={styles.heroBanner}>
        <h1 style={{ display: 'none' }}>About Buidler</h1>
        <p style={{ display: 'none' }}>
          Buidler is a messaging platform that lets you dive into communities right on the sites
          you're browsing, instantly. By installing the Buidler Extension, you can hang out, ask
          questions, or collaborate with everyone on the website directly on your browser - without
          switching or searching for chat channels. Imagine this: You're scrolling through your
          favorite sites and find something cool. You want to talk about it, but where do you go?
          Enter Builder! It's like a lively hangout space right on the sites you love. Instantly
          connect and discuss with like-minded people on the same site, all within your browser.
        </p>
        <h2 style={{ display: 'none' }}>
        Chat Anywhere, Anytime: Discuss news articles, share thoughts on videos, or simply make friends with people right on the sites you visit!
        </h2>
        <h2 style={{ display: 'none' }}>
        Enhance Website Interactivity: Buidler brings chat spaces to every webpage, from blogs to forums, e-commerce, and any other platform, making them more socially interactive.
        </h2>
        <h2 style={{ display: 'none' }}>
        Community Chat Plugin: Website owners can increase user engagement by integrating our plugin. Strengthen user loyalty, attract new visitors, and grow your community organically.
        </h2>
        <h2 style={{ display: 'none' }}>
        Community Chat Plugin: Website owners can increase user engagement by integrating our plugin. Strengthen user loyalty, attract new visitors, and grow your community organically.
        </h2>
        <p style={{ display: 'none' }}>
        Buidler is your gateway to a more interactive and connected online world. So, what are you waiting for? Let's embrace the change and reshape web browsing together.
        </p>
        <p style={{ display: 'none' }}>
        We believe that the root of all problems in the world is wrong communication. Our mission here is to solve it, especially focusing on communication problems on the internet. Join discussions, share knowledge, and collaborate towards common goals.
        </p>
        <p style={{ display: 'none' }}>
        Buidler, a simple extension that transforms websites into communities. Each URL becomes a chat room, connecting users viewing the same content effortlessly.
        Our browser app enables real-time discussions and interactions while browsing - no more wasted time switching between platforms. Stay connected and engaged seamlessly inside the Builder app.
        If you own a website, integrate Builder into it to build loyal communities that keep visitors engaged, connected, and coming back for more.
        </p>
        <meta name="title" content="About Buidler" />
        <meta
          name="description"
          content="Buidler is a messaging platform that lets you dive into communities right on the sites you're browsing, instantly."
        />
      </main>
      <Redirect to='/about' />
    </>
  );
}

