import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import WhiteButton from '../../assets/WhiteButton';

const MenuItems = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <light className={classes.root}>
        <Box className={classes.centerContainer}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={40} height={40} />
              ) : (
                <Box className={classes.menu}>
                  <WhiteButton title={'Featured Work'} />
                  <WhiteButton title={'My Skills'} />
                  <WhiteButton title={'About Me'} />
                </Box>
              )
            }
          />
        </Box>
      </light>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#F9F9F9',
      color: '#141414',
    },
  },
  centerContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default MenuItems;
