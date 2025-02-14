import styled, { css } from 'styled-components';
import { InternalLink } from 'components/Link';

export const LanguageLink = styled(InternalLink)<{ $selected: boolean }>`
  ${({ $selected }) =>
    $selected &&
    css`
      text-decoration: underline;
      text-decoration-skip-ink: none;
      text-underline-position: from-font;
    `}
`;

export const StyledLocaleSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;
`;
