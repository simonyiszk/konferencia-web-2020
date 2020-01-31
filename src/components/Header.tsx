import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';

import HeroBG from '../assets/star_PNG76860.png';

export default function Header() {
  return (
    <Box m={0} py={4} bg="gray">
      <Flex flexDirection="row" maxWidth="66vw" align="center" m="auto">
        <Heading as="h3" m="auto">
          Előadók
        </Heading>
        <Heading as="h3" m="auto">
          Szervezők
        </Heading>
      </Flex>
    </Box>
  );
}
