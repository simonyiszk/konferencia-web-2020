import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  PseudoBox,
  useDisclosure,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';

import Logo from '../assets/logod.png';
import LogoText from '../assets/logotextfullw.png';
import { navBarData } from '../data/data';

export default function NavBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      as="nav"
      m={0}
      p={0}
      position="sticky"
      top={0}
      minH={['66px', '66px', '78px']}
      maxH={['66px', '66px', '78px']}
      h={['66px', '66px', '78px']}
      w="100vw"
      maxW="100%"
      zIndex="sticky"
    >
      <Box
        m="auto"
        p={['0.25em', '0.5em', '1em']}
        bg="purple.900"
        minH={['66px', '66px', '78px']}
        maxH={['66px', '66px', '78px']}
        h={['66px', '66px', '78px']}
      >
        <Flex
          m="auto"
          mx={['auto', 'auto', '4em', '8em', '16em']}
          align="center"
          direction="row"
          display={['none', 'none', 'flex']}
        >
          <Box maxH={46}>
            <Image
              src={Logo}
              maxH="inherit"
              display={['inherit', 'inherit', 'inherit', 'none']}
            />
            <Image
              src={LogoText}
              maxH="inherit"
              display={['none', 'none', 'none', 'inherit']}
            />
          </Box>
          <Flex
            position="absolute"
            right={0}
            mr={['auto', 'auto', '4em', '8em', '16em']}
            direction="row"
          >
            {navBarData.map(item => (
              <PseudoBox
                as={(props): JSX.Element => (
                  <Heading as="h3" fontSize="lg" {...props} />
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
        <Flex
          mx="auto"
          my="auto"
          align="center"
          justify="space-evenly"
          position="absolute"
          p={['0.25em', '0.5em', '1em']}
          top={0}
          bottom={0}
          left={0}
          right={0}
          display={['flex', 'flex', 'none']}
        >
          <Box
            minH={['32px', '32px']}
            maxH={['32px', '32px']}
            h={['32px', '32px']}
          >
            <Image src={Logo} maxH="inherit" />
          </Box>
          {navBarData.map(item => (
            <PseudoBox
              as={(props): JSX.Element => (
                <Heading as="h3" fontSize={['0.66em', '0.875em']} {...props} />
              )}
              key={item}
              px={['0.25em', '0.5em']}
              my="auto"
              _first={{ paddingLeft: 0 }}
              _last={{ paddingRight: 0 }}
            >
              {item}
            </PseudoBox>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
