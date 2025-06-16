import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { PageLayout } from 'layouts/PageLayout';
import { Container } from 'components/Container';
import { Heading1, Paragraph } from 'components/Typography';
import { MarkdownComponents } from 'components/MarkdownComponents';

interface MarkdownPageProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <PageLayout>
      <Container>
        <Heading1>{frontmatter.title}</Heading1>
        <Paragraph>{frontmatter.date}</Paragraph>
        <MDXProvider components={MarkdownComponents}>{children}</MDXProvider>
      </Container>
    </PageLayout>
  );
};

export default MarkdownPage;

export const query = graphql`
  query ($id: String!, $language: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
