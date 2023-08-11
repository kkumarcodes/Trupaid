import React, { FunctionComponent, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Box } from '@material-ui/core';

import OnBoardNavbar from 'components/OnBoardingNavbar';

import { useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/Button';
import Typography from 'components/Typography';
import SocialButton from 'features/Login/OnboardingLanding/SocialButton';

import InfographicLayout from 'components/Layouts/InfographicLayout';

import onboardingImg from 'assets/images/branding/onboarding.png';
import creditCardImg from 'assets/images/branding/creditCard.png';
import moneyChipImg from 'assets/images/branding/moneyChip.png';
import cartImg from 'assets/images/branding/cart.png';
import AppleIcon from 'assets/images/others/appleicon.png';
import GoogleIcon from 'assets/images/others/googleicon.png';

const infographicSlides = [
  {
    imgSrc: onboardingImg,
    title: 'Welcome to TruPaid',
    info: 'Split bills like rent and electric without effort or reminders.',
  },
  {
    imgSrc: creditCardImg,
    title: 'Financial Hub',
    info: 'Connect your accounts to see balances and all your transactions in one place.',
  },
  {
    imgSrc: moneyChipImg,
    title: 'Effortless Planning',
    info: "Build an effortless and tailored plan for your monthly finances with help from TruPaid's proprietary algorithm.",
  },
  {
    imgSrc: cartImg,
    title: 'Catered Deals',
    info: 'Find the latest deals on home services in your local area, saving time and money.',
  },
];

const column = [
  { header: 'Description', columnValue: 'description' },
  { header: 'Frequency', columnValue: 'frequency' },
  { header: 'Your Share', columnValue: 'your_share' },
  { header: 'Amount', columnValue: 'amount' },
];

const userData = [
  {
    description: ['HBO Go', 'Next: Apr 27th'],
    frequency: 'Monthly',
    share: '33%',
    amount: '10.00',
  },
  {
    description: ['Rent', 'Next: Apr 28th'],
    frequency: 'Monthly',
    share: '50%',
    amount: '1,500.00',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'unset',
  },
  content: {
    width: '100%',
  },
  onBoardingTitleWrapper: {
    paddingBottom: '0px !important',
    marginTop: '36px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      margin: 'auto',
    },
  },
  formContainer: {
    width: '100%',
    maxWidth: '580px',
    margin: 'auto',
    paddingBottom: '85px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '680px',
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'unset',
    },
  },
  optionDividerWrapper: {
    display: 'flex',
    marginTop: '6px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '27px',
      marginBottom: '27px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  optionDivider: {
    borderTop: '1px solid #d8d8d8',
    width: '100%',
    height: '20px',
    marginTop: '11px',
  },
  signUpButton: {
    marginRight: '9px',
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      paddingRight: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '15px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      marginBottom: '20px',
      marginTop: 0,
    },
  },
  loginButton: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '15px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      paddingLeft: 0,
    },
  },
  buttonPaddingLeft: {
    paddingLeft: '8px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  buttonPaddingRight: {
    paddingRight: '8px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      marginBottom: '25px',
    },
  },
  noteWrapper: {
    marginTop: '16px',
  },
  mobileDividerOne: {
    width: '45.3%',
  },
  mobileDividerMiddle: {
    width: '9.4%',
  },
  buttonWrapper: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  titlePart1: {
    fontSize: '21px',
    fontWeight: 900,
    lineHeight: '28px',
    fontFamily: 'Playfair Display',
    marginTop: '65px',
  },
  titlePart2: {
    fontSize: '34px',
    fontWeight: 900,
    lineHeight: '45px',
    fontFamily: 'Playfair Display',
  },
}));

const MobileTitleContent: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item container justify="center">
        <Typography className={classes.titlePart1}>Welcome to</Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography className={classes.titlePart2}>TruPaid!</Typography>
      </Grid>
    </>
  );
};

const OnBoardingLanding: FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const { loginWithRedirect, user = {}, logout } = useAuth0();

  const Content = (
    <Grid
      container
      wrap="wrap"
      className={classes.content}
      alignContent="space-between"
    >
      <OnBoardNavbar
        logoHeight={50}
        logoWidth={30}
        backEnabled={false}
        viewBox="0 0 30 36"
        mobileLogoHeight={24}
        mobileLogoWidth={110}
        mobileLogoViewBox="0 0 103 24"
        navbarMobileLayoutUpdate={false}
        hideOnMobile={matchesXsDown ? true : false}
        showTotalCost={false}
      />
      <Grid
        container
        direction="row"
        spacing={5}
        className={classes.formContainer}
      >
        {matchesXsDown ? null : (
          <>
            <Grid item className={classes.onBoardingTitleWrapper}>
              <Typography variant="h2">Welcome to TruPaid!</Typography>
            </Grid>
            <Grid item>
              <Typography>
                The best way to split shared bills, track expenses, and set a
                personal budget is finally here!
              </Typography>
            </Grid>
          </>
        )}

        <Grid item container className={classes.buttonWrapper}>
          <Grid item xs={12} sm={6} md={3} className={classes.signUpButton}>
            <Button
              size="small"
              fullWidth={matchesSmDown ? true : false}
              onClick={() =>
                loginWithRedirect({
                  screen_hint: 'signup',
                  redirectUri: `${window.location.origin}/redirect`,
                })
              }
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.loginButton}>
            <Button
              size="small"
              color="slate"
              fullWidth={matchesSmDown ? true : false}
              onClick={() =>
                loginWithRedirect({
                  redirectUri: `${window.location.origin}/redirect`,
                })
              }
            >
              Log In
            </Button>
          </Grid>
        </Grid>

        {matchesSmDown ? (
          <Grid item container className={classes.optionDividerWrapper}>
            <Grid item className={classes.mobileDividerOne}>
              <div className={classes.optionDivider}></div>
            </Grid>
            <Grid item className={classes.mobileDividerMiddle}>
              <Typography>Or</Typography>
            </Grid>
            <Grid item className={classes.mobileDividerOne}>
              <div className={classes.optionDivider}></div>
            </Grid>
          </Grid>
        ) : (
          <Grid item container className={classes.optionDividerWrapper}>
            <Grid item md={1}>
              <Typography>Or</Typography>
            </Grid>
            <Grid md={11}>
              <div className={classes.optionDivider}></div>
            </Grid>
          </Grid>
        )}

        {matchesXsDown ? null : (
          <Grid item container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.buttonPaddingRight}
            >
              <SocialButton
                buttonText="Continue with Apple"
                color="white"
                buttonIcon={AppleIcon}
                fullWidth={true}
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: `${window.location.origin}/redirect`,
                  })
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.buttonPaddingLeft}
            >
              <SocialButton
                buttonText="Continue with Google"
                color="white"
                buttonIcon={GoogleIcon}
                fullWidth={true}
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: `${window.location.origin}/redirect`,
                  })
                }
              />
            </Grid>
          </Grid>
        )}
        {matchesSmDown ? null : (
          <Grid item className={classes.noteWrapper}>
            <Typography>
              Please Note: TruPaid does not share your information with Apple
              or Google.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );

  return (
    <InfographicLayout
      content={Content}
      infographicSlides={infographicSlides}
      showDot={true}
      MobileTitleContent={MobileTitleContent}
    />
  );
};

export default OnBoardingLanding;
