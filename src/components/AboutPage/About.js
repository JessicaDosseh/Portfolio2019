import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import me from '../../images/me.jpeg';

const About = (props) => {
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
      <light className={classes.root}>
        <Box className={classes.mainContainer}>
          {(() => {
            switch (viewPort) {
              case true:
                return null;
              default:
                // case false:
                return (
                  <Box className={classes.leftContainer}>
                    <Box className={classes.container}>
                      <CardHeader
                        title={
                          loading ? (
                            <Skeleton
                              className={classes.title}
                              width={600}
                              height={100}
                            />
                          ) : (
                            <Box>
                              <Typography
                                variant='caption'
                                style={{ fontWeight: 600 }}
                              >
                                About
                              </Typography>
                              <br />
                              <br />
                              <br />
                              <br />
                              <Typography
                                variant='h4'
                                style={{ fontWeight: 600 }}
                              >
                                “If you love what you do and are willing to do
                                what it takes, it’s within your reach. And it’ll
                                be worth every minute you spend alone at night,
                                thinking and thinking about what it is you want
                                to design or build. — It’ll be worth it, I
                                promise.” (Steve Wozniak)
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
                    <Skeleton
                      className={classes.title}
                      width={600}
                      height={100}
                    />
                  ) : (
                    <Box>
                      <br />
                      <br />
                      <br />
                      <br />
                      <img
                        src={me}
                        alt='Me'
                        style={{
                          width: '200px',
                          borderRadius: '50%',
                          paddingTop: 20,
                        }}
                      />
                    </Box>
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton
                      className={classes.title}
                      width={600}
                      height={100}
                    />
                  ) : (
                    <Box>
                      <Typography
                        variant='subtitle2.'
                        style={{ fontWeight: 600 }}
                      >
                        Jessica Dosseh
                      </Typography>

                      <br />
                      <Typography variant='caption' style={{ fontWeight: 600 }}>
                        Software Engineer &#38; Creative Designer
                      </Typography>
                      <br />
                      <br />
                      <Box className={classes.space}>
                        <IconButton href='https://github.com/JessicaDosseh'>
                          <GitHubIcon />
                        </IconButton>
                        <IconButton href='https://twitter.com/JessicaDosseh'>
                          <TwitterIcon />
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/in/jessicadosseh/'>
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </Box>
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
    // height: '72rem',
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
    justifyContent: 'center', //space-evenly
    alignItems: 'center',
  },
  leftContainer: {
    width: '900px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 30,
  },
  rightContainer: {
    width: '300px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 30,
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default About;
