import { Box, Flex, Heading, Image, PseudoBox } from '@chakra-ui/core';
import React from 'react';

import favicon from '../assets/favicon.png';
import { stackedPlaceholderData } from '../data/data';

export default function Content(): JSX.Element {
  const asd = stackedPlaceholderData[0][0];
  const i = 0;
  return (
    <Box>
      {stackedPlaceholderData.map(item => (
        <PseudoBox
          as={(props): JSX.Element => (
            <Box
              bg="purple.900"
              p={4}
              ml={32}
              mt={16}
              pr={32}
              borderRadius="0px 42px 42px 0px"
              {...props}
            />
          )}
          key={item}
          p={4}
          _odd={{
            marginLeft: 0,
            marginRight: 32,
            paddingLeft: 32,
            borderRadius: '0px 42px 42px 0px',
          }}
          _even={{
            marginLeft: 32,
            marginRight: 0,
            paddingRight: 32,
            borderRadius: '42px 0px 0px 42px',
          }}
        >
          <Flex direction="row" align="center">
            <Box>
              <Flex direction="column">
                <Image
                  src={favicon}
                  maxW={32}
                  maxH={32}
                  minW={16}
                  minH={16}
                  p={4}
                />
                <Heading as="h4" size="md" textAlign="center">
                  {item[0]}
                </Heading>
              </Flex>
            </Box>
            <Box pl={4}>{item[1]}</Box>
          </Flex>
        </PseudoBox>
      ))}
    </Box>
  );
}
