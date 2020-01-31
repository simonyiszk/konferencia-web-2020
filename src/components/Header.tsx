import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';

import HeroBG from '../assets/star_PNG76860.png';
import customTheme from '../gatsby-plugin-chakra-ui/theme';

export default function Header(): JSX.Element {
  return (
    <Box m={0} p={0} h="100vh">
      <Image src={HeroBG} w="100vw" maxW="100%" />
      <Box
        m="auto"
        p={4}
        bg="gray.900"
        position="absolute"
        bottom="0px"
        w="100vw"
        maxW="100%"
        zIndex="sticky"
      >
        <Flex flexDirection="row" maxWidth="66vw" align="center" m="auto">
          <Heading as="h3" m="auto">
            Előadók
          </Heading>
          <Heading as="h3" m="auto">
            Szervezők
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
}
