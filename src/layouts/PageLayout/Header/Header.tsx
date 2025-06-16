import React from 'react';
import { Container } from 'components/Container';
import { LocaleSwitcher } from 'components/LocaleSwitcher';
import { Brand } from 'components/Brand';
import { StyledHeader } from './Header.style';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container $row>
        <Brand />
        <LocaleSwitcher />
      </Container>
    </StyledHeader>
  );
};

export default Header;
