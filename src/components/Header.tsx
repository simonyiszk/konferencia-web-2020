import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import React, { Component } from 'react';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import HeroBG from '../assets/star_PNG76860.png';
import customTheme from '../gatsby-plugin-chakra-ui/theme';

export default function Header(): JSX.Element {
  return (
    <Box m={0} p={0} h="100vh">
      <ParallaxProvider>
        <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
          <Image src={HeroBG} /* w="100vw" maxW="100%" */ />
        </Parallax>
        {/*
        <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: 'https://foo.com/foo.jpg',
              amount: 0.1,
            },
            {
              image: 'https://foo.com/bar.png',
              amount: 0.2,
            },
          ]}
          style={{
            height: '500px',
          }}
        >
          <h1>Banner Children</h1>
        </ParallaxBanner>
        */}
      </ParallaxProvider>
      <Box
        m={0}
        p={0}
        position="absolute"
        bottom="0px"
        w="100vw"
        maxW="100%"
        zIndex="sticky"
      >
        <Sticky>
          <Box m="auto" p={4} bg="gray.900">
            <Flex flexDirection="row" maxWidth="66vw" align="center" m="auto">
              <Heading as="h3" m="auto">
                Előadók
              </Heading>
              <Heading as="h3" m="auto">
                Szervezők
              </Heading>
            </Flex>
          </Box>
        </Sticky>
      </Box>
    </Box>
  );
}
