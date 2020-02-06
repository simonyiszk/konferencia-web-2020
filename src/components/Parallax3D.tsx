import { Box } from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

interface GroupProps {
  children: React.ReactNode;
  debug?: boolean;
  rotate?: boolean;
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

export function Parallax3DGroup({
  children,
  debug,
  rotate,
  ...props
}: GroupProps): JSX.Element {
  const normalStyle = css`
    transform-style: preserve-3d;
  `;

  const debugStyle = css`
    transform-style: preserve-3d;
    & > div {
      box-shadow: 0 0 0 2px #000;
    }
  `;

  const rotateStyle = css`
    transform-style: preserve-3d;
    transform: translate3d(700px, 0, -800px) rotateY(30deg);
    & > div {
      box-shadow: 0 0 0 2px #000;
    }
  `;
  let selectedStyle = normalStyle;

  if (debug) {
    selectedStyle = debugStyle;
  }
  if (rotate) {
    selectedStyle = rotateStyle;
  }

  return (
    <Box
      id="Parallax3DGroup"
      m={0}
      p={0}
      position="relative"
      height="100vh"
      css={selectedStyle}
      fontSize="200%"
      pointerEvents="none"
      /* zIndex="-2000" */
      /* transform="translate3d(700px, 0, -800px) rotateY(30deg)" */
      {...props}
    >
      {children}
    </Box>
  );
}

export function Parallax3DLayerFore({
  children,
  ...props
}: LayoutProps): JSX.Element {
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
      {...props}
    >
      {children}
    </Box>
  );
}

export function Parallax3DLayerBack({
  children,
  ...props
}: LayoutProps): JSX.Element {
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
      {...props}
    >
      {children}
    </Box>
  );
}

export function Parallax3DLayerDeep({
  children,
  ...props
}: LayoutProps): JSX.Element {
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
      {...props}
    >
      {children}
    </Box>
  );
}
