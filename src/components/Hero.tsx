import { Box, Image } from '@chakra-ui/core';
import React from 'react';
import { Parallax, ParallaxContext } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';

import HeroBG from '../assets/star_PNG76860.png';
import HeroLayer1 from '../assets/top-layer-1.png';
import HeroLayer2 from '../assets/top-layer-2.png';
import HeroLayer4 from '../assets/top-layer-4.png';
import HeroLayer6 from '../assets/top-layer-6.png';
import {
  Parallax3DGroup,
  Parallax3DLayerBack,
  Parallax3DLayerDeep,
  Parallax3DLayerFore,
} from './Parallax3D';

export default function Hero(): JSX.Element {
  return (
    <Box as="header" m={0} p={0} h="calc(100% - 78px)">
      <Parallax3DGroup>
        <Parallax3DLayerDeep>
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Image
              src={HeroLayer6}
              w="130vw"
              maxW="unset"
              transform="translate(50px, 50px)"
            />
          </Box>
        </Parallax3DLayerDeep>
        <Parallax3DLayerBack>
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Image src={HeroLayer4} w="100vw" maxW="unset" />
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
              src={HeroLayer2}
              w="130vw"
              maxW="unset"
              transform="translate(-50px, -50px)"
            />
          </Box>
        </Parallax3DLayerFore>
      </Parallax3DGroup>
    </Box>
  );
}
