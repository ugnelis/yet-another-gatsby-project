import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

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

  data.allMdx.nodes.forEach((node) => {
    const { slug, language } = node.frontmatter;

    createPage({
      path: `/${language}/markdown/${slug}`,
      component: `${path.resolve('./src/templates/markdown-page.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        language,
      },
    });
  });
};
