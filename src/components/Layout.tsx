/** @jsx jsx */

import {
  Box,
  ColorModeProvider,
  ThemeProvider,
  useColorMode,
} from '@chakra-ui/core';
import { css, Global, jsx } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import customTheme from '../gatsby-plugin-chakra-ui/theme';
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

  function Dark(): null {
    const { colorMode, toggleColorMode } = useColorMode();
    if (colorMode === 'light') {
      toggleColorMode();
    }
    return null;
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
      {/*
      <Global
        styles={css`
          * {
            transform-style: preserve-3d;
          }
        `}
      />
      */}
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <Dark />

          <Parallax3DProvider>
            <Hero />

            <NavBar />

            <Box as="main">{children}</Box>

            <footer>{/* TODO */}</footer>
          </Parallax3DProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
