import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { blue, lightGreen } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Skills from './Skills';

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
                              — Dear reader
                              <br />
                              It may be hard, but it’s not impossible. So, what
                              are you waiting for?
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
                                  style={{
                                    fontWeight: 600,
                                    color: lightGreen[500],
                                  }}
                                >
                                  <BeenhereIcon
                                    style={{ color: lightGreen.A700 }}
                                  />
                                  <br />
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
                    <Box>
                      <Typography
                        variant='subtitle2.'
                        style={{ fontWeight: 600 }}
                      >
                        My Skills.
                      </Typography>
                      <Skills />
                    </Box>
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton className={classes.title} variant='rectangle' />
                  ) : (
                    <Box>
                      <Typography
                        variant='subtitle2.'
                        style={{ fontWeight: 600 }}
                      >
                        My story.
                      </Typography>
                    </Box>
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
                        Growing up, I've always wanted to be an artist, but it
                        took me a long time to realize that what I really wanted
                        was the right to creative freedom. When you say you want
                        to be an artist, people look at you funny and most
                        likely think, "there's no financial stability in art."
                        Which I mean, they're not completely wrong; however, I
                        personally believe that creativity is limitless. It
                        wasn't until I entered the world of tech that I realized
                        that it was completely possible to not be a starving
                        artist. I'm passionate about the bridge between
                        traditional art and technology and the innovations in
                        between.
                      </Typography>
                      <br />
                      <br />
                      <Typography variant='subheader2'>
                        I like to think that my curiosity knows no bounds. I
                        have a deep desire to understand how things work and how
                        to build stuff — all kinds of stuff. That's at the core
                        of why I love tech. But more than that, I love coding
                        because of the way it feels. You know that feeling when
                        you're in the ZONE; when the rest of the world seems to
                        fade a little, and it's just you — your computer and
                        your code. I'm not really sure how to describe that
                        feeling, but it's a little nostalgic, peaceful, serene.
                        Don't Get me wrong though I know coding isn't always
                        peaceful. Coding has a way of making you confident when
                        it works and like an idiot when it doesn't with the
                        endless debugging and hills of stress. Nevertheless, the
                        O(n) at the end of the tunnel after refactoring the
                        endless nested for-loops is always worth it.
                      </Typography>
                      <br />
                      <br />
                      <Typography variant='subheader2'>
                        I remember the first time I ever coded. At first, I took
                        the computer science class kind of on a whim, but I
                        never thought I'd love it so much. It was my sophomore
                        year of high school, and I was the only girl in the
                        class. The first day was really ruff, and I thought I
                        wouldn't be able to make it, but I'm so glad I didn't
                        give up. Before you give up on something, give it three
                        weeks — or even a month — or a year if need be. It
                        wasn't easy, but I loved that feeling of building
                        something from nothing. After learning some basic code,
                        all I wanted to do was bring some life to my designs and
                        ideas. I appreciate the independence and practicality
                        that comes along with knowing how to code. But with more
                        freedom comes the lack of sleep because what else are
                        you going to do but code 24/7!? I think about code when
                        I'm awake, think about code when I'm asleep, and think
                        about code when I don't want to think about code. 1st
                        world problems, I guess.
                      </Typography>
                      <br />
                      <br />
                      <Typography variant='subheader2'>
                        I want to be good at coding and developing. — I want to
                        stand firm and say, "Yes, I am a Software Engineer! "
                        but I know I have a long way to go. So, we begin this
                        long, long upward climb.
                        <br />
                        <br />
                        See you on the other side.
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    paddingTop: 20,
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
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default Info;
