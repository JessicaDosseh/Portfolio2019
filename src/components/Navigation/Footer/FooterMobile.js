import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import InfoIcon from '@material-ui/icons/Info';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Tooltip from '@material-ui/core/Tooltip';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    // color: theme.palette.common.black,
    color: blue.A700,
  },
  tooltip: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: blue.A700,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const FooterMobile = (props) => {
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
                <BootstrapTooltip title='Featured Work'>
                  <IconButton href='#'>
                    <dark>
                      <BookmarkIcon style={{ fontSize: 28 }} />
                    </dark>
                  </IconButton>
                </BootstrapTooltip>
              )
            }
          />
        </Box>

        <Box className={classes.centerContainer}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton className={classes.text} width={40} height={40} />
              ) : (
                <BootstrapTooltip title='About Me'>
                  <IconButton href='#'>
                    <dark>
                      <InfoIcon style={{ fontSize: 28 }} />
                    </dark>
                  </IconButton>
                </BootstrapTooltip>
              )
            }
          />
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.icons}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton variant='circle' width={40} height={40} />
                ) : (
                  <BootstrapTooltip title='My Skills'>
                    <IconButton href='#'>
                      <dark>
                        <EqualizerIcon style={{ fontSize: 28 }} />
                      </dark>
                    </IconButton>
                  </BootstrapTooltip>
                )
              }
            />
          </Box>
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
    bottom: 0,
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
    width: '40%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    width: '40%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    width: '10%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: '45%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default FooterMobile;
