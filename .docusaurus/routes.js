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
    path: '/404',
    component: ComponentCreator('/404', 'fad'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '491'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '819'),
    routes: [
      {
        path: '/docs/community/how-to-join-community',
        component: ComponentCreator('/docs/community/how-to-join-community', 'a43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general/dapp-browser',
        component: ComponentCreator('/docs/general/dapp-browser', 'eae'),
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
        path: '/docs/general/what-is-buidler',
        component: ComponentCreator('/docs/general/what-is-buidler', '299'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/connect-via-metamask-walletconnect',
        component: ComponentCreator('/docs/wallet/connect-via-metamask-walletconnect', '9cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/connect-via-social',
        component: ComponentCreator('/docs/wallet/connect-via-social', '681'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/getting-started',
        component: ComponentCreator('/docs/wallet/getting-started', '95d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/how-copy-address',
        component: ComponentCreator('/docs/wallet/how-copy-address', 'b71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/how-to-backup-wallet',
        component: ComponentCreator('/docs/wallet/how-to-backup-wallet', '2fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/how-to-create-wallet',
        component: ComponentCreator('/docs/wallet/how-to-create-wallet', 'f56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallet/how-to-import-wallet',
        component: ComponentCreator('/docs/wallet/how-to-import-wallet', '31d'),
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
