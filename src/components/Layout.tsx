/* import '../css/all.css'; */

import {
  Box,
  Button,
  ColorModeProvider,
  DarkMode,
  Flex,
  Heading,
  ThemeProvider,
  useColorMode,
} from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import Hero from './Hero';
import NavBar from './NavBar';
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

  function ColorModeExample() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    );
  }

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

      <Global
        styles={css`
          * {
            transform-style: preserve-3d;
          }
        `}
      />
      <ColorModeProvider>
        <Parallax3DProvider>
          <Hero />
          <ColorModeExample />
          <NavBar />

          <main>{children}</main>

          <footer>{/* TODO */}</footer>
        </Parallax3DProvider>
      </ColorModeProvider>
    </React.StrictMode>
  );
}
