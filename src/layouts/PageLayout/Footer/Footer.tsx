import React from 'react';
import { useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { Container } from 'components/Container';
import { StyledFooter } from './Footer.style';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const name = t('general.name');

  return (
    <StyledFooter>
      <Container>{t('layouts.page-layout.footer.title', { year, name })}</Container>
    </StyledFooter>
  );
};

export default Footer;
