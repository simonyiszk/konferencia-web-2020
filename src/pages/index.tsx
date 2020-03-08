import { Box, Divider, Image } from '@chakra-ui/core';
import React from 'react';

import ImageSrc from '../assets/favicon.png';
import HeroBG from '../assets/star_PNG76860.png';
import About from '../components/About';
import Contact from '../components/Contact';
import Content from '../components/Content';
import Layout from '../components/Layout';
import Location from '../components/Location';
import Registration from '../components/Registration';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <About />
      <Registration />
      <Location />
      <Content />
      <Contact />
    </Layout>
  );
}
