import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tech Blog',
  tagline: '커머스 플랫폼을 운영하면서 쌓인 노하우를 공개합니다.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.nhn-commerce.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'commerce', // Usually your GitHub org/user name.
  projectName: 'tech-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://www.nhn-commerce.com',
        },
        blog: {
          showReadingTime: true,
          // @FIXME: github 주소로 변경할것
          editUrl: 'https://github.com/nhn-commerce/nhn-commerce.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Logo',
        src: 'img/commerce-logo.png',
        srcDark: 'img/commerce-logo-w.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/nhn-commerce/nhn-commerce.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Skin Docs',
              to: 'https://nhnent.dooray.com/share/pages/WoOk8q6KT1K3MZcLSuyZsw',
            },
          ],
        },
        {
          title: 'Contents',
          items: [
            {
              label: 'Workspace',
              href: 'https://workspace.nhn-commerce.com',
            },
            {
              label: 'Youtube - Tech',
              href: 'https://www.youtube.com/watch?v=otss__0kf-g&list=PLu6ceZh6Q3cbFK3ccTjguc8ki0P3X7b0P&index=5',
            },
            {
              label: 'Youtube - Skins',
              href: 'https://www.youtube.com/watch?v=4ioNCF5UdH0&list=PLu6ceZh6Q3cZT2Bq4RisszycBgWFKC_zn&index=1',
            },
            {
              label: 'Youtube - Apps',
              href: 'https://www.youtube.com/watch?v=xs20HossRpA&list=PLu6ceZh6Q3cb2t3UiW4SwIKu1YOXwMdpz',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'NHN COMMERCE Corp',
              href: 'https://www.nhn-commerce.com',
            },
            {
              label: 'App Store',
              href: 'https://apps.nhn-commerce.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NHN COMMERCE, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
