const fs = require('fs');

module.exports = function (context, options) {
  return {
    name: 'buidler-plugin',
    injectHtmlTags() {
      return {
        headTags: [],
        preBodyTags: [],
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
              src: 'https://buidler.app/download/plugin.min.js',
            },
          },
        ],
      };
    },
  };
};
