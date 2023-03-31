import React from 'react';
import type { GatsbySSR } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Theme } from './src/theme';
import { Global } from './src/components/Global';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel={'stylesheet preload prefetch'}
      href={'/fonts/open-sans.css'}
      as={'style'}
      crossOrigin={'anonymous'}
      key={'open-sans'}
    />,
    <link
      rel={'stylesheet preload prefetch'}
      href={'/fonts/space-mono.css'}
      as={'style'}
      crossOrigin={'anonymous'}
      key={'space-mono'}
    />,
  ]);
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      {element}
    </ThemeProvider>
  );
};
