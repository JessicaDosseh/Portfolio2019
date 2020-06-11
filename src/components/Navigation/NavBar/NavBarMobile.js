import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import RouterStoreContext from '../../../../stores/RouterStore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const NavBarMobile = observer((props) => {
  const routerStore = useContext(RouterStoreContext);

  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 900px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.core}>
      <Box className={classes.root} boxShadow={4}>
        <color className={classes.root}>
          <Box className={classes.leftContainer}>
            <CardHeader
              action={
                loading ? (
                  <Skeleton className={classes.text} width={40} height={40} />
                ) : (
                  <Button
                    className={classes.button}
                    onClick={() => {
                      routerStore.screen = 'ArchivePage';
                    }}
                  >
                    <color>
                      <MenuIcon style={{ fontSize: 30, paddingTop: 10 }} />
                    </color>
                  </Button>
                )
              }
            />
          </Box>

          <Box className={classes.centerContainer}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton className={classes.text} width={40} height={40} />
                ) : (
                  <Box>
                    {() => {
                      switch (viewPort) {
                        case true:
                          return (
                            <Button
                              className={classes.button}
                              onClick={() => {
                                routerStore.screen = 'LandingPage';
                              }}
                            >
                              <color className={classes.root}>
                                <Typography
                                  variant='body2'
                                  style={{ fontWeight: 600 }}
                                >
                                  Jessica Dosseh
                                </Typography>
                              </color>
                            </Button>
                          );
                        default:
                          return (
                            <Button
                              className={classes.button}
                              onClick={() => {
                                routerStore.screen = 'LandingPage';
                              }}
                            >
                              <color className={classes.root}>
                                <Typography
                                  variant='h5'
                                  style={{ fontWeight: 600 }}
                                >
                                  Jessica Dosseh
                                </Typography>
                              </color>
                            </Button>
                          );
                      }
                    }}
                  </Box>
                )
              }
            />
          </Box>

          <Box className={classes.rightContainer}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton variant='circle' width={40} height={40} />
                ) : (
                  <Box>
                    {(() => {
                      switch (viewPort) {
                        case true:
                          return (
                            <LocalCafeIcon
                              className={classes.mode}
                              style={{ fontSize: 30, padding: '0 0 0 40' }}
                            />
                          );
                        default:
                          // case false
                          return (
                            <Box className={classes.icons}>
                              <Link
                                href='mailto:Hello@JessicaDosseh.com'
                                className={(classes.root, classes.link)}
                              >
                                <color className={classes.root}>
                                  <Typography
                                    variant='h6'
                                    style={{ fontWeight: 600 }}
                                  >
                                    Contact
                                  </Typography>
                                </color>
                              </Link>
                              <LocalCafeIcon
                                className={classes.mode}
                                style={{ fontSize: 30, padding: '0 20 0 40' }}
                              />
                            </Box>
                          );
                      }
                    })()}
                  </Box>
                )
              }
            />
          </Box>
        </color>
      </Box>
    </Box>
  );
});

const useStyles = makeStyles(() => ({
  core: {
    position: 'fixed',
    // position: 'sticky',
    top: 0,
    width: '100%',
  },
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#F9F9F9',
      color: '#141414',
    },
    '& color': {
      background: blue.A700,
      color: '#FFFFFF',
    },
  },
  button: {
    textTransform: 'none',
  },
  link: {
    textDecoration: 'none',
  },
  leftContainer: {
    width: '20%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    width: '20%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    width: '50%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default NavBarMobile;
