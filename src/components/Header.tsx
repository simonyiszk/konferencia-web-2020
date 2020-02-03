import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';
import { Parallax, ParallaxContext } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import HeroBG from '../assets/star_PNG76860.png';
import customTheme from '../gatsby-plugin-chakra-ui/theme';

export default function Header(): JSX.Element {
  return (
    <Box m={0} p={0} h="100vh">
      <Parallax className="custom-class" y={[-50, 100]} tagOuter="figure">
        <Image src={HeroBG} w="100vw" maxW="100%" />
      </Parallax>
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
