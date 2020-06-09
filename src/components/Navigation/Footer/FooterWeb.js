import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import BookIcon from '@material-ui/icons/Book';
import BrushIcon from '@material-ui/icons/Brush';
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

const FooterWeb = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <dark className={classes.root}>
        <Box className={classes.leftContainer}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={100} height={55} />
              ) : (
                <Typography variant='subtitle1'>
                  Copyright © Jessica Dosseh 2020.
                </Typography>
              )
            }
          />
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.media}>
            <CardHeader
              action={
                loading ? (
                  <Skeleton className={classes.text} width={60} height={55} />
                ) : (
                  <Box className={classes.space}>
                    <BootstrapTooltip title='Github' arrow>
                      <IconButton href='https://github.com/JessicaDosseh'>
                        <dark>
                          <GitHubIcon />
                        </dark>
                      </IconButton>
                    </BootstrapTooltip>

                    <BootstrapTooltip title='Twitter' arrow>
                      <IconButton href='https://twitter.com/JessicaDosseh'>
                        <dark>
                          <TwitterIcon />
                        </dark>
                      </IconButton>
                    </BootstrapTooltip>

                    <BootstrapTooltip title='Linkedin' arrow>
                      <IconButton href='https://www.linkedin.com/in/jessicadosseh/'>
                        <dark>
                          <LinkedInIcon />
                        </dark>
                      </IconButton>
                    </BootstrapTooltip>

                    <BootstrapTooltip title='Instagram' arrow>
                      <IconButton href='https://www.instagram.com/timeless1792/'>
                        <dark>
                          <InstagramIcon />
                        </dark>
                      </IconButton>
                    </BootstrapTooltip>

                    <BootstrapTooltip title='Medium' arrow>
                      <IconButton href='https://medium.com/@jessica.dosseh'>
                        <dark>
                          <BookIcon />
                        </dark>
                      </IconButton>
                    </BootstrapTooltip>

                    <BootstrapTooltip title='Behance' arrow>
                      <IconButton href='https://www.behance.net/jessicadosseh'>
                        <dark>
                          <BrushIcon />
                        </dark>
                      </IconButton>
                    </BootstrapTooltip>
                  </Box>
                )
              }
            />
          </Box>
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
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#FFFFFF',
      color: '#141414',
    },
  },
  leftContainer: {
    width: '39%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '10px',
  },
  rightContainer: {
    width: '60%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  media: {
    width: '75%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default FooterWeb;
