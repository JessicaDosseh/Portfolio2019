import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import ID_JTKOY from '../../../../images/ID-JTKOY.jpg';

const FeaturedWork = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 1650px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      <dark className={classes.root}>
        <Info />

        <Box className={classes.mainContainer}>
          {(() => {
            switch (viewPort) {
              case true:
                return (
                  <img
                    src={ID_JTKOY}
                    alt='Project'
                    style={{ width: '100%', textAlign: 'center' }}
                  />
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
                            src={ID_JTKOY}
                            alt='Project'
                            style={{ width: '60%', textAlign: 'center' }}
                          />
                          // <BurstModeIcon style={{ fontSize: 100 }} />
                        )
                      }
                    />
                  </Box>
                );
            }
          })()}
        </Box>
      </dark>
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
      background: '#000000',
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
