/** @jsx jsx */

import { Box, Heading, Text } from '@chakra-ui/core';
import { jsx } from '@emotion/core';

export default function(): JSX.Element {
  return (
    <Box bg="tertiary" py={[8, 8, 16]} px={[4, 4, 16, 32, 64]}>
      <Heading
        as="h1"
        color="white"
        fontSize="4xl"
        bg="blood.50"
        p={4}
        textTransform="uppercase"
        w="fit-content"
        m="auto"
      >
        Regisztráció
      </Heading>
    </Box>
  );
}
