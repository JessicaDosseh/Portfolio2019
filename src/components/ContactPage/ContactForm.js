import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MessageIcon from '@material-ui/icons/Message';
import { blue } from '@material-ui/core/colors';
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import BlueButton from '../assets/BlueButton';

const Register = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <Box className={classes.Container}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.title} width={300} height={100} />
              ) : (
                <Box>
                  <Typography variant='h5' className={classes.header}>
                    Contact
                  </Typography>
                  <br />
                  <MessageIcon style={{ color: blue.A700 }} />
                  <Typography variant='h6'>Let's get in touch soon!</Typography>
                </Box>
              )
            }
          />
        </Box>
        <Box className={classes.Container}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.title} width={400} height={100} />
              ) : (
                <Box>
                  <form className={classes.form} noValidate autoComplete='off'>
                    <Typography variant='subtitle2'>Name</Typography>
                    <CssTextField
                      id='name'
                      variant='outlined'
                      required
                      type='name'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    <Typography variant='subtitle2'>Email</Typography>
                    <CssTextField
                      id='email'
                      variant='outlined'
                      required
                      type='email'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    <Typography variant='subtitle2'>Sujbect</Typography>
                    <CssTextField
                      id='sujbect'
                      variant='outlined'
                      required
                      type='sujbect'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    <Typography variant='subtitle2'>Message</Typography>
                    <CssTextField
                      id='message'
                      variant='outlined'
                      required
                      type='message'
                      multiline
                      rows={5}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    <BlueButton title={'Submit Message'} />
                    <br />
                  </form>
                </Box>
              )
            }
          />
          <CardHeader
            subheader={loading ? <Skeleton width={400} height={400} /> : null}
          />
        </Box>
      </Box>
    </Box>
  );
};

// Add from validation - Formik?

const useStyles = makeStyles(() => ({
  root: {
    height: '90vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF',
  },
  mainContainer: {
    width: '450px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  Container: {
    width: '100%',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  header: {
    fontWeight: 700,
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: blue.A100,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: blue.A100,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'default',
      },
      '&:hover fieldset': {
        borderColor: blue.A100,
      },
      '&.Mui-focused fieldset': {
        borderColor: blue.A100,
      },
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default Register;
