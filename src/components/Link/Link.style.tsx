import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from '@herob191/gatsby-plugin-react-i18next';

const linkStyle = css`
  transition: all 100ms;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const InternalLink = styled(GatsbyLink)`
  ${linkStyle}
`;
