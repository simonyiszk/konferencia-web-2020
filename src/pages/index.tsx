import { Box, Image } from '@chakra-ui/core';
import React from 'react';

import ImageSrc from '../assets/favicon.png';
import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Box size="sm">
        <Image src={ImageSrc} />
      </Box>
      <p>Hello, World!</p>
    </Layout>
  );
}
