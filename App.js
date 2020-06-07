import React from 'react';
// import { View } from 'react-native';
import Box from '@material-ui/core/Box';
import NavCondition from './src/components/Navigation/NavCondition';
import LandingPage from './src/components/LandingPage/LandingPage';

export default function App() {
  return (
    <Box>
      <NavCondition />
      <LandingPage />
    </Box>
  );
}
