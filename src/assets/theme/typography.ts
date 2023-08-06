import { createMuiTheme } from '@material-ui/core/styles';
import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';

import breakpoints from './breakpoints';

const typographyTheme = createMuiTheme({
  breakpoints: breakpoints as BreakpointsOptions,
});

export default {
  fontFamily: ['Montserrat', 'Playfair Display'].join(','),
  h1: {
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    fontSize: '34px',
    lineHeight: '45px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('sm')]: {
      fontSize: '34px',
      lineHeight: '45px',
    },
  },
  h2: {
    fontFamily: 'Playfair Display',
    fontWeight: 900,
    fontSize: '21px !important',
    lineHeight: '24px !important',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('sm')]: {
      fontSize: '27px',
      lineHeight: '36px',
    },
    [typographyTheme.breakpoints.up('md')]: {
      fontSize: '21px',
      lineHeight: '24px',
    },
  },
  h3: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('sm')]: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    [typographyTheme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  codeValue: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    letterSpacing: 0,
    fontSize: '21px',
    lineHeight: '26px',
  },
  largeText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: 0,
  },
  subtitle1: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  fieldInputLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '27px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('sm')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    [typographyTheme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  listItem1: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: 0,
  },
  body1: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  body2: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '17px',
    },
  },
  buttonLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '21px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('sm')]: {
      fontSize: '14px',
      lineHeight: '21px',
    },
  },
  graphAxisLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.only('sm')]: {
      fontSize: '21px',
      lineHeight: '26px',
    },
  },
  smallText1: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: 0,
  },
  tileChoiceLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.down('xs')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  tagsLegendLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '10px',
    lineHeight: '12px',
    letterSpacing: 0,
    [typographyTheme.breakpoints.up('md')]: {
      fontSize: '10px',
      lineHeight: '12px',
    },
  },
  formErrorMessage: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: 0,
    color: '#D02424',
    display: 'block',
  },
};
