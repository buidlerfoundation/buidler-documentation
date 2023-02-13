import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '21e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '557'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f63'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '693'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '491'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8a8'),
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
        component: ComponentCreator('/docs/using-buidler/how-to-create-wallet', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/using-buidler/how-to-import-wallet',
        component: ComponentCreator('/docs/using-buidler/how-to-import-wallet', '91c'),
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
