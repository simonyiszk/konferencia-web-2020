import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './Header';
import { Parallax3DProvider } from './Parallax3D';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          languageCode
          countryCode
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
      >
        <html lang={data.site.siteMetadata.languageCode} />
        <meta name="description" content={data.site.siteMetadata.description} />

        <meta
          property="og:locale"
          content={`${data.site.siteMetadata.languageCode}_${data.site.siteMetadata.countryCode}`}
        />
      </Helmet>

      <Parallax3DProvider>
        <header css={{ transformStyle: 'preserve-3d' }}>
          <Header />
        </header>

        <main>{children}</main>

        <footer>{/* TODO */}</footer>
      </Parallax3DProvider>
    </React.StrictMode>
  );
}
