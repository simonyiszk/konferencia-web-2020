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

export function Parallax3DProvider({
  children,
  ...props
}: LayoutProps): JSX.Element {
  return (
    <Box
      id="Parallax3DProvider"
      m={0}
      p={0}
      h="92vh"
      w="100vw"
      overflowX="hidden"
      overflowY="scroll"
      css={css`
        -webkit-overflow-scrolling: touch;
        /*
        transform-style: preserve-3d;
        * {
          transform-style: preserve-3d;
        }
        */
      `}
      {...props}
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
    /*transform-style: preserve-3d;*/
    perspective: 300px;
  `;

  const debugStyle = css`
    transform-style: preserve-3d;
    perspective: 300px;
    & > div {
      box-shadow: 0 0 0 2px #000;
    }
  `;

  const rotateStyle = css`
    transform-style: preserve-3d;
    perspective: 300px;
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
      position="sticky"
      top={0}
      left={0}
      right={0}
      bottom={0}
      transform="translateZ(-12000px) scale(32)"
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
      position="sticky"
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
      position="sticky"
      top={0}
      left={0}
      right={0}
      bottom={0}
      transform="translateZ(-90px) scale(1)"
      pointerEvents="auto"
      {...props}
    >
      {children}
    </Box>
  );
}
