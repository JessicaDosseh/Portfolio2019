import React from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Router from './stores/Router';
import NavCondition from './src/components/Navigation/NavCondition';
import LandingPage from './src/components/LandingPage/LandingPage';

const App = () => {
  return (
    <Box>
      <NavCondition />
      <Router />
    </Box>
  );
};

export default App;
