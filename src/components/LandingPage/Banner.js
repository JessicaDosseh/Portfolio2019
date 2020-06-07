import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SmsIcon from '@material-ui/icons/Sms';
import FaceIcon from '@material-ui/icons/Face';
import { blue, blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../images/banner-img.png';
import blinkBot from '../../images/blinkBot.gif';
import LambdaLogo from '../../images/LambdaSchool-logo.png';
import BaxterMillLogo from '../../images/BaxterMill-logo.png';

const Banner = (props) => {
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
                  <Box className={classes.container} className={classes.img2}>
                    <br />
                    {/* <img src={banner} alt='banner' className={classes.img2} /> */}
                    {/* <FaceIcon style={{ fontSize: 200, color: blue.A700 }} /> */}
                    <img src={blinkBot} alt='banner' className={classes.img2} />
                  </Box>
                );
              default:
                // case false:
                return (
                  <Box className={classes.leftContainer}>
                    <CardHeader
                      avatar={
                        loading ? (
                          <Skeleton
                            className='bannerIMG'
                            variant='rect'
                            width={600}
                            height={600}
                          />
                        ) : (
                          <Box className={classes.container}>
                            {/* <img src={banner} alt='banner' className={classes.img} /> */}
                          </Box>
                        )
                      }
                    />
                  </Box>
                );
            }
          })()}

          <Box className={classes.rightContainer}>
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
                    <Typography variant='h4' style={{ fontWeight: 600 }}>
                      I’m Jessica Dosseh, a Full Stack{' '}
                      <blue style={{ color: blue.A700 }}>
                        Software Engineer
                      </blue>{' '}
                      , an Art Enthusiast &#38; currently a student at Lambda
                      School!{' '}
                      <Link style={{ color: blue.A700 }}>
                        Let’s talk. <SmsIcon style={{ color: blueGrey[300] }} />
                      </Link>
                    </Typography>
                  )
                }
              />
              <CardHeader
                title={
                  loading ? (
                    <Skeleton
                      className={classes.title}
                      width={600}
                      height={100}
                    />
                  ) : (
                    <Box className={classes.grid_2}>
                      <Box className={classes.grid_2_Item}>
                        <Typography variant='h6' style={{ fontWeight: 600 }}>
                          CURRENT STUDENT AT:
                        </Typography>
                        <br />
                        <br />
                        <img
                          src={LambdaLogo}
                          alt='banner'
                          className={classes.logo}
                        />
                      </Box>

                      <Box className={classes.grid_2_Item}>
                        <Typography variant='h6' style={{ fontWeight: 600 }}>
                          PREVIOUSLY WORKED AT:
                        </Typography>
                        <br />
                        <img
                          src={BaxterMillLogo}
                          alt='banner'
                          className={classes.logo}
                          style={{ width: '120px', height: 'auto' }}
                        />
                      </Box>
                    </Box>
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? <Skeleton width={500} height={400} /> : null
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
    height: '72rem',
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#F7F7F7',
      color: '#141414',
    },
    // marginTop: 40,
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    width: '900px',
    height: '900px',
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain, cover',
    backgroundPosition: 'center',
  },
  rightContainer: {
    width: '700px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    padding: 10,
  },
  grid_2: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 100,
  },
  grid_2_Item: {
    width: '40%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    width: '40%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
  },
  img2: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    height: 'auto',
  },
}));

export default Banner;
