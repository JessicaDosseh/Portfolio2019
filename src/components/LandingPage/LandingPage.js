import React from 'react';
import { View } from 'react-native';
import Banner from './Banner';
import InspirationsBanner from './Inspirations-Banner';
import AboutPage from '../AboutPage/AboutPage';

const LandingPage = () => {
  return (
    <View>
      <Banner />
      {/* <InspirationsBanner /> */}
      <AboutPage />
    </View>
  );
};

export default LandingPage;
