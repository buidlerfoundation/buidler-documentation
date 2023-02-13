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
    component: ComponentCreator('/docs', 'dc3'),
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
        path: '/docs/community/how-to-join-community',
        component: ComponentCreator('/docs/community/how-to-join-community', 'a43'),
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
