import React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { PageLayout } from 'layouts/PageLayout';
import { Container } from 'components/Container';
import { SEO } from 'components/SEO';
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  Paragraph,
  Underline,
} from 'components/Typography';
import { InternalLink, Link } from 'components/Link';
import { AnimatedSomeSVG, StyledIndexPage } from './index.style';

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <StyledIndexPage>
        <Container>
          <Heading1>{t('pages.home.heading-1')}</Heading1>
          <Heading2>{t('pages.home.heading-2')}</Heading2>
          <Heading3>{t('pages.home.heading-3')}</Heading3>
          <Heading4>{t('pages.home.heading-4')}</Heading4>
          <Heading5>{t('pages.home.heading-5')}</Heading5>
          <Heading6>{t('pages.home.heading-6')}</Heading6>
          <Paragraph>{t('pages.home.paragraph')}</Paragraph>
          <Paragraph>
            <Link>{t('pages.home.link')}</Link>
          </Paragraph>
          <Paragraph>
            <InternalLink to={'/'}>{t('pages.home.internal-link')}</InternalLink>
          </Paragraph>
          <Paragraph>
            <InternalLink to={'/markdown/hello/'}>{t('pages.home.markdown-article-link')}</InternalLink>
          </Paragraph>
          <Paragraph>
            <Bold>{t('pages.home.bold')}</Bold>
          </Paragraph>
          <Paragraph>
            <Italic>{t('pages.home.italic')}</Italic>
          </Paragraph>
          <Paragraph>
            <Underline>{t('pages.home.underline')}</Underline>
          </Paragraph>
          <Paragraph>
            <Code>{t('pages.home.code')}</Code>
          </Paragraph>
          <Paragraph>
            {t('pages.home.animated-svg')}: <br />
            <AnimatedSomeSVG />
          </Paragraph>
        </Container>
      </StyledIndexPage>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

export const query = graphql`
  query ($language: String!) {
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
