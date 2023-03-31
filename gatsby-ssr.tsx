import React from 'react';
import type { GatsbySSR } from 'gatsby';

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
