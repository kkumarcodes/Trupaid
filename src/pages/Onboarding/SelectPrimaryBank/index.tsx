import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OnBoardNavbar from '../../../components/OnBoardingNavbar';
import BankConfirmation from './BankConfirmation';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';

import API from '../../../api';
import { useAppDispatch } from '../../../hooks/store';
import { connect, useSelector } from 'react-redux';
import { Accounts, getStatus, getAccounts } from '../../../store/accountsSlice';
import { getConnections, Connections } from '../../../store/connectionSlice';

import bankImg from '../../../assets/images/branding/bankImg.png';
import bankAvartar from '../../../assets/images/profile/bank_avatar.png';
import Banner from '../../../components/Banner';
import Container from '../../../components/Container';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTheme, useMediaQuery } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  customContainer: {
    width: '100%',
    marginTop: '25px',
  },
  onBoardingNavWrapper: {
    padding: '20px',
  },
  connectedAccountNumber: {
    marginTop: '65px',
    textAlign: 'center',
  },
  accountInfoSection: {
    marginTop: '40px',
    padding: '0px',
  },
  accountCardWrapper: {
    marginBottom: '15px',
    cursor: 'pointer',
  },
  buttonWrapper: {
    marginTop: '40px',
    paddingBottom: '80px',
  },
  top: {
    color: theme.palette.wellPaidGreen,
    animationDuration: '550ms',
    left: 0,
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '50px',
    },
  },
  circle: {
    strokeLinecap: 'round',
  },
  apiLoadingNotificaton: {
    margin: '80px 0px',
  },
  explanation: {
    textAlign: 'center',
  },
  cardTypeLabel: {
    marginBottom: '15px',
  },
}));

const infographicSlides = [
  {
    imgSrc: bankImg,
    title: 'Congratulations!',
    info: 'Now that your accounts are connected we can split bills, send transfers, and plan a budget together.  Let’s get going!',
  },
];

let timer: any = null;

const SelectPrimaryBank: FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedAccount, setSelectAccount] = useState('');
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const accountStatus = useSelector(getStatus);
  const accounts = useSelector(Accounts);
  const connections = useSelector(Connections);
  console.log(accounts);

  // const accountTypes =

  // const getAstraReadyState = async () => {
  //   let res = await API.getAstraReadyState(user?.sub!);

  //   if (res.data.status) {
  //     console.log(res.data.status);
  //     if (timer) {
  //       window.clearInterval(timer);
  //     }

  //     dispatch(getAccounts());
  //   }
  // };

  useEffect(() => {
    if (accounts.length == 1 && accounts[0].subtype !== 'credit card') {
      setSelectAccount(accounts[0].id);
    }
  }, [accounts]);

  // useEffect(() => {
  //   timer = window.setInterval(() => {
  //     getAstraReadyState();
  //     console.log('Checking Astra ready state...');
  //   }, 2000);

  //   return () => {
  //     if (timer) {
  //       window.clearInterval(timer);
  //     }
  //   };
  // }, [user]);

  useEffect(() => {
    dispatch(getAccounts());
    dispatch(getConnections());
  }, []);

  const goNext = async () => {
    try {
      console.log(connections);
      setSubmitLoading(true);
      if (connections.length !== 0) {
        history.push('/confirm-invitation');
        return;
      }

      if (selectedAccount) await API.createPrimaryAccount(selectedAccount);
      setSubmitLoading(false);
      history.push('/dashboard');
    } catch (e) {
      setError(e.message);
      setSubmitLoading(false);
    }
  };

  const accountSelected = accounts.find((item) => item.id === selectedAccount);

  return (
    <Container>
      <Grid container wrap="wrap" alignContent="space-between">
        <OnBoardNavbar
          title="Primary Checking Account"
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

        <Grid container className={classes.customContainer}>
          <Grid item xs={12} className={classes.explanation}>
            <Typography variant="body1">
              Choose a primary checking account to receive or send transfers.
              You can change this at any time later.
            </Typography>
          </Grid>
          {accountStatus == 'loading' ? (
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              className={classes.apiLoadingNotificaton}
            >
              <Typography>
                Retrieving account information. This may take a moment.
              </Typography>
              <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                  circle: classes.circle,
                }}
                size={40}
                thickness={4}
              />
            </Grid>
          ) : (
            <>
              <Banner severity="error" text={error} />
              <Grid item xs={12} className={classes.accountInfoSection}>
                <Grid item className={classes.cardTypeLabel}>
                  <Typography variant="listItem1">Checking Accounts</Typography>
                </Grid>
                {accounts
                  .filter((item) => item.subtype === 'checking')
                  .map((item: any, index) => (
                    <Grid
                      key={index.toString()}
                      item
                      xs={12}
                      className={classes.accountCardWrapper}
                    >
                      <BankConfirmation
                        bankName={item.name}
                        accountType={item.subtype}
                        avatarUrl={
                          item.institutionLogo
                            ? item.institutionLogo
                            : bankAvartar
                        }
                        currentBalance={item.currentBalance}
                        primaryState={true}
                        selectedAccount={selectedAccount}
                        onSelectAccount={setSelectAccount}
                        id={item.id}
                        clickable={true}
                      />
                    </Grid>
                  ))}
              </Grid>
              <Grid item xs={12} className={classes.accountInfoSection}>
                <Grid item className={classes.cardTypeLabel}>
                  <Typography variant="listItem1">Other Accounts</Typography>
                </Grid>
                {accounts
                  .filter(
                    (item) =>
                      item.subtype !== 'credit card' &&
                      item.subtype !== 'checking',
                  )
                  .map((item: any, index) => (
                    <Grid
                      key={index.toString()}
                      item
                      xs={12}
                      className={classes.accountCardWrapper}
                    >
                      <BankConfirmation
                        bankName={item.name}
                        accountType={item.subtype}
                        avatarUrl={
                          item.institutionLogo
                            ? item.institutionLogo
                            : bankAvartar
                        }
                        currentBalance={item.currentBalance}
                        primaryState={true}
                        selectedAccount={selectedAccount}
                        onSelectAccount={setSelectAccount}
                        id={item.id}
                        clickable={false}
                      />
                    </Grid>
                  ))}
              </Grid>
              <Grid item xs={12} className={classes.connectedAccountNumber}>
                <Typography variant="body2">
                  <b>{accounts.length}</b> Accounts Connected
                </Typography>
              </Grid>
            </>
          )}

          <Grid item xs={12} className={classes.buttonWrapper}>
            <Button
              isLoading={submitLoading}
              disabled={
                accountSelected === undefined ||
                accountSelected?.subtype !== 'checking'
              }
              size="small"
              fullWidth={matchesMdDown ? true : false}
              onClick={goNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectPrimaryBank;
