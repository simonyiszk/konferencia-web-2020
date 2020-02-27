/** @jsx jsx */

import { Box, Text } from '@chakra-ui/core';
import { jsx } from '@emotion/core';

export default function(): JSX.Element {
  return (
    <Box bg="#085573" py={[8, 8, 16]} px={[4, 4, 16, 32, 64]}>
      <Text
        color="white"
        fontSize="4xl"
        textAlign="center"
        maxW="777px"
        m="auto"
      >
        A Simonyi Konferencia Magyarország
        <br />
        legnagyobb,
        <br />
        kizárólag egyetemi hallgatók által szervezett éves szakmai rendezvénye.
      </Text>
    </Box>
  );
}
