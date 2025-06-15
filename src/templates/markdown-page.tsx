import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';
import { PageLayout } from 'layouts/PageLayout';
import { Container } from 'components/Container';
import { Heading1, Paragraph } from 'components/Typography';

interface MarkdownPageProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      body: string;
    };
  };
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ data, children }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <PageLayout>
      <Container>
        <Heading1>{frontmatter.title}</Heading1>
        <Paragraph>{frontmatter.date}</Paragraph>
        {body}
      </Container>
    </PageLayout>
  );
};

export default MarkdownPage;

export const query = graphql`
  query ($id: String!, $language: String!) {
    mdx(id: { eq: $id }) {
      body
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
