/** @jsx jsx */

import { Box } from '@chakra-ui/core';
import { css, jsx } from '@emotion/core';
import { Parallax } from 'react-skrollr';

interface PProps {
  background: string;
  backgroundSize: string;
  height: string;
  top: string;
  speed: string;
}

export function ParallaxHeroImage({
  background,
  backgroundSize,
  height,
  top,
  speed,
  ...props
}: PProps): JSX.Element {
  return (
    <Parallax
      data={{
        'data-0': 'transform:translateY(0px);',
        'data-1100': `transform:translateY(${speed});`,
      }}
    >
      <Box
        m={0}
        p={0}
        left={0}
        right={0}
        position="absolute"
        backgroundImage={`url('${background}')`}
        backgroundSize={`${backgroundSize}`}
        height={`${height}`}
        top={`${top}`}
        willChange="transform"
        {...props}
      />
    </Parallax>
  );
}

export function ParallaxImage2({ background, ...props }: PProps): JSX.Element {
  return (
    <Box
      m={0}
      p={0}
      w="100vw"
      overflowX="hidden"
      overflowY="scroll"
      css={css`
        -webkit-overflow-scrolling: touch;

        transform-style: preserve-3d;

        * {
          transform-style: preserve-3d;
        }
      `}
      {...props}
    />
  );
}
