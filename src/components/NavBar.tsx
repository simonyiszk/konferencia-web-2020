import { Flex, Heading } from '@chakra-ui/core';
import Box from '@chakra-ui/core/dist/Box';
import React from 'react';

export default function NavBar(): JSX.Element {
  return (
    <Box
      as="nav"
      m={0}
      p={0}
      position="sticky"
      top={0}
      w="100vw"
      maxW="100%"
      zIndex="sticky"
    >
      <Box m="auto" p={4} bg="gray.900">
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
