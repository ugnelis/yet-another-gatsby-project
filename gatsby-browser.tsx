import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Theme } from './src/theme';
import { Global } from './src/components/Global';

// TODO: remove this when `gatsby-plugin-react-svg` is updated
const error = console.error;
console.error = (...args: any[]) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      {element}
    </ThemeProvider>
  );
};
