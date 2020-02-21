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
      position="absolute"
      bottom={0}
      minH={['45px', '77px']}
      maxH={['45px', '77px']}
      h={['45px', '77px']}
      w="100vw"
      maxW="100%"
      zIndex="sticky"
    >
      <Box
        m="auto"
        p={4}
        bg="purple.900"
        minH={['45px', '77px']}
        maxH={['45px', '77px']}
        h={['45px', '77px']}
      >
        <Flex
          m="auto"
          mx={['auto', 'auto', '4em', '8em', '16em']}
          align="center"
          direction="row"
          display={['none', 'none', 'flex']}
        >
          <Box maxH={45}>
            <Image src={LogoText} maxH="inherit" />
          </Box>
          <Flex
            position="fixed"
            right={0}
            mr={['auto', 'auto', '4em', '8em', '16em']}
            direction="row"
          >
            {navBarData.map(item => (
              <PseudoBox
                as={(props): JSX.Element => (
                  <Heading as="h3" size="md" {...props} />
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
          align="center"
          justify="center"
          display={['flex', 'flex', 'none']}
        >
          <Box
            minH={['13px', '45px']}
            maxH={['13px', '45px']}
            h={['13px', '45px']}
            mr={4}
          >
            <Image src={Logo} maxH="inherit" />
          </Box>
          {navBarData.map(item => (
            <PseudoBox
              as={(props): JSX.Element => (
                <Heading as="h3" fontSize={['0.66em', '0.875em']} {...props} />
              )}
              key={item}
              px={2}
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
