import React from 'react';
import { Container } from 'components/Container';
import { StyledBasicLayout } from './BasicLayout.style';

const BasicLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StyledBasicLayout>
      <Container $fluid $widthAuto>
        {children}
      </Container>
    </StyledBasicLayout>
  );
};

export default BasicLayout;
