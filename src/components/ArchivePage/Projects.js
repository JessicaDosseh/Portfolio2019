import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
// import IMG from '../../images/Projects/IMG.png';
import Omega2020 from '../../images/Projects/Omega2020.png';
import Use_My_Tech_Stuff from '../../images/Projects/Use-My-Tech-Stuff.png';
import Essentialism from '../../images/Projects/Essentialism.png';
import Life_Note from '../../images/Projects/Life_Note.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <img src={Omega2020} width='30px' />
        </ListItemAvatar>
        <ListItemText primary='Omega2020' secondary='Jan 9, 2014' />
      </ListItem>
      <Divider variant='inset' component='li' />

      {/* -------------------------------------------------------------- */}

      <ListItem>
        <ListItemAvatar>
          <img src={Use_My_Tech_Stuff} width='30px' />
        </ListItemAvatar>
        <ListItemText primary='Use My Tech Stuff ' secondary='Jan 7, 2014' />
      </ListItem>
      <Divider variant='inset' component='li' />

      {/* -------------------------------------------------------------- */}

      <ListItem>
        <ListItemAvatar>
          <img src={Essentialism} width='30px' />
        </ListItemAvatar>
        <ListItemText primary='Essentialism' secondary='July 20, 2014' />
      </ListItem>
      <Divider variant='inset' component='li' />

      {/* -------------------------------------------------------------- */}

      <ListItem>
        <ListItemAvatar>
          <img src={Life_Note} width='30px' />
        </ListItemAvatar>
        <ListItemText primary='Life Note' secondary='July 20, 2014' />
      </ListItem>
    </List>
  );
};

export default Projects;
