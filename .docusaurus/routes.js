import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '491'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '20d'),
    routes: [
      {
        path: '/docs/blog/discord-in-web3',
        component: ComponentCreator('/docs/blog/discord-in-web3', '500'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/blog/how-buidler-store-your-password',
        component: ComponentCreator('/docs/blog/how-buidler-store-your-password', 'd4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/for-community-members/how-to-join-a-community',
        component: ComponentCreator('/docs/for-community-members/how-to-join-a-community', 'a11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/for-community-owner/setup-community',
        component: ComponentCreator('/docs/for-community-owner/setup-community', 'c25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general/roadmap',
        component: ComponentCreator('/docs/general/roadmap', '021'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general/tokenomic',
        component: ComponentCreator('/docs/general/tokenomic', '568'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general/what-is-buidler',
        component: ComponentCreator('/docs/general/what-is-buidler', '299'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/governance/overview',
        component: ComponentCreator('/docs/governance/overview', '355'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/using-buidler/getting-started',
        component: ComponentCreator('/docs/using-buidler/getting-started', 'f25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/using-buidler/how-to-create-wallet',
        component: ComponentCreator('/docs/using-buidler/how-to-create-wallet', '7bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd45'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
