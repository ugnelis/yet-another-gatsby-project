import styled from 'styled-components';

export const StyledBrand = styled.div`
  display: flex;

  svg {
    fill: ${({ theme }) => theme.colors.accent2};
    height: 1.5rem;
  }
`;
