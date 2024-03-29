/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Buidler Documentation",
  "tagline": "Buidler is a messaging platform that lets you dive into communities right on the sites you're browsing, instantly.",
  "url": "https://docs.buidler.app",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logo.svg",
  "organizationName": "buidlerfoundation",
  "projectName": "buidler-documentation",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/mac/buidler-documentation/sidebars.js",
          "path": "general",
          "routeBasePath": "/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": [
            "/Users/mac/buidler-documentation/src/css/custom.css"
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "metadata": [
      {
        "property": "og:image",
        "content": "https://docs.buidler.app/img/buidler-extension.png"
      },
      {
        "property": "og:description",
        "content": "Buidler is a messaging platform that lets you dive into communities right on the sites you are browsing, instantly."
      },
      {
        "property": "og:title",
        "content": "Buidler Documentation"
      },
      {
        "property": "og:site_name",
        "content": "Buidler"
      },
      {
        "property": "twitter:site",
        "content": "@buidler_app"
      },
      {
        "property": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "property": "twitter:title",
        "content": "Buidler Documentation"
      },
      {
        "property": "twitter:description",
        "content": "Buidler is a messaging platform that lets you dive into communities right on the sites you are browsing, instantly."
      },
      {
        "property": "twitter:image",
        "content": "https://docs.buidler.app/img/buidler-extension.png"
      }
    ],
    "algolia": {
      "appId": "A3JJXZEKHY",
      "apiKey": "62caf7194121c00c32dac90304b13a9f",
      "indexName": "buidler",
      "debug": true,
      "contextualSearch": false,
      "externalUrlRegex": "external\\.com|domain\\.com",
      "replaceSearchResultPathname": {
        "from": "/",
        "to": "/"
      },
      "searchParameters": {
        "facetFilters": []
      },
      "searchPagePath": false
    },
    "navbar": {
      "title": "Buidler",
      "hideOnScroll": true,
      "logo": {
        "alt": "Buidler Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "search",
          "position": "right"
        },
        {
          "href": "https://chrome.google.com/webstore/detail/omhbdacaeafhladkifficmjmpeaijlfc",
          "label": "Install Extension",
          "position": "right",
          "class": "join-community"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Buidler - One extension. Any communities.",
          "items": [
            {
              "label": "Website",
              "href": "https://buidler.app"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/buidler_app"
            },
            {
              "label": "Youtube",
              "href": "https://www.youtube.com/@buidler_app"
            },
            {
              "label": "Github",
              "href": "https://github.com/buidlerfoundation"
            }
          ]
        },
        {
          "title": "Product",
          "items": [
            {
              "label": "Web App",
              "href": "https://buidler.app/communities"
            },
            {
              "label": "Extension",
              "href": "https://chrome.google.com/webstore/detail/omhbdacaeafhladkifficmjmpeaijlfc"
            },
            {
              "label": "Web Plugin",
              "href": "https://docs.buidler.app/add-community-chat-plugin"
            }
          ]
        },
        {
          "title": "Company",
          "items": [
            {
              "label": "About",
              "href": "https://buidler.app"
            },
            {
              "label": "Terms",
              "href": "https://buidler.app/terms"
            },
            {
              "label": "Privacy",
              "href": "https://buidler.app/privacy"
            }
          ]
        }
      ]
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "zoom": {
      "selector": ".markdown :not(em) > img",
      "background": {
        "light": "rgb(255, 255, 255)",
        "dark": "rgb(50, 50, 50)"
      }
    },
    "notFound": [
      "The page you are looking for does not exist.",
      "You may have mistyped the address or the page may have moved."
    ],
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    "/Users/mac/buidler-documentation/src/buidler-plugin",
    "/Users/mac/buidler-documentation/node_modules/docusaurus-plugin-image-zoom/src/index.js"
  ],
  "scripts": [
    {
      "src": "https://buidler.app/download/plugin.min.js",
      "type": "text/javascript"
    }
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
