import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BG1 from '../../images/BG1.png';
import Tag from '../assets/Tag';

const InspirationsBanner = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 1450px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      <light className={classes.root}>
        <Tag title={'Inspirations'} />
        <Box className={classes.mainContainer}>
          <Box className={classes.Container}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    className='bannerIMG'
                    variant='rect'
                    width={600}
                    height={600}
                  />
                ) : (
                  <Box>
                    <Typography variant='h4' className={classes.quote}>
                      "Bring life into your projects through thoughtful
                      development &#38; clean design."
                    </Typography>
                  </Box>
                )
              }
            />
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
    margin: 18,
  },
  Container: {
    width: '100%',
    height: 'auto',
    backgroundImage: `url(${BG1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  quote: {
    width: '70%',
    color: '#FFFFFF',
    fontWeight: 600,
  },
}));

export default InspirationsBanner;
