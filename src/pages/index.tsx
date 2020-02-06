import { Box, Divider, Image } from '@chakra-ui/core';
import React from 'react';

import ImageSrc from '../assets/favicon.png';
import HeroBG from '../assets/star_PNG76860.png';
import Content from '../components/Content';
import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Box p={8} pl={32} style={{ color: `purple`, fontSize: `72px` }}>
        Hello Gatsby!
      </Box>
      <Box size="sm" p={16} pl={32}>
        <Image src={ImageSrc} />
      </Box>
      <Content />
      <Divider />
    </Layout>
  );
}
