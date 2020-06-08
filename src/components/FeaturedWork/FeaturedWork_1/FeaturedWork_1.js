import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import FeaturedWork_1 from '../../../images/FeaturedWork_1.png';

const FeaturedWork = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const viewPortWidth = false;
  // const md = useMediaQuery('(min-width: 1650px)');
  // if (viewPortWidth === md) {
  //   viewPort = true;
  // } else {
  //   viewPort = false;
  // }

  return (
    <Box className={classes.root}>
      <light className={classes.root}>
        <Info />
        <Box className={classes.mainContainer}>
          {(() => {
            switch (viewPort) {
              case true:
                return (
                  <Box className={classes.container} className={classes.break}>
                    IMG
                  </Box>
                );
              default:
                // case false:
                return (
                  <Box className={classes.container}>
                    <CardHeader
                      title={
                        loading ? (
                          <Skeleton className={classes.title} />
                        ) : (
                          <img
                            src={FeaturedWork_1}
                            alt='omega2020'
                            width={'70%'}
                          />
                        )
                      }
                    />
                  </Box>
                );
            }
          })()}
        </Box>
      </light>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    '& dark': {
      // background: '#141414',
      background: '#222222',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#F2F3F5',
      color: '#141414',
    },
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // padding: 30,
    // border: '2px solid orange',
  },
  break: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default FeaturedWork;
