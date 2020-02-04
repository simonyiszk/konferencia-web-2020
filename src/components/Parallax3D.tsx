import { Box } from '@chakra-ui/core';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Parallax3DProvider({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      id="Parallax3DProvider"
      m={0}
      p={0}
      h="100vh"
      w="100vw"
      overflowX="hidden"
      overflowY="auto"
      css={{ perspective: '300px' }}
    >
      {children}
    </Box>
  );
}

export function Parallax3DGroup({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      id="Parallax3DGroup"
      m={0}
      p={0}
      position="relative"
      height="100vh"
      css={{ transformStyle: 'preserve-3d' }}
      fontSize="200%"
      pointerEvents="none"
      /* zIndex="-2000" */
      /* transform="translate3d(700px, 0, -800px) rotateY(30deg)" */
    >
      {children}
    </Box>
  );
}

export function Parallax3DLayerFore({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      id="LayerFore"
      m={0}
      p={0}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      transform="translateZ(90px) scale(.7)"
      pointerEvents="auto"
      boxShadow="0 0 0 2px #000"
    >
      {children}
    </Box>
  );
}

export function Parallax3DLayerBack({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      id="LayerBack"
      m={0}
      p={0}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      transform="translateZ(-300px) scale(2)"
      pointerEvents="auto"
      boxShadow="0 0 0 2px #000"
    >
      {children}
    </Box>
  );
}

export function Parallax3DLayerDeep({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      id="LayerDeep"
      m={0}
      p={0}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      transform="translateZ(-600px) scale(3)"
      pointerEvents="auto"
      boxShadow="0 0 0 2px #000"
    >
      {children}
    </Box>
  );
}
