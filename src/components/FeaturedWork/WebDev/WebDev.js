import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Essentialism from './Essentialism/FeaturedWork';
import Techstuff from './TechStuff/FeaturedWork';

import { makeStyles } from '@material-ui/core/styles';

const WebDev = () => {
  const classes = useStyles();

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 750px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      {(() => {
        switch (viewPort) {
          case true:
            return (
              <Box>
                <Essentialism />
                <Techstuff />
              </Box>
            );
          default:
            return (
              <Box className={classes.root}>
                <Box className={classes.grid_2}>
                  <Essentialism />
                </Box>
                <Box className={classes.grid_2}>
                  <Techstuff />
                </Box>
              </Box>
            );
        }
      })()}
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  grid_2: {
    width: '40%',
    margin: 30,
  },
}));

export default WebDev;
