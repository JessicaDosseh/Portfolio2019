import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
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
        <Link
          href='https://github.com/Lambda-School-Labs/omega2020-fe'
          className={(classes.root, classes.link)}
          style={{ color: '#000', textDecoration: 'none' }}
        >
          <ListItemText primary='Omega2020' secondary='MM DD, YYYY' />
        </Link>
      </ListItem>
      <Divider variant='inset' component='li' />

      {/* -------------------------------------------------------------- */}

      <ListItem>
        <ListItemAvatar>
          <img src={Use_My_Tech_Stuff} width='30px' />
        </ListItemAvatar>
        <Link
          href='https://github.com/use-my-tech-stuff-3-4'
          className={(classes.root, classes.link)}
          style={{ color: '#000', textDecoration: 'none' }}
        >
          <ListItemText primary='Use My Tech Stuff ' secondary='MM DD, YYYY' />
        </Link>
      </ListItem>
      <Divider variant='inset' component='li' />

      {/* -------------------------------------------------------------- */}

      <ListItem>
        <ListItemAvatar>
          <img src={Essentialism} width='30px' />
        </ListItemAvatar>
        <Link
          href='https://github.com/Essentialism-1-bw'
          className={(classes.root, classes.link)}
          style={{ color: '#000', textDecoration: 'none' }}
        >
          <ListItemText primary='Essentialism' secondary='MM DD, YYYY' />
        </Link>
      </ListItem>
      <Divider variant='inset' component='li' />

      {/* -------------------------------------------------------------- */}

      <ListItem>
        <ListItemAvatar>
          <img src={Life_Note} width='30px' />
        </ListItemAvatar>
        <Link
          href='https://github.com/Design-YourLife'
          className={(classes.root, classes.link)}
          style={{ color: '#000', textDecoration: 'none' }}
        >
          <ListItemText primary='Life Note' secondary='MM DD, YYYY' />
        </Link>
      </ListItem>
    </List>
  );
};

export default Projects;
