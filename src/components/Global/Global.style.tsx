import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'theme';

const Global = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-style: normal;
    font-stretch: normal;
    font-family: ${({ theme }) => theme.typography.sansSerifFontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    color: ${({ theme }) => theme.typography.color};
    line-height: ${({ theme }) => theme.typography.lineHeight};
  }

  #___gatsby, #gatsby-focus-wrapper {
    all: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  ul, menu, dir {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }

  *:focus, *:active {
    outline: 0 !important;
  }

  a, button {
    transition: all 0.3s;
  }

  input, textarea {
    margin: 0;
    border: none;
  }
`;

export default Global;
