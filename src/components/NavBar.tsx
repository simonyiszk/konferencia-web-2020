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
      w="100vw"
      maxW="100%"
      zIndex="sticky"
    >
      <Box m="auto" p={4} bg="purple.900">
        <Flex m="auto" align="center" direction="row">
          <Box maxH={45}>
            <Image src={Logo} maxH="inherit" />
          </Box>
          <Flex
            position="absolute"
            right={0}
            direction="row"
            display={['none', 'none', 'inherit']}
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
          <Button
            ref={btnRef}
            variantColor="teal"
            onClick={onOpen}
            position="absolute"
            right={0}
            display={['block', 'block', 'none']}
            cursor="pointer"
            bg="purple.900"
            _hover={{ bg: 'purple.900' }}
            _active={{ bg: 'purple.900' }}
            css={css`
              transform-style: flat;
            `}
          >
            <Box w="45px" h="1px" bg="white" />
            <Box w="45px" h="1px" my={2} bg="white" />
            <Box w="45px" h="1px" bg="white" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            position="absolute"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <Flex direction="column" display="inherit">
                {navBarData.map(item => (
                  <PseudoBox
                    as={(props): JSX.Element => (
                      <Heading as="h3" size="md" {...props} />
                    )}
                    key={item}
                    color="white"
                    px={4}
                    py={2}
                    _first={{
                      marginTop: 8,
                    }}
                  >
                    {item}
                  </PseudoBox>
                ))}
              </Flex>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Box>
  );
}
