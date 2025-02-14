import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { Heading1, Paragraph } from 'components/Typography';
import { InternalLink } from 'components/Link';
import { BasicLayout } from 'layouts/BasicLayout';
import { SEO } from 'components/SEO';
import { CustomPageProps, parseLocalesData } from 'helpers/page';
import { StyledNotFoundPage } from './404.style';

interface NotFoundPageProps extends CustomPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const { t } = useTranslation();

  return (
    <BasicLayout>
      <StyledNotFoundPage>
        <Heading1>{t('pages.not-found.title')}</Heading1>
        <Paragraph>{t('pages.not-found.description')}</Paragraph>
        <InternalLink to={'/'}>{`${t('pages.not-found.return')} ->`}</InternalLink>
      </StyledNotFoundPage>
    </BasicLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC<NotFoundPageProps> = ({ data }) => {
  const localesData = parseLocalesData(data);
  const title = localesData.pages?.['not-found']?.title || 'Page Not Found';
  return <SEO title={title} />;
};

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
