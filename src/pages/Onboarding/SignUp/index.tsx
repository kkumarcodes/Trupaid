import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { createUser, getStatus } from '../../../store/usersSlice';
import Link from '../../../components/Link';

import Banner from '../../../components/Banner';
import OnBoardNavbar from '../../../components/OnBoardingNavbar';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import SelectState from '../../../components/SelectState';

import { CreateUser } from '../../../types/request/user';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Container from '../../../components/Container';

import onboardingImg from '../../../assets/images/branding/onboarding.png';
import creditCardImg from '../../../assets/images/branding/creditCard.png';
import moneyChipImg from '../../../assets/images/branding/moneyChip.png';
import cartImg from '../../../assets/images/branding/cart.png';

import { useAppDispatch } from '../../../hooks/store';

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

const initialForm: CreateUser = {
  phoneNumber: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  postalCode: '',
  dob: '',
  ssn: '',
  firstName: '',
  lastName: '',
  preferredName: '',
  astraRedirectUri: '',
};

const OnboardingRoutes: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const userStatus = useSelector(getStatus);

  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedPolicy, setConfirmedPolicy] = useState(false);
  const [disableSubmission, setdisableSubmission] = useState<any>({
    firstName: true,
    lastName: true,
    phoneNumber: true,
    address1: true,
    city: true,
    ssn: true,
    dob: true,
    state: true,
    postalCode: true,
  });

  const handleChange = (prop: string, value: any) => {
    if (prop === 'phoneNumber') {
      value = value.replace('(', '');
      value = value.replace(')', '');
      value = value.replace(' ', '');
      value = value.replace('-', '');
      value = '+1' + value;
    }
    setForm({ ...form, [prop]: value });
  };

  const handleError = (name: string, error: boolean) => {
    const submission = { ...disableSubmission, [name]: error };
    let errorSubmission = false;
    Object.keys(submission).forEach((item: any) => {
      if (submission[item]) {
        errorSubmission = submission[item];
      }
    });
    setError(errorSubmission);
    setdisableSubmission(submission);
  };

  const submitForm = async () => {
    try {
      const result = await dispatch(
        createUser({
          ...form,
          astraRedirectUri: `${process.env.REACT_APP_ASTRA_REDIRECT_URI}`,
        }),
      );
      const payload = result.payload as any;
      if (payload.data) {
        let userIntentId = payload.data.astraUserIntentId;
        const astraUrl = process.env.REACT_APP_ASTRA_URL;
        const clientId = process.env.REACT_APP_ASTRA_CLIENT_ID;
        const astraRedirectUri = process.env.REACT_APP_ASTRA_REDIRECT_URI;

        window.location.href = `${astraUrl}?client_id=${clientId}&redirect_uri=${astraRedirectUri}&response_type=code&user_intent_id=${userIntentId}`;
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container>
      <Grid
        container
        wrap="wrap"
        className={classes.content}
        alignContent="space-between"
      >
        <OnBoardNavbar
          title="Sign Up"
          logoHeight={50}
          logoWidth={30}
          backEnabled={true}
          viewBox="0 0 30 36"
          mobileLogoHeight={24}
          mobileLogoWidth={110}
          mobileLogoViewBox="0 0 103 24"
          navbarMobileLayoutUpdate={true}
          showTotalCost={false}
        />
        <Banner severity="error" text={errorMessage} />
        <Grid
          container
          direction="row"
          spacing={5}
          alignItems="center"
          justify="center"
          className={classes.formContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridLeftPadding}
          >
            <Input
              type="text"
              placeholder="First Name"
              fullWidth={true}
              inputLabel="First Name"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('firstName', value);
                handleError('firstName', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridRightPadding}
          >
            <Input
              type="text"
              placeholder="Last Name"
              fullWidth={true}
              inputLabel="Last Name"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('lastName', value);
                handleError('lastName', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            justify="center"
            alignContent="center"
            className={classes.customFormGridNoPadding}
          >
            <Input
              disabled
              type="email"
              placeholder="Email Address"
              fullWidth={true}
              inputLabel="Email Address"
              disableUnderline={true}
              value={user.email}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridLeftPadding}
          >
            <Input
              type="optional"
              placeholder="Preferred Name"
              fullWidth={true}
              inputLabel="Preferred Name (Optional)"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('preferredName', value);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridRightPadding}
          >
            <Input
              type="phone"
              placeholder="(123) 456-7890"
              fullWidth={true}
              inputLabel="Phone Number"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('phoneNumber', value);
                handleError('phoneNumber', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            justify="center"
            alignContent="center"
            className={classes.customFormGridNoPadding}
          >
            <Input
              type="text"
              placeholder="1234 Street Lane"
              fullWidth={true}
              inputLabel="Address Line 1"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('address1', value);
                handleError('address1', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridLeftPadding}
          >
            <Input
              type="optional"
              placeholder="Aprtment 1"
              fullWidth={true}
              inputLabel="Address Line 2"
              disableUnderline={true}
              onChange={(value) => {
                handleChange('address2', value);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridRightPadding}
          >
            <SelectState
              selectLabel="State"
              defaultValue="Select a state"
              onChange={(value) => {
                handleChange('state', value);
                handleError('state', value ? false : true);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridLeftPadding}
          >
            <Input
              type="text"
              placeholder="Irvine"
              fullWidth={true}
              inputLabel="City"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('city', value);
                handleError('city', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridRightPadding}
          >
            <Input
              type="zipcode"
              placeholder="12345"
              fullWidth={true}
              inputLabel="Zipcode"
              disableUnderline={true}
              maxLength={5}
              onChange={(value, error) => {
                handleChange('postalCode', value);
                handleError('postalCode', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridLeftPadding}
          >
            <Input
              type="date"
              placeholder="01/01/2021"
              fullWidth={true}
              inputLabel="Date of Birth"
              disableUnderline={true}
              onChange={(value, error) => {
                handleChange('dob', value);
                handleError('dob', error);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            className={classes.customFormGridRightPadding}
          >
            <Input
              type="ssn"
              placeholder="xxxx"
              fullWidth={true}
              inputLabel="Last 4 Digits of SSN"
              disableUnderline={true}
              maxLength={4}
              onChange={(value, error) => {
                handleChange('ssn', value);
                handleError('ssn', error);
              }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            wrap="nowrap"
            spacing={0}
            xs={12}
            className={classes.legalContainer}
          >
            <Checkbox
              checked={confirmedPolicy}
              onChange={(event) => setConfirmedPolicy(event.target.checked)}
              defaultChecked
              className={classes.checkBox}
            />
            <Typography className={classes.legalText}>
              I am a U.S. Resident, 18 years or older, and agree to the{' '}
              <Link color="black" className={classes.legalText}>
                Program Agreement
              </Link>{' '}
              and{' '}
              <Link color="black" className={classes.legalText}>
                Privacy Policy
              </Link>
              .
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            xs={12}
            className={classes.signUpButtonContainer}
          >
            <Grid item xs={12} sm={6} className={classes.signUpButton}>
              <Button
                isLoading={userStatus === 'loading'}
                disabled={!confirmedPolicy || error}
                size="large"
                fullWidth={true}
                onClick={submitForm}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.signUpText}>
              <Typography variant="body2">
                Already have an account?&nbsp;
                <Link href="#" target="_blank">
                  Log In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OnboardingRoutes;
