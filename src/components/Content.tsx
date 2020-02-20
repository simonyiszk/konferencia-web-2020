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
import { findRenderedComponentWithType } from 'react-dom/test-utils';

import favicon from '../assets/favicon.png';
import { placeholderData, stackedPlaceholderData } from '../data/data';

const lists = stackedPlaceholderData.map(function content(item, index) {
  const bg = `${theme.colors.purple[900]}77`;
  return (
    <PseudoBox
      as={Flex}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      bg={bg}
      p={4}
      mt={16}
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      justifyContent="flex-start"
      _first={{ marginTop: 4 }}
      _odd={{
        marginLeft: [4, 12, 24, 64],
        marginRight: 0,
        borderRadius: '42px 0px 0px 42px',
      }}
      _even={{
        marginLeft: 0,
        marginRight: [4, 12, 24, 64],
        borderRadius: '0px 42px 42px 0px',
        flexDirection: ['column', 'column', 'row-reverse'],
      }}
    >
      <Flex direction="column" align="center" m={4}>
        <Image src={favicon} maxW={32} maxH={32} minW={16} minH={16} p={4} />
        <Heading as="h4" size="sm" textAlign="center">
          {item[3]}
        </Heading>
      </Flex>

      <Flex
        px={4}
        maxW="100ch"
        direction="column"
        align={['center', 'center', 'flex-start']}
        justify="center"
      >
        <Box
          as="h2"
          color="#252241"
          bg="gray.50"
          py={1}
          px={4}
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="2xl"
          mb={6}
        >
          {item[2]}
        </Box>
        <Box
          as="h3"
          color="blood.50"
          textTransform="uppercase"
          fontSize="md"
          letterSpacing={2}
          mb={4}
          fontWeight={600}
        >
          {item[0]} - {item[1]}
        </Box>
        <Box>{item[4]}</Box>
      </Flex>
      <Box w={[0, 150]} minW={[0, 150]} />
    </PseudoBox>
  );
});

export default function Content(): JSX.Element {
  const bg = `${theme.colors.purple[900]}77`;

  return <Box>{lists}</Box>;
}
