import React from 'react';
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Italic,
  Paragraph,
} from 'components/Typography';

const MarkdownComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading1 {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading2 {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading3 {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading4 {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading5 {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <Paragraph {...props} />,
  strong: (props: React.HTMLAttributes<HTMLParagraphElement>) => <Bold {...props} />,
  em: (props: React.HTMLAttributes<HTMLParagraphElement>) => <Italic {...props} />,
};
export default MarkdownComponents;
