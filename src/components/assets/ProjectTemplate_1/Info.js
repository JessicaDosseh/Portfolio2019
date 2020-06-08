import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';

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
        <Box className={classes.mainContainer}>
          <Box className={classes.leftContainer}>
            <Box className={classes.container}>
              <CardHeader
                title={
                  loading ? (
                    <Skeleton className={classes.title} />
                  ) : (
                    <Typography variant='h5' style={{ fontWeight: 600 }}>
                      Project
                    </Typography>
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton className={classes.title} />
                  ) : (
                    <dark>
                      <BuildIcon style={{ color: grey[50] }} />
                      <br />
                      <Typography variant='h6' style={{ fontWeight: 600 }}>
                        Description Snippet
                      </Typography>
                    </dark>
                  )
                }
              />
            </Box>
          </Box>

          {(() => {
            switch (viewPort) {
              case true:
                return null;
              default:
                return (
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
    marginTop: 100,
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
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  leftContainer: {
    width: '400px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    width: '400px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
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

export default Info;
