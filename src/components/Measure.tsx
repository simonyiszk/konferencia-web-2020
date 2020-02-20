import { Box, BoxProps } from '@chakra-ui/core';
import React from 'react';

export interface MeasureProps extends BoxProps {
  maxWidth?: NonNullable<React.CSSProperties['maxWidth']>;
}

export function Measure({
  maxWidth = '77ch',
  ...restProps
}: MeasureProps): JSX.Element {
  return <Box maxWidth={maxWidth} {...restProps} />;
}
