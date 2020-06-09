import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import Menu2 from './Menu2';

const Info = (props) => {
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
      <dark>
        {(() => {
          switch (viewPort) {
            case true:
              return <Menu2 />;
            default:
              return (
                <Box className={classes.mainContainer}>
                  <Box className={classes.leftContainer}>
                    <Box className={classes.container}>
                      <CardHeader
                        title={
                          loading ? (
                            <Skeleton className={classes.title} />
                          ) : (
                            <Typography
                              variant='h5'
                              style={{ fontWeight: 600 }}
                            >
                              My Tech Stuff
                            </Typography>
                          )
                        }
                      />
                    </Box>
                  </Box>

                  <Box className={classes.rightContainer}>
                    <Box className={classes.container}>
                      <CardHeader
                        subheader={
                          loading ? (
                            <Skeleton
                              className={classes.title}
                              variant='rectangle'
                            />
                          ) : (
                            <Menu />
                          )
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              );
          }
        })()}
      </dark>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-sart',
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#FFFFFF',
      color: '#141414',
    },
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  leftContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default Info;
