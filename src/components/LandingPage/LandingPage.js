import React from 'react';
import Box from '@material-ui/core/Box';
import Banner from './Banner';
import Banner_FeaturedWork from '../Banner/Banner_FeaturedWork';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import AboutPage from '../AboutPage/AboutPage';
import Contact from '../ContactPage/ContactForm';
import Banner_1999 from '../Banner/Banner_1999';
import FooterCondition from '../Navigation/FooterCondition';

const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <Banner_FeaturedWork />
      <FeaturedWork />
      <AboutPage />
      {/* <Contact /> */}
      <Banner_1999 />
      <FooterCondition />
    </Box>
  );
};

export default LandingPage;
