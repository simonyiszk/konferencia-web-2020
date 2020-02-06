import { Box, Flex, Heading, Image, PseudoBox } from '@chakra-ui/core';
import React from 'react';

import Logo from '../assets/Logo.png';
import { navBarData } from '../data/data';

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
      <Box m="auto" p={4} bg="purple.900">
        <Flex m="auto" align="center" direction="row">
          <Box maxH={45}>
            <Image src={Logo} maxH="inherit" />
          </Box>
          <Flex minW={550} position="absolute" right={0} direction="row">
            {navBarData.map(item => (
              <PseudoBox
                as={(props): JSX.Element => (
                  <Heading as="h3" size="lg" {...props} />
                )}
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
