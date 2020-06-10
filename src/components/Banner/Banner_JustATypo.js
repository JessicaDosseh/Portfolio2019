import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import JustATypo from '../../images/JustATypo.png';

const Banner_JustATypo = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={JustATypo} alt='Just A Typo' width={'100%'} />
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

export default Banner_JustATypo;
