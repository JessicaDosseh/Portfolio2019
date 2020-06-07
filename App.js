import React from 'react';
// import { View } from 'react-native';
// import { Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import NavCondition from './src/components/Navigation/NavCondition';
import LandingPage from './src/components/LandingPage/LandingPage';

export default function App() {
  return (
    // <Router>
    <Box>
      <NavCondition />
      <LandingPage />
      {/* <Route exact path='/' component={LandingPage} /> */}
    </Box>
    // </Router>
  );
}
