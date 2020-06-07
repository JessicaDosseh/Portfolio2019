import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import NavBarMobile from './NavBar/NavBarMobile';
import NavBarWeb from './NavBar/NavBarWeb';

const NavCondition = () => {
  const viewPort = false;

  const sm = useMediaQuery('(min-width: 980px)');
  const md = useMediaQuery('(min-width: 1500px)');
  if (viewPort === md) {
    return (
      <AppBar position='static'>
        <NavBarMobile />
      </AppBar>
    );
  } else {
    return (
      <AppBar position='static'>
        <NavBarWeb />
      </AppBar>
    );
  }
};

export default NavCondition;
