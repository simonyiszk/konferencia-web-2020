import { Box, Flex, Heading, Image, PseudoBox } from '@chakra-ui/core';
import { Interpolation } from '@emotion/core';
import React from 'react';

import favicon from '../assets/favicon.png';
import { stackedPlaceholderData } from '../data/data';

export default function Content(): JSX.Element {
  return (
    <Box>
      {stackedPlaceholderData.map(item => (
        <PseudoBox
          as={(props): JSX.Element => <Box {...props} />}
          bg="#252341"
          key={item}
          p={4}
          mt={16}
          css={(theme): Interpolation => ({
            backgroundColor: `${theme.colors.purple[900]}77`,
          })}
          _first={{ marginTop: 4 }}
          _odd={{
            marginLeft: 32,
            marginRight: 0,
            paddingRight: '9rem',
            borderRadius: '42px 0px 0px 42px',
          }}
          _even={{
            marginLeft: 0,
            marginRight: 32,
            paddingLeft: '9rem',
            borderRadius: '0px 42px 42px 0px',
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
