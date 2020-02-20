import { Box, Image } from '@chakra-ui/core';
import React from 'react';
import { Parallax, ParallaxContext } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import HeroBG from '../assets/star_PNG76860.png';
import customTheme from '../gatsby-plugin-chakra-ui/theme';
import {
  Parallax3DGroup,
  Parallax3DLayerBack,
  Parallax3DLayerDeep,
  Parallax3DLayerFore,
} from './Parallax3D';

export default function Hero(): JSX.Element {
  return (
    <Box as="header" m={0} p={0} h="calc(100vh - 77px)">
      <Parallax3DGroup>
        <Parallax3DLayerBack>
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Image src={HeroBG} w="100vw" maxW="unset" />
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
            <Image
              src={HeroBG}
              w="150vw"
              maxW="unset"
              transform="translate(-50px, -50px)"
            />
          </Box>
        </Parallax3DLayerFore>
        <Parallax3DLayerDeep>
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Image
              src={HeroBG}
              w="100vw"
              maxW="unset"
              transform="translate(50px, 50px)"
            />
          </Box>
        </Parallax3DLayerDeep>
      </Parallax3DGroup>
    </Box>
  );
}
