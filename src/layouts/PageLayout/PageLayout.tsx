import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Content, StyledPageLayout } from './PageLayout.style';

const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StyledPageLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledPageLayout>
  );
};

export default PageLayout;
