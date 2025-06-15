import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

interface MarkdownQueryResult {
  allMdx: {
    nodes: {
      id: string;
      frontmatter: {
        slug: string;
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
    createPage({
      path: `/markdown/${node.frontmatter.slug}`,
      component: `${path.resolve('./src/templates/markdown-page.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
