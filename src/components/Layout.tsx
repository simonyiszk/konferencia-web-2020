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
import { Parallax, ParallaxProvider } from 'react-skrollr';
import Sticky from 'react-sticky-el';

import customTheme from '../gatsby-plugin-chakra-ui/theme';
import { Hero2 } from './Hero';
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

  if (typeof window !== 'undefined') {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  return (
    <React.Fragment>
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

      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <Dark />

          <ParallaxProvider
            init={{
              smoothScrollingDuration: 1,
              smoothScrolling: false,
              forceHeight: false,
            }}
            disableOnMobile={false}
            /*
            h={[
              'calc(var(--vh, 1vh) * 100)',
              'calc(var(--vh, 1vh) * 100)',
              '100vh',
            ]}
            */
            w="100vw"
          >
            <Hero2 />

            <NavBar />

            <Box as="main">{children}</Box>

            <footer>{/* TODO */}</footer>
          </ParallaxProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
