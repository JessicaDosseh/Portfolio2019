import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FaceIcon from '@material-ui/icons/Face';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import vhs from '../../images/vhs.gif';

const Banner_1999 = (props) => {
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
                          <img src={vhs} alt='vhs' width={300} />
                        )
                      }
                    />
                    <CardHeader
                      subheader={
                        loading ? (
                          <Skeleton className={classes.title} />
                        ) : (
                          <Box>
                            <Link href='#'>
                              <Typography
                                variant='h6'
                                style={{ fontWeight: 600, color: blue.A700 }}
                              >
                                <FaceIcon style={{ color: blue.A700 }} />
                                <br />
                                Party Like It's 1999!
                              </Typography>
                            </Link>
                          </Box>
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
    // paddingTop: 70,
    // paddingBottom: 100,
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
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
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

export default Banner_1999;
