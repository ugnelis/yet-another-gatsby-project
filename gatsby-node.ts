import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

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

  const posts = result.data.allMdx.nodes;

  posts.forEach((node: any) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/templates/markdown-page.tsx'),
      context: { id: node.id },
    });
  });
};
