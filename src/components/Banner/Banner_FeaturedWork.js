import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Banner_FeaturedWork = (props) => {
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
      <dark className={classes.root}>
        <Box className={classes.mainContainer}>
          {(() => {
            switch (viewPort) {
              case true:
                return (
                  <Box
                    className={classes.container}
                    className={classes.break}
                  ></Box>
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
                          <Typography variant='h5' style={{ fontWeight: 600 }}>
                            — Featured work
                          </Typography>
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
      background: '#222222',
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
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '55%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 30,
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

export default Banner_FeaturedWork;
