// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Buidler Documentation",
  tagline:
    "Buidler is a messaging platform that lets you dive into communities right on the sites you're browsing, instantly.",
  url: "https://docs.buidler.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "buidlerfoundation", // Usually your GitHub org/user name.
  projectName: "buidler-documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: 'general',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{property: 'og:image', content: 'https://docs.buidler.app/img/buidler-extension.png'},
                {property: 'og:description', content: 'Stay up-to-date with the latest updates, insights, and use cases of Buidler. Join our community and be part of the future of decentralized communication today.'},
                {property: 'og:title', content: 'Buidler Documentation - One extension. Any Communities.'},
                {property: 'og:site_name', content: 'Buidler'},
                {property: 'twitter:site', content: '@buidler_app'},
                {property: 'twitter:card', content: 'summary_large_image'},
                {property: 'twitter:title', content: 'Buidler Documentation - One extension. Any Communities.'},
                {property: 'twitter:description', content: 'Buidler is a messaging platform that lets you dive into communities right on the sites you are browsing, instantly.'},
                {property: 'twitter:image', content: 'https://docs.buidler.app/img/buidler-extension.png'},
              ],
      algolia: {
        // The application ID provided by Algolia
        appId: 'A3JJXZEKHY',
  
        // Public API key: it is safe to commit it
        apiKey: '62caf7194121c00c32dac90304b13a9f',
  
        indexName: 'buidler',

        debug: true, // Set debug to true if you want to inspect the modal
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {
          facetFilters: []
        },
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
  
        //... other Algolia params
      },
      navbar: {
        title: "Buidler",
        hideOnScroll: true,
        logo: {
          alt: "Buidler Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: 'search',
            position: 'right', // Set the position to the left
          },
          {
            href: "https://chrome.google.com/webstore/detail/omhbdacaeafhladkifficmjmpeaijlfc",
            label: "Install Extension",
            position: "right",
            class: "join-community",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Buidler - One extension. Any communities.",
            items: [
              {
                label: "Website",
                href: "https://buidler.app",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/buidler_app",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@buidler_app",
              },
              {
                label: "Github",
                href: "https://github.com/buidlerfoundation",
              },
            ],
          },
          {
            title: "Product",
            items: [
              {
                label: "Web App",
                href: "https://beta.buidler.app/",
              },
              {
                label: "Extension",
                href: "https://chrome.google.com/webstore/detail/omhbdacaeafhladkifficmjmpeaijlfc",
              },
              {
                label: "Web Plugin",
                href: "https://docs.buidler.app/install-live-chat-plugin",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                href: "https://buidler.app",
              },
              {
                label: "Terms",
                href: "https://buidler.app/terms",
              },
              {
                label: "Privacy",
                href: "https://buidler.app/privacy",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      }
    }),
  plugins: [
    path.resolve("src", 'buidler-plugin'),
    require.resolve("docusaurus-plugin-image-zoom")],
  scripts: [
    {
      src: 'https://buidler.app/download/plugin.min.js',
      type: 'text/javascript'
    },
  ],
};

module.exports = config;
