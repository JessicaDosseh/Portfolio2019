import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import JustATypo from '../../images/JustATypo.png';
import JustATypo2 from '../../images/JustATypo2.png';

const Banner_JustATypo = (props) => {
  const classes = useStyles();

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 800px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }
  return (
    <Box>
      {(() => {
        switch (viewPort) {
          case true:
            return (
              <Box>
                <img src={JustATypo2} alt='Just A Typo' width={'100%'} />
              </Box>
            );
          default:
            // case false:
            return (
              <Box className={classes.root}>
                <img src={JustATypo} alt='Just A Typo' width={'100%'} />
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
  },
}));

export default Banner_JustATypo;
