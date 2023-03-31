import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Theme } from './src/theme';
import { Global } from './src/components/Global';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      {element}
    </ThemeProvider>
  );
};
