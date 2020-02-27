/** @jsx jsx */

import { Box, Flex, Grid, Image, Text } from '@chakra-ui/core';
import { css, jsx } from '@emotion/core';
import React from 'react';

import img1 from '../assets/favicon.png';

export default function(): JSX.Element {
  return (
    <Box bg="white" py={[8, 8, 16]} px={[4, 4, 16, 32, 64]} mt={16}>
      <Text color="blood.50" fontSize="4xl" textAlign="center" mb={8}>
        Kapcsolat
      </Text>
      <Grid
        templateColumns="repeat(auto-fill, 280px)"
        gap={8}
        m="auto"
        justifyContent="center"
        justifyItems="center"
        minW="280px"
      >
        <Flex direction="column" maxW="280px" alignItems="center">
          <Image src={img1} maxW="240px" maxH="240px" m="auto" />
          <Text color="black" fontSize="2xl" pt={6}>
            Mike Wazovsky
          </Text>
          <Text
            color="secondary"
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="bold"
            pb={2}
          >
            sajtófelelős
          </Text>
          <Text
            as="a"
            href="mailto:mike.wazowsky@simonyi.bme.hu"
            color="blood.50"
            fontSize="md"
          >
            mike.wazowsky@simonyi.bme.hu
          </Text>
        </Flex>
        <Flex direction="column" maxW="280px" alignItems="center">
          <Image src={img1} maxW="240px" maxH="240px" m="auto" />
          <Text color="black" fontSize="2xl" pt={6}>
            Mike Wazovsky
          </Text>
          <Text
            color="secondary"
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="bold"
            pb={2}
          >
            sajtófelelős
          </Text>
          <Text
            as="a"
            href="mailto:mike.wazowsky@simonyi.bme.hu"
            color="blood.50"
            fontSize="md"
          >
            mike.wazowsky@simonyi.bme.hu
          </Text>
        </Flex>
        <Flex direction="column" maxW="280px" alignItems="center">
          <Image src={img1} maxW="240px" maxH="240px" m="auto" />
          <Text color="black" fontSize="2xl" pt={6}>
            Mike Wazovsky
          </Text>
          <Text
            color="secondary"
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="bold"
            pb={2}
          >
            sajtófelelős
          </Text>
          <Text
            as="a"
            href="mailto:mike.wazowsky@simonyi.bme.hu"
            color="blood.50"
            fontSize="md"
          >
            mike.wazowsky@simonyi.bme.hu
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
