import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
                              Lorem ipsum dolor sit amet, pri fugit facer
                              suavitate in, modo doming eruditi cu sea. Ad eum
                              quis nominati, sea eu movet epicurei
                              concludaturque,
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
                              <Link href='https://medium.com/@jessica.dosseh/lambda-school-and-the-art-of-shifting-to-tech-588a18f24c4'>
                                <Typography
                                  variant='h6'
                                  style={{ fontWeight: 600 }}
                                >
                                  Read My Shift To Tech Article
                                </Typography>
                              </Link>
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
                    <Typography variant='caption' style={{ fontWeight: 600 }}>
                      My story.
                    </Typography>
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton className={classes.title} variant='rectangle' />
                  ) : (
                    <light>
                      <Typography variant='subheader2'>
                        Lorem ipsum dolor sit amet, pri fugit facer suavitate
                        in, modo doming eruditi cu sea. Ad eum quis nominati,
                        sea eu movet epicurei concludaturque, nisl feugiat ut
                        vel. Vim in exerci doming theophrastus, in eos oblique
                        scaevola inciderint. Alii salutandi pri id. An usu diam
                        tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos. An
                        usu diam tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos.
                      </Typography>
                      <br />
                      <br />
                      <Typography variant='subheader2'>
                        Lorem ipsum dolor sit amet, pri fugit facer suavitate
                        in, modo doming eruditi cu sea. Ad eum quis nominati,
                        sea eu movet epicurei concludaturque, nisl feugiat ut
                        vel. Vim in exerci doming theophrastus, in eos oblique
                        scaevola inciderint. Alii salutandi pri id. An usu diam
                        tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos. An
                        usu diam tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos.you
                        get to where you are (be honest, be humble, be kind)
                      </Typography>
                      <br />
                      <br />
                      <Typography variant='subheader2'>
                        Lorem ipsum dolor sit amet, pri fugit facer suavitate
                        in, modo doming eruditi cu sea. Ad eum quis nominati,
                        sea eu movet epicurei concludaturque, nisl feugiat ut
                        vel. Vim in exerci doming theophrastus, in eos oblique
                        scaevola inciderint. Alii salutandi pri id. An usu diam
                        tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos. An
                        usu diam tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos.
                      </Typography>
                      <br />
                      <br />
                      <Typography variant='subheader2'>
                        Lorem ipsum dolor sit amet, pri fugit facer suavitate
                        in, modo doming eruditi cu sea. Ad eum quis nominati,
                        sea eu movet epicurei concludaturque, nisl feugiat ut
                        vel. Vim in exerci doming theophrastus, in eos oblique
                        scaevola inciderint. Alii salutandi pri id. An usu diam
                        tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos. An
                        usu diam tempor, cu cum quas splendide. Quem expetendis
                        sententiae eu vix, no per epicuri percipit oportere. Pro
                        an consulatu necessitatibus, alia qualisque ex eos.
                      </Typography>
                    </light>
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

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    paddingTop: 70,
    paddingBottom: 100,
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
    width: '500px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 30,
  },
  rightContainer: {
    width: '700px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 30,
  },
  break: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
  },
}));

export default Info;
