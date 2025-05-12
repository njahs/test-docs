import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// https://github.com/LayZeeDK/github-pages-docusaurus

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = "njahs";
const projectName = "test-docs";

const config: Config = {
  title: 'Easy Static Mesh Deformation Component',
  tagline: 'Deformation are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //   `https://github.com/${organizationName}/${projectName}/tree/main/`,
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { defaultMode: "dark" },
    navbar: {
      title: 'Deformation Component',
      logo: {
        alt: 'MDeformation Component Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Deformation Component',
          items: [
            {
              label: 'Documentation',
              // to: '/docs/intro',
              to: '/',
            },
            {
              label: 'FAB Marketplace',
              href: 'https://fab.com/s/cd4ac83117ca',
            },
            {
              label: 'Old Documentation',
              href: 'https://docs.google.com/document/d/15rQ43N4Q9SQlBJg12ZPjgmUrXZX8UX5u07IsrkZnFo8/edit?usp=sharing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/FMGbQ4JJhx',
            },
            {
              label: 'Unreal Engine Forum',
              href: 'https://forums.unrealengine.com/t/2476292',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@DebuggingDelightStudios',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Debugging Delight Studios. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  } satisfies Preset.ThemeConfig,
  // plugins: [
  //   [
  //     './src/plugins/test-plugin',
  //     { /* options */}
  //   ]
  // ],
  plugins: [ 
    [require.resolve('docusaurus-plugin-image-zoom'), { id: 'docusaurus-plugin-image-zoom' }],
  ],
  scripts: [
    {
      src: 'bue-render/render.js',
      async: true,
    },
  ], stylesheets: [
    "bue-render/render.css"
  ]
};

export default config;
