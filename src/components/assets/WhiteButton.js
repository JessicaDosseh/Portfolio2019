import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const WhiteButton = (props) => {
  const classes = useStyles();

  return (
    <Link href={props.href} className={classes.LinkButton}>
      <Typography variant='body2'>{props.title}</Typography>
    </Link>
  );
};

const useStyles = makeStyles(() => ({
  LinkButton: {
    width: 'auto',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textDecoration: 'none',
    background: '#FFFFFF',
    color: '#525252',
    // boxShadow: '1px 4px 10px #DFDFDF',
    margin: 10,
  },
}));

export default WhiteButton;
