import type { GatsbyConfig } from 'gatsby';

const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Yet another Gatsby project',
    siteUrl: 'https://localhost:8000',
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
          include: /static\/.*\.svg/,
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
  ],
};

export default config;
