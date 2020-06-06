import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const NavBarWeb = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root} boxShadow={4}>
      <dark className={classes.root}>
        <Box className={classes.leftContainer}>
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text} width={40} height={40} />
              ) : (
                <MenuIcon style={{ fontSize: 30, paddingTop: 10 }} />
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
                <Link to='/' className={(classes.root, classes.Link)}>
                  <dark className={classes.root}>
                    <Typography variant='h5'>Jessica Dosseh</Typography>
                  </dark>
                </Link>
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
                  <Link to='/' className={(classes.root, classes.Link)}>
                    <dark className={classes.root}>
                      <Typography variant='h6'>Contact</Typography>
                    </dark>
                  </Link>
                  <FiberManualRecordTwoToneIcon
                    className={classes.mode}
                    style={{ fontSize: 40, padding: '0 20 0 40' }}
                  />
                </Box>
              )
            }
          />
        </Box>
      </dark>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    left: 0,
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#FFFFFF',
      color: '#141414',
    },
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
  icons: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default NavBarWeb;
