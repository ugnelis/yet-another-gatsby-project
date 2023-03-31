import React from 'react';
import type { PageProps } from 'gatsby';
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  InternalLink,
  Italic,
  Link,
  Paragraph,
  Underline,
} from 'components/Typography';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Heading3>Heading3</Heading3>
      <Heading4>Heading4</Heading4>
      <Heading5>Heading5</Heading5>
      <Heading6>Heading6</Heading6>
      <Paragraph>Paragraph</Paragraph>
      <Paragraph>
        <Link>Link</Link>
      </Paragraph>
      <Paragraph>
        <InternalLink to={'/'}>Internal Link</InternalLink>
      </Paragraph>
      <Paragraph>
        <Bold>Bold</Bold>
      </Paragraph>
      <Paragraph>
        <Italic>Italic</Italic>
      </Paragraph>
      <Paragraph>
        <Underline>Underline</Underline>
      </Paragraph>
      <Paragraph>
        <Code>Code</Code>
      </Paragraph>
    </>
  );
};

export default IndexPage;
