/** @jsx jsx */

import { Box, Text } from '@chakra-ui/core';
import { css, jsx } from '@emotion/core';
import React from 'react';

export default function(): JSX.Element {
  return (
    <Box bg="#F47E25" py={[8, 8, 16]} px={[4, 4, 16, 32, 64]}>
      <Text
        color="white"
        fontSize="4xl"
        bg="blood.50"
        p={4}
        textTransform="uppercase"
        w="fit-content"
        m="auto"
      >
        Regisztráció
      </Text>
    </Box>
  );
}
