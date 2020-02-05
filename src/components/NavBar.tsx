import { Box, Flex, Heading, Image, PseudoBox } from '@chakra-ui/core';
import React from 'react';

import Logo from '../assets/Logo.png';

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
      <Box m="auto" p={4} bg="gray.500">
        <Flex m="auto" align="center" direction="row">
          <Box maxH={45}>
            <Image src={Logo} maxH="inherit" />
          </Box>
          <Flex position="absolute" right={0} direction="row">
            {['Helyszín', 'Előadók', 'Kapcsolat', 'Támogatók'].map(item => (
              <PseudoBox
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                as={props => <Heading as="h3" size="lg" {...props} />}
                key={item}
                px={4}
                _first={{ paddingLeft: 0 }}
                _last={{ paddingRight: 0 }}
              >
                {item}
              </PseudoBox>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
