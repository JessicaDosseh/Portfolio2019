import React from 'react';
import Box from '@material-ui/core/Box';
import About from './About';
import Info from './Info';

const AboutPage = () => {
  return (
    <Box>
      <About />
      <hr width='50%' />
      <Info />
    </Box>
  );
};

export default AboutPage;
