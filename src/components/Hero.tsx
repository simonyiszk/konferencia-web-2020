import { Box, Image } from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';
import { Parallax } from 'react-skrollr';
import Sticky from 'react-sticky-el';

import HeroLayer1 from '../assets/hero-layer-1.png';
import HeroLayer2 from '../assets/hero-layer-2.png';
import HeroLayer3 from '../assets/hero-layer-3.png';
import HeroLayer4 from '../assets/hero-layer-4.png';
import HeroLayer5 from '../assets/hero-layer-5.png';
import HeroLayer6 from '../assets/hero-layer-6.png';
import HeroLayer7 from '../assets/hero-layer-7.png';
import HeroLayer8 from '../assets/hero-layer-8.png';
import { ParallaxHeroImage } from './Components';
import {
  Parallax3DGroup,
  Parallax3DLayerBack,
  Parallax3DLayerDeep,
  Parallax3DLayerFore,
} from './Parallax3D';

export default function Hero(): JSX.Element {
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
        background={HeroLayer8}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['0px', '0px', '-220px']}
        speed="0px"
        left={['-200px', '-100px', '0px']}
        zIndex={-8}
      />
      <ParallaxHeroImage
        background={HeroLayer7}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['0px', '0px', '-220px']}
        speed="100px"
        left={['-200px', '-100px', '0px']}
        zIndex={-7}
      />
      <ParallaxHeroImage
        background={HeroLayer6}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['20px', '20px', '-220px']}
        speed="100px"
        left={['-200px', '-100px', '0px']}
        zIndex={-6}
      />

      <ParallaxHeroImage
        background={HeroLayer5}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['30px', '30px', '-112px']}
        speed="-100px"
        left={['-200px', '-100px', '0px']}
        zIndex={-5}
      />

      <ParallaxHeroImage
        background={HeroLayer4}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['60px', '60px', '-112px']}
        speed="200px"
        left={['-200px', '-100px', '0px']}
        zIndex={-4}
      />

      <ParallaxHeroImage
        background={HeroLayer3}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['120px', '120px', '-220px']}
        speed="100px"
        left={['-200px', '-100px', '0px']}
        zIndex={-3}
      />

      <ParallaxHeroImage
        background={HeroLayer2}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        // top={['144px', '95vh', '-100px']}

        bottom={['-100vh', '-100vh', '-100vh']}
        speed="-100px"
        left={['-160px', '-160px', '0px']}
        zIndex={-2}
      />

      <ParallaxHeroImage
        background={HeroLayer1}
        backgroundSize={['640px 360px', '640px 360px', '1920px 1080px']}
        height="1080px"
        top={['0px', '0px', '-400px']}
        speed="300px"
        left={['-200px', '-100px', '0px']}
        zIndex={-1}
      />
    </Box>
  );
}

/*
export function Hero3D(): JSX.Element {
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
      // css={css`
      //   height: calc(100vh - 78px);
      // `}
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
            <Image src={K2020} w="100vw" maxW="unset" zIndex="30" />
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
*/
