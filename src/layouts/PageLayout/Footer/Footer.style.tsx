import styled from 'styled-components';
import { ThemeType } from 'theme';

export const StyledFooter = styled.footer<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inverse};
  color: ${({ theme }) => theme.colors.faded};
  padding: 1rem;
`;
