import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';
import { grey } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TechStack from './TechStack';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: grey[50],
  },
  tooltip: {
    backgroundColor: grey[50],
    color: '#000000',
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Menu = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.itemBar}>
        <CardHeader
          title={
            loading ? (
              <Skeleton width='100%' />
            ) : (
              <Box className={classes.mainContainer}>
                <Box position='static' color='default'>
                  <AntTabs
                    value={value}
                    onChange={handleChange}
                    aria-label='simple tabs example'
                  >
                    <AntTab label='^ Essentialism' {...a11yProps(0)} />
                    <AntTab label='Description' {...a11yProps(1)} />
                    <AntTab label='Tech Stack' {...a11yProps(2)} />
                  </AntTabs>
                </Box>

                <TabPanel value={value} index={0}>
                  <Box className={classes.tab}></Box>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <Box className={classes.tab}>
                    <Box className={classes.space}>
                      <BootstrapTooltip title='Source Code' arrow>
                        <IconButton href='https://github.com/Essentialism-1-bw'>
                          <GitHubIcon style={{ color: grey[50] }} />
                        </IconButton>
                      </BootstrapTooltip>
                      <BootstrapTooltip title='Website' arrow>
                        <IconButton href='https://essentialism-fe.netlify.app/'>
                          <LanguageIcon style={{ color: grey[50] }} />
                        </IconButton>
                      </BootstrapTooltip>
                    </Box>
                    <Typography>
                      Lorem ipsum dolor sit amet, pri fugit facer suavitate in,
                      modo doming eruditi cu sea. Ad eum quis nominati, sea eu
                      movet epicurei concludaturque, nisl feugiat ut vel. Vim in
                      exerci doming theophrastus, in eos oblique scaevola
                      inciderint. Alii salutandi pri id.
                    </Typography>
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={2}>
                  <Box className={classes.tab}>
                    <TechStack />
                  </Box>
                </TabPanel>
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #A5A5A5  ',
  },
  indicator: {
    backgroundColor: '#A5A5A5  ',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#FFFFFF',
      opacity: 1,
    },
    '&$selected': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#FFFFFF',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    color: '#FFFFFF',
  },
  mainContainer: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tab: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
}));

export default Menu;
