import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GeneralMenu from './GeneralMenu';
import Projects from './Projects';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 80,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ArchivePage = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>General Menu</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GeneralMenu />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* ----------------------------------------------------------------------- */}

      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography className={classes.heading}>My Projects</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Projects />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* ----------------------------------------------------------------------- */}

      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography className={classes.heading}>My Articles</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{/* <Articles /> */}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ArchivePage;
