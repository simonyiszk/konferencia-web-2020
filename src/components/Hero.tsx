import { Box, Image } from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';
import { Parallax } from 'react-skrollr';
import Sticky from 'react-sticky-el';

import HeroLayer4 from '../assets/konf.png';
import HeroBG from '../assets/star_PNG76860.png';
import HeroLayer1 from '../assets/top-layer-1.png';
import HeroLayer2 from '../assets/top-layer-2.png';
import HeroLayer6 from '../assets/top-layer-6.png';
import { ParallaxHeroImage } from './Components';
import {
  Parallax3DGroup,
  Parallax3DLayerBack,
  Parallax3DLayerDeep,
  Parallax3DLayerFore,
} from './Parallax3D';

export function Hero(): JSX.Element {
  return (
    <Box
      as="header"
      m={0}
      p={0}
      h={[
        'calc(calc(var(--vh, 1vh) * 100) - 66px)',
        'calc(calc(var(--vh, 1vh) * 100) - 66px)',
        'calc(calc(var(--vh, 1vh) * 100) - 78px)',
      ]}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      // height={['93vh', '93vh', 'calc(100vh - 78px)']}
      /* css={css`
        height: calc(100vh - 78px);
      `} */
    >
      <Parallax3DGroup>
        <Parallax3DLayerFore zIndex="40">
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            zIndex="40"
          >
            <Image src={HeroLayer2} w="130vw" maxW="unset" zIndex="40" />
          </Box>
        </Parallax3DLayerFore>

        <Parallax3DLayerBack zIndex="30">
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            zIndex="30"
          >
            <Image src={HeroLayer4} w="100vw" maxW="unset" zIndex="30" />
          </Box>
        </Parallax3DLayerBack>
        <Parallax3DLayerDeep zIndex="20">
          <Box
            css={{ textAlign: 'center' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            zIndex="20"
          >
            <Image src={HeroLayer6} w="130vw" maxW="unset" zIndex="20" />
          </Box>
        </Parallax3DLayerDeep>
      </Parallax3DGroup>
    </Box>
  );
}

export function Hero2(): JSX.Element {
  return (
    <Box
      as="header"
      m={0}
      p={0}
      h={[
        'calc(calc(var(--vh, 1vh) * 100) - 66px)',
        'calc(calc(var(--vh, 1vh) * 100) - 66px)',
        'calc(calc(var(--vh, 1vh) * 100) - 78px)',
      ]}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      // height={['93vh', '93vh', 'calc(100vh - 78px)']}
      /* css={css`
        height: calc(100vh - 78px);
      `} */
    >
      <ParallaxHeroImage
        background={HeroLayer6}
        backgroundSize="1920px 214px"
        height="214px"
        top={['100px', '200px', '350px']}
        speed="300px"
        zIndex={-3}
      />

      <ParallaxHeroImage
        background={HeroLayer4}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['0px', '0px', '-220px']}
        speed="0px"
        left={['-200px', '-100px', '0px']}
        zIndex={-2}
      />

      <ParallaxHeroImage
        background={HeroLayer2}
        backgroundSize="1920px 280px"
        height="280px"
        top="650px"
        speed="-300px"
        zIndex={-1}
      />
    </Box>
  );
}
