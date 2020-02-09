import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  PseudoBox,
  theme,
} from '@chakra-ui/core';
import { css, Interpolation } from '@emotion/core';
import React from 'react';

import favicon from '../assets/favicon.png';
import { placeholderData, stackedPlaceholderData } from '../data/data';

export function GridContent(): JSX.Element {
  return (
    <Box>
      <Grid templateColumns="minmax(1.2rem, 1fr) minmax(auto, 77ch) minmax(1.2rem, 1fr)">
        <Box gridColumn={2}>{placeholderData[1]}</Box>
        <Box gridColumn={2}>{placeholderData[1]}</Box>
        <Box gridColumn={2}>{placeholderData[1]}</Box>
        <Box gridColumn={2}>{placeholderData[1]}</Box>
        <Box gridColumn={2}>{placeholderData[1]}</Box>
      </Grid>
    </Box>
  );
}

export function Content(): JSX.Element {
  const bg = `${theme.colors.purple[900]}77`;

  return (
    <Box>
      {stackedPlaceholderData.map(item => (
        <PseudoBox
          as={(props): JSX.Element => <Flex {...props} />}
          bg={bg}
          key={item}
          p={4}
          mt={16}
          direction="row"
          align="center"
          justify="center"
          css={css`
            @media screen and (max-width: 830px) {
              flex-direction: column;
            }
          `}
          _first={{ marginTop: 4 }}
          _odd={{
            marginLeft: '9vw',
            marginRight: 0,
            borderRadius: '42px 0px 0px 42px',
          }}
          _even={{
            marginLeft: 0,
            marginRight: '9vw',
            borderRadius: '0px 42px 42px 0px',
            flexDirection: 'row-reverse',
          }}
        >
          <Flex direction="column" align="center">
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

          <Box px={4} maxW="77ch" textAlign="justify">
            {item[1]}
          </Box>
        </PseudoBox>
      ))}
    </Box>
  );
}
