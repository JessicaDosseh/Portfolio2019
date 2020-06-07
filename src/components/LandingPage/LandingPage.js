import React from 'react';
import Box from '@material-ui/core/Box';
import Banner from './Banner';
import InspirationsBanner from './Inspirations-Banner';
import AboutPage from '../AboutPage/AboutPage';
import Contact from '../ContactPage/ContactForm';
import FooterCondition from '../Navigation/FooterCondition';

const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <AboutPage />
      {/* <InspirationsBanner /> */}
      <Contact />
      <FooterCondition />
    </Box>
  );
};

export default LandingPage;
