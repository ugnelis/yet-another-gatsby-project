import React from 'react';
import { useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { Container } from 'components/Container';
import { StyledFooter } from './Footer.style';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Container>{t('layouts.page-layout.footer.title')} </Container>
    </StyledFooter>
  );
};

export default Footer;
