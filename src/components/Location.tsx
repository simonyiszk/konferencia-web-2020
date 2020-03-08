/** @jsx jsx */

import { AspectRatioBox, Box, Flex, Heading, Text } from '@chakra-ui/core';
import { css, jsx } from '@emotion/core';

export default function(): JSX.Element {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      bg="#085573"
      py={[8, 8, 16]}
      px={[4, 4, 16, 32, 64]}
    >
      <Box minW="50%" pr={[0, 0, 4]} textAlign={['center', 'center', 'left']}>
        <Heading as="h1" color="blood.50" fontSize="4xl" pb={12}>
          Helyszín
        </Heading>
        <Text
          color="white"
          fontFamily="Barlow"
          fontSize="2xl"
          maxW="777px"
          m="auto"
          pb={4}
        >
          BME I épület
          <br />
          Budapest, Magyar Tudósok körútja 2, 1117
        </Text>
        <Text
          color="white"
          fontFamily="Barlow"
          fontWeight="bold"
          fontSize="2xl"
          maxW="777px"
          m="auto"
          pb={8}
        >
          2020.04.29
        </Text>
      </Box>
      <AspectRatioBox
        maxW="450px"
        alignSelf={['center', 'center', 'flex-end']}
        ml="auto"
        px={[4, 4, 0]}
        maxH="450px"
        width="100%"
        ratio={1}
      >
        <Box
          as="iframe"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5393.249641672431!2d19.052761377617735!3d47.47774011670506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddabb29bd997%3A0x4b453205e2d0f96b!2sBME%20Building%20I!5e0!3m2!1sen!2shu!4v1583432419341!5m2!1sen!2shu"
          frameBorder="0"
          /* style={{ minHeight: '450px', width: '100%', height: '100%' }} */
        />
      </AspectRatioBox>
    </Flex>
  );
}
