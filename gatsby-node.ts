import type { GatsbyNode } from 'gatsby';
import * as path from 'path';
import gatsbyConfig from './gatsby-config';

interface MarkdownQueryResult {
  allMdx: {
    nodes: {
      id: string;
      frontmatter: {
        slug: string;
        language: string;
      };
      internal: {
        contentFilePath: string;
      };
    }[];
  };
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(filter: { internal: { contentFilePath: { regex: "/markdown/" } } }) {
        nodes {
          id
          frontmatter {
            slug
            language
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
    return;
  }

  const data = result.data as MarkdownQueryResult;

  const plugins = gatsbyConfig.plugins ?? [];

  const i18nPlugin = plugins.find(
    (plugin) =>
      typeof plugin !== 'string' && plugin.resolve === '@herob191/gatsby-plugin-react-i18next',
  );

  const i18nOptions = (i18nPlugin as { options?: any })?.options || {};
  const defaultLanguage = i18nOptions.defaultLanguage || 'en';
  const supportedLanguages = i18nOptions.languages || ['en'];

  data.allMdx.nodes.forEach((node) => {
    const { slug, language } = node.frontmatter;

    const localizedPath =
      language === defaultLanguage ? `/markdown/${slug}` : `/${language}/markdown/${slug}`;

    reporter.info(`Creating page: ${language} -> ${localizedPath}`);

    createPage({
      path: localizedPath,
      component: `${path.resolve(
        './src/templates/markdown-page.tsx',
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        language,
        i18n: {
          language,
          languages: supportedLanguages,
          defaultLanguage,
          originalPath: `/markdown/${slug}`,
        },
      },
    });
  });
};
