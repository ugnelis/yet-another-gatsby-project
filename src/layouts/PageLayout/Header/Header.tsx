import React from 'react';
import { StyledHeader } from './Header.style';
import { Container } from 'components/Container';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>Header</Container>
    </StyledHeader>
  );
};
export default Header;
