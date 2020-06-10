import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const GeneralMenu = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <HomeIcon />
        </ListItemAvatar>
        <ListItemText primary='Home' />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem>
        <ListItemAvatar>
          <WorkIcon />
        </ListItemAvatar>
        <ListItemText primary='Featured Work' />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem>
        <ListItemAvatar>
          <InfoIcon />
        </ListItemAvatar>
        <ListItemText primary='About Me' />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem>
        <ListItemAvatar>
          <EmailIcon />
        </ListItemAvatar>
        <ListItemText primary='Contact Me' />
      </ListItem>
    </List>
  );
};

export default GeneralMenu;
