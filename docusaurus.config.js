// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChunJun 纯钧',
  tagline: 'Data Integration Tool',
  url: 'https://dtstack.github.io/chunjun-web/',
  baseUrl: '/chunjun-web/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DTStack', // Usually your GitHub org/user name.
  projectName: 'chunjun-web', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      "zh-cn": {
        htmlLang: '中文',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ChunJun 纯钧',
        logo: {
          alt: 'ChunJun Logo',
          src: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'chunjunDocs/intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'https://github.com/DTStack/chunjun/releases',
            position: 'left',
            label: 'Download',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'roadmap',
            label: 'Roadmap',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/DTStack/chunjun',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Issue Tracker',
                href: 'https://github.com/DTStack/chunjun/issues',
              },
              {
                label: 'Pull Requests',
                href: 'https://github.com/DTStack/chunjun/pulls',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/DTStack/chunjun/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DTStack/chunjun',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DTStack, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
