import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import GridOnIcon from '@material-ui/icons/GridOn';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';

const Info = (props) => {
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
      <light>
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
                              Omega 2020
                            </Typography>
                          )
                        }
                      />
                      <CardHeader
                        subheader={
                          loading ? (
                            <Skeleton className={classes.title} />
                          ) : (
                            <Box>
                              <GridOnIcon style={{ color: blue.A700 }} />
                              <br />
                              <Typography
                                variant='h6'
                                style={{ fontWeight: 600 }}
                              >
                                Omega 2020 is a web based sudoku app geared
                                towards sudoku lovers and for people who want to
                                improve their skills.
                              </Typography>
                            </Box>
                          )
                        }
                      />
                    </Box>
                  </Box>
                );
            }
          })()}

          <Box className={classes.rightContainer}>
            <Box className={classes.container}>
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton className={classes.title} variant='rectangle' />
                  ) : (
                    <Menu />
                  )
                }
              />
            </Box>
          </Box>
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
  },
  leftContainer: {
    width: '450px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 20,
  },
  rightContainer: {
    width: '450px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 20,
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
