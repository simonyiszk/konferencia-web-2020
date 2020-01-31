import { Box, Image } from '@chakra-ui/core';
import React from 'react';

import ImageSrc from '../assets/favicon.png';
import HeroBG from '../assets/star_PNG76860.png';
import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div>
      <Box size="sm">
        <Image src={ImageSrc} />
      </Box>
      <p>Hello, World!</p>
      <Image src={HeroBG} />
      <Image src={HeroBG} />
      <Image src={HeroBG} />
    </Layout>
  );
}
