import styled from 'styled-components';
import { ThemeType } from 'theme';

export const StyledHeader = styled.header<{ theme: ThemeType }>`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.faded};
  padding: 1rem;
`;
