import React from 'react';
import { useSiteMetadata } from 'hooks/use-site-metadata';

interface SEOProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
  pathname?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, children, pathname }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${defaultTitle} | ${title}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name={'description'} content={seo.description} />
      {/* Facebook Meta Tags */}
      <meta property={'og:url'} content={seo.url} />
      <meta property={'og:type'} content={'website'} />
      <meta property={'og:image'} content={image} />
      {/* Twitter Meta Tags */}
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta property={'twitter:url'} content={seo.url} />
      <meta name={'twitter:title'} content={seo.title} />
      <meta name={'twitter:description'} content={seo.description} />
      <meta name={'twitter:image'} content={image} />
      {children}
    </>
  );
};

export default SEO;
