
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'unset',
  },
  content: {
    width: '100%',
  },
  signUpText: {
    paddingLeft: '20px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '40px',
      textAlign: 'center',
    },
  },
  legalText: {
    fontSize: '14px',
  },
  legalContainer: {
    marginTop: '20px',
  },
  checkBox: {
    paddingLeft: '0px',
    transform: 'translateY(-9px)',
  },
  formContainer: {
    width: '100%',
    margin: 'auto',
    marginTop: '40px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&:hover::-webkit-scrollbar': {
      width: '5px',
      height: '8px',
      backgroundColor: '#eeeeee',
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'unset',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px !important',
    },
  },
  signUpButtonContainer: {
    marginTop: '40px',
  },
  customFormGridLeftPadding: {
    paddingLeft: '0px !important',
    paddingTop: '25px !important',
    paddingBottom: '0px !important',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0px !important',
    },
  },
  customFormGridRightPadding: {
    paddingRight: '0px !important',
    paddingTop: '25px !important',
    paddingBottom: '0px !important',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0px !important',
    },
  },
  customFormGridNoPadding: {
    paddingRight: '0px !important',
    paddingLeft: '0px !important',
    paddingTop: '25px !important',
    paddingBottom: '0px !important',
    position: 'relative',
  },
  signUpButton: {
    paddingRight: '20px',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
}));
