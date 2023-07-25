import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '584'),
    routes: [
      {
        path: '/docs/general/install-live-chat-plugin',
        component: ComponentCreator('/docs/general/install-live-chat-plugin', 'b53'),
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
