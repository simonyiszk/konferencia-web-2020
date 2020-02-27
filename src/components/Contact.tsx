/** @jsx jsx */

import { Box, Flex, Image, Text } from '@chakra-ui/core';
import { jsx } from '@emotion/core';

import img1 from '../assets/favicon.png';

export default function(): JSX.Element {
  return (
    <Box bg="white" py={[8, 8, 16]} px={4} mt={16}>
      <Text color="blood.50" fontSize="4xl" textAlign="center" mb={8}>
        Kapcsolat
      </Text>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        px={[null, null, null, 24, 64]}
        m="auto"
        justifyContent="space-evenly"
        alignItems="center"
        minW="280px"
      >
        <Flex
          direction="column"
          alignItems="center"
          mb={8}
          maxW="280px"
          minW="280px"
        >
          <Image src={img1} maxW="240px" maxH="240px" m="auto" />
          <Text color="black" fontSize="2xl" pt={6}>
            Mike Wazovsky
          </Text>
          <Text
            color="secondary"
            fontSize="md"
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
        <Flex
          direction="column"
          alignItems="center"
          mb={8}
          maxW="280px"
          minW="280px"
        >
          <Image src={img1} maxW="240px" maxH="240px" m="auto" />
          <Text color="black" fontSize="2xl" pt={6}>
            Zih Botond
          </Text>
          <Text
            color="secondary"
            fontSize="md"
            textTransform="uppercase"
            fontWeight="bold"
            pb={2}
          >
            főrendező
          </Text>
          <Text
            as="a"
            href="mailto:mike.wazowsky@simonyi.bme.hu"
            color="blood.50"
            fontSize="md"
          >
            zih.botond@simonyi.bme.hu
          </Text>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          mb={8}
          maxW="280px"
          minW="280px"
        >
          <Image src={img1} maxW="240px" maxH="240px" m="auto" />
          <Text color="black" fontSize="2xl" pt={6}>
            Frey Balázs
          </Text>
          <Text
            color="secondary"
            fontSize="md"
            textTransform="uppercase"
            fontWeight="bold"
            pb={2}
          >
            szakkollégiumunk elnöke
          </Text>
          <Text
            as="a"
            href="mailto:mike.wazowsky@simonyi.bme.hu"
            color="blood.50"
            fontSize="md"
          >
            frey.balazs@simonyi.bme.hu
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
