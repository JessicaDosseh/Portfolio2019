import React from 'react';
import Box from '@material-ui/core/Box';
import Banner from './Banner';
import Banner_FeaturedWork from '../Banner/Banner_FeaturedWork';
import Banner_JustATypo from '../Banner/Banner_JustATypo';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import Banner_SkillAbout from '../Banner/Banner_Skill-About';
import AboutPage from '../AboutPage/AboutPage';
import Contact from '../ContactPage/ContactForm';
import Banner_1999 from '../Banner/Banner_1999';
import FooterCondition from '../Navigation/FooterCondition';

const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <Banner_FeaturedWork />
      <Banner_JustATypo />
      <FeaturedWork />
      <Banner_SkillAbout />
      <AboutPage />
      <Banner_1999 />
      <FooterCondition />
    </Box>
  );
};

export default LandingPage;
