import React from 'react';
import { useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { Container } from 'components/Container';
import { LocaleSwitcher } from 'components/LocaleSwitcher';
import { StyledHeader } from './Header.style';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <Container $row>
        {t('layouts.page-layout.header.title')} <LocaleSwitcher />
      </Container>
    </StyledHeader>
  );
};

export default Header;
