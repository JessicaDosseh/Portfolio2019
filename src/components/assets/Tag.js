import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Tag = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.Container}>
        <CardHeader
          title={
            loading ? (
              <Skeleton className={classes.text} width={40} height={40} />
            ) : (
              <Box href={props.href} className={classes.menu}>
                <Typography variant='body2' className={classes.LinkButton}>
                  {props.title}
                </Typography>
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#141414',
    color: '#FFFFFF',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  LinkButton: {
    width: 'auto',
    textDecoration: 'none',
    margin: 10,
  },
}));

export default Tag;
