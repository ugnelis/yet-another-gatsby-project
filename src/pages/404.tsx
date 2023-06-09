import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading1, InternalLink, Paragraph } from 'components/Typography';
import { BasicLayout } from 'layouts/BasicLayout';
import { SEO } from 'components/SEO';
import { StyledNotFoundPage } from './404.style';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <BasicLayout>
      <StyledNotFoundPage>
        <Heading1>Page not found</Heading1>
        <Paragraph>We are sorry, the page you requested could not be found!</Paragraph>
        <InternalLink to={'/'}>Back to home page</InternalLink>
      </StyledNotFoundPage>
    </BasicLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title={'Not found'} />;
