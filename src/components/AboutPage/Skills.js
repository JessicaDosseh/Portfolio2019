import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: grey[900],
  },
  tooltip: {
    backgroundColor: grey[900],
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

const Skills = (props) => {
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
                    <AntTab
                      label={
                        <BootstrapTooltip title='Languages / Frameworks'>
                          <CodeIcon />
                        </BootstrapTooltip>
                      }
                      {...a11yProps(0)}
                    />
                    <AntTab
                      label={
                        <BootstrapTooltip title='Tools'>
                          <BuildIcon />
                        </BootstrapTooltip>
                      }
                      {...a11yProps(1)}
                    />
                    <AntTab
                      label={
                        <BootstrapTooltip title='Related Skills'>
                          <AddIcon />
                        </BootstrapTooltip>
                      }
                      {...a11yProps(2)}
                    />
                  </AntTabs>
                </Box>

                <TabPanel value={value} index={0}>
                  <Box className={classes.tab_left}>
                    <Box className={classes.left}>
                      <Typography
                        variant='h6'
                        style={{ fontWeight: 600, color: blue.A700 }}
                      >
                        Languages /
                        <br />
                        Frameworks
                      </Typography>
                      <br />
                      <Typography variant='caption'>HTML</Typography>
                      <br />
                      <Typography variant='caption'>CSS</Typography>
                      <br />
                      <Typography variant='caption'>JavaScript</Typography>
                      <br />
                      <Typography variant='caption'>React.js</Typography>
                      <br />
                      <Typography variant='caption'>
                        Styled-Components
                      </Typography>
                      <br />
                      <Typography variant='caption'>Node.js</Typography>
                      <br />
                      <Typography variant='caption'>Express.js</Typography>
                      <br />
                      <Typography variant='caption'>Knex.js</Typography>
                      <br />
                      <Typography variant='caption'>Jest</Typography>
                      <br />
                      <Typography variant='caption'>SQL</Typography>
                    </Box>
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <Box className={classes.tab_center}>
                    <Box className={classes.center}>
                      <Typography
                        variant='h6'
                        style={{ fontWeight: 600, color: blue.A700 }}
                      >
                        Tools
                      </Typography>
                      <br />
                      <Typography variant='caption'>Git</Typography>
                      <br />
                      <Typography variant='caption'>GitHub</Typography>
                      <br />
                      <Typography variant='caption'>Netlify</Typography>
                      <br />
                      <Typography variant='caption'>Heroku</Typography>
                      <br />
                      <Typography variant='caption'>VSCode</Typography>
                      <br />
                      <Typography variant='caption'>Postman</Typography>
                    </Box>
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={2}>
                  <Box className={classes.tab_right}>
                    <Box className={classes.right}>
                      <Typography
                        variant='h6'
                        style={{ fontWeight: 600, color: blue.A700 }}
                      >
                        Related Skills
                      </Typography>
                      <br />
                      <Typography variant='caption'>
                        Object Oriented Programming
                      </Typography>
                      <br />
                      <Typography variant='caption'>
                        Test Driven Developemnt
                      </Typography>
                      <br />
                      <Typography variant='caption'>
                        Pair Programming
                      </Typography>
                      <br />
                      <Typography variant='caption'>
                        Agile Development
                      </Typography>
                      <br />
                      <Typography variant='caption'>RESTful APIs</Typography>
                      <br />
                      <Typography variant='caption'>
                        Project Management
                      </Typography>
                    </Box>
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
    borderBottom: '1px solid #A5A5A5',
  },
  indicator: {
    backgroundColor: '#000000',
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
      // color: '#40a9ff',
      color: blue.A700,
      opacity: 1,
    },
    '&$selected': {
      // color: '#1890ff',
      color: blue.A700,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      // color: '#40a9ff',
      color: blue.A700,
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
    // background: '#FFFFFF',
  },
  mainContainer: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tab: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'center',
  },
  tab_left: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'flex-start',
    textAlign: 'left',
  },
  tab_center: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'center',
    textAlign: 'center',
  },
  tab_right: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'flex-end',
    textAlign: 'right',
  },
}));

export default Skills;
