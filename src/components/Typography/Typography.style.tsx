import styled, { css } from 'styled-components';

const HeadingBase = css`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Heading1 = styled.h1`
  ${HeadingBase};
  font-size: calc(1.375rem + 1.5vw);
  text-transform: uppercase;
`;

export const Heading2 = styled.h2`
  ${HeadingBase};
  font-size: calc(1.325rem + 0.9vw);
  text-transform: uppercase;
`;

export const Heading3 = styled.h3`
  ${HeadingBase};
  text-transform: uppercase;
  font-size: calc(1.3rem + 0.6vw);
`;

export const Heading4 = styled.h4`
  ${HeadingBase};
  font-size: calc(1.275rem + 0.3vw);
`;

export const Heading5 = styled.h5`
  ${HeadingBase};
  font-size: 1.25rem;
`;

export const Heading6 = styled.h6`
  ${HeadingBase};
  font-size: 1rem;
`;

export const Bold = styled.b``;

export const Italic = styled.i``;

export const Underline = styled.u``;

export const Code = styled.code`
  overflow-wrap: break-word;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
