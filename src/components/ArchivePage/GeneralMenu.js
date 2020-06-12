import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import RouterStoreContext from '../../../stores/RouterStore';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
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
  button: {
    textTransform: 'none',
  },
}));

const GeneralMenu = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <HomeIcon />
        </ListItemAvatar>
        <Button
          className={classes.button}
          onClick={() => {
            routerStore.screen = 'LandingPage';
          }}
        >
          <ListItemText primary='Home' />
        </Button>
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem>
        <ListItemAvatar>
          <WorkIcon />
        </ListItemAvatar>
        <Button
          className={classes.button}
          onClick={() => {
            routerStore.screen = 'FeaturedWork';
          }}
        >
          <ListItemText primary='Featured Work' />
        </Button>
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem>
        <ListItemAvatar>
          <InfoIcon />
        </ListItemAvatar>
        <Button
          className={classes.button}
          onClick={() => {
            routerStore.screen = 'AboutPage';
          }}
        >
          <ListItemText primary='About Me' />
        </Button>
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem>
        <ListItemAvatar>
          <EmailIcon />
        </ListItemAvatar>
        <Link
          href='mailto:Hello@JessicaDosseh.com'
          style={{ color: '#000', textDecoration: 'none' }}
        >
          <ListItemText primary='Contact Me' />
        </Link>
      </ListItem>
    </List>
  );
});

export default GeneralMenu;
