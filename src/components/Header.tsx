import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';
import { Parallax, ParallaxContext } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import HeroBG from '../assets/star_PNG76860.png';
import customTheme from '../gatsby-plugin-chakra-ui/theme';
import {
  Parallax3DGroup,
  Parallax3DLayerBack,
  Parallax3DLayerFore,
  Parallax3DProvider,
} from './Parallax3D';

export default function Header(): JSX.Element {
  return (
    <Box m={0} p={0} h="100vh" css={{ transformStyle: 'preserve-3d' }}>
      <Parallax3DGroup>
        <Parallax3DLayerBack>
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            asd
          </Box>
        </Parallax3DLayerBack>
        <Parallax3DLayerFore>
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            asd
          </Box>
        </Parallax3DLayerFore>
      </Parallax3DGroup>

      <Image src={HeroBG} w="100vw" maxW="100%" />

      <Box
        m={0}
        p={0}
        position="absolute"
        bottom={0}
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
