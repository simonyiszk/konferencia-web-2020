import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Parallax3DProvider({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      m={0}
      p={0}
      h="100vh"
      overflowX="hidden"
      overflowY="scroll"
      css={{ perspective: '300px' }}
    >
      {children}
    </Box>
  );
}

export function Parallax3DGroup(): JSX.Element {
  return (
    <Box
      position="relative"
      height="100vh"
      css={{ transformStyle: 'preserve-3d' }}
      fontSize="200%"
      transform="translate3d(700px, 0, -800px) rotateY(30deg)"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        transform="translateZ(90px) scale(.7)"
        boxShadow="0 0 0 2px #000"
      >
        <div
          css={{ textAlign: 'center' }}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        >
          asd
        </div>
      </Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        transform="translateZ(-300px) scale(2)"
        boxShadow="0 0 0 2px #000"
      >
        <div
          css={{ textAlign: 'center' }}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        >
          asd
        </div>
      </Box>
    </Box>
  );
}
