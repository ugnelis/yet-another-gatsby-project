import type { GatsbyConfig } from 'gatsby';

const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Yet another Gatsby project',
    siteUrl: 'https://yet-another-gatsby-project.pages.dev',
    description: 'Gatsby project that uses styled-component and TypeScript.',
    image: '/image.png',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Yet another Gatsby project`,
        short_name: `Yet another Gatby project`,
        icon: 'static/favicon.svg',
        background_color: `#221d43`,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV === 'development',
      },
    },
    // "gatsby-plugin-google-gtag",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/*.style.(js|ts)?(x)'],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap-index.xml`,
        policy: [
          {
            userAgent: '*',
            ...(process.env.ALLOW_ROBOTS === 'true' ? { allow: '/' } : { disallow: '/' }),
          },
        ],
      },
    },
    {
      resolve: '@herob191/gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'lt'],
        defaultLanguage: 'en',
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          nsSeparator: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: `${__dirname}/src/locales`,
      },
    },
  ],
};

export default config;
