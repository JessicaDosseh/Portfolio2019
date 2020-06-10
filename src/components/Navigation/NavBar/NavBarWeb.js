import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const NavBarWeb = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

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
                  <Link to='/' className={(classes.root, classes.link)}>
                    <color className={classes.root}>
                      <Typography variant='h5' style={{ fontWeight: 600 }}>
                        Jessica Dosseh
                      </Typography>
                    </color>
                  </Link>
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
                  <Box className={classes.menu}>
                    <Link to='/' className={(classes.root, classes.link)}>
                      <color className={classes.root}>
                        <Typography
                          variant='subtitle2'
                          style={{ fontWeight: 600 }}
                        >
                          Featured Work
                        </Typography>
                      </color>
                    </Link>
                    <Link to='/' className={(classes.root, classes.link)}>
                      <color className={classes.root}>
                        <Typography
                          variant='subtitle2'
                          style={{ fontWeight: 600 }}
                        >
                          Skills &#38; About
                        </Typography>
                      </color>
                    </Link>
                    <Link to='/' className={(classes.root, classes.link)}>
                      <color className={classes.root}>
                        <Typography
                          variant='subtitle2'
                          style={{ fontWeight: 600 }}
                        >
                          The Archive
                        </Typography>
                      </color>
                    </Link>
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
                  <Box className={classes.icons}>
                    <Link to='/' className={(classes.root, classes.link)}>
                      <color className={classes.root}>
                        <Typography variant='h6' style={{ fontWeight: 600 }}>
                          Contact
                        </Typography>
                      </color>
                    </Link>
                    <LocalCafeIcon
                      className={classes.mode}
                      style={{ fontSize: 30, padding: '0 20 0 40' }}
                    />
                  </Box>
                )
              }
            />
          </Box>
        </color>
      </Box>
    </Box>
  );
};

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
  link: {
    textDecoration: 'none',
    marginLeft: 20,
    marginRight: 20,
  },
  leftContainer: {
    width: '30%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    width: '30%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    width: '30%',
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

export default NavBarWeb;
