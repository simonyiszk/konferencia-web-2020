import { Box, Divider, Image } from '@chakra-ui/core';
import React from 'react';

import ImageSrc from '../assets/favicon.png';
import HeroBG from '../assets/star_PNG76860.png';
import Content from '../components/Content';
import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Content />
      <Divider />
    </Layout>
  );
}
