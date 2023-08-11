import React, { FC, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from 'components/Typography';
import { ConfirmationYesIcon, ConfirmationNoIcon } from 'components/Icons';
import { Paper, Box, Grid, useMediaQuery } from '@material-ui/core';

export interface Props {
  id: string;
  bankName: string;
  accountType?: string;
  clickable?: boolean;
  avatarUrl?: string;
  currentBalance?: string;
  primaryState?: boolean;
  primaryBtnText?: string;
  errorCallback?: string;
  onClicked?: (clicked: string) => void;
  selectedAccount: string;
  onSelectAccount: (account: string) => void;
}

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: '15px 25px',
    backgroundColor: '#F2F2F2',
    borderRadius: '20px',
  },
  confirmedCardContainer: {
    border: '1px solid #00D200',
    padding: '15px 25px',
    backgroundColor: '#F2F2F2',
    borderRadius: '20px',
  },
  disabledCardContainer: {
    padding: '15px 25px',
    backgroundColor: '#F2F2F2',
    borderRadius: '20px',
    cursor: 'not-allowed',
  },
  userAvatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    marginRight: '15px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  confirmIconWrapper: {
    padding: '13px',
    border: '1px solid #EEF1FA',
    borderRadius: '50%',
  },
  pendingConfirmation: {
    backgroundColor: '#ffffff',
    borderRadius: '11px',
    padding: '1px 7px 4px 7px',
    marginLeft: '11px',
  },
  accountType: {
    color: '#212121',
    textTransform: 'capitalize',
  },
  mainTextColor: {
    color: '#212121',
  },
  errorTextColor: {
    color: theme.palette.legendRed,
  },
  accountTypeWrapper: {
    marginTop: '5px',
  },
  primaryTextWrapper: {
    marginTop: '5px',
  },
  currentBalanceWrapper: {
    textAlign: 'right',
    paddingTop: '5px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
      marginTop: '5px',
    },
  },
}));

const BankConfirmation: FC<Props> = (props) => {
  const {
    id,
    bankName,
    accountType,
    avatarUrl,
    primaryState,
    currentBalance,
    errorCallback,
    selectedAccount,
    onSelectAccount,
    onClicked,
    clickable,
  } = props;
  const classes = useStyles();

  function numberWithCommas(x: string) {
    return Number(x)
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <div onClick={() => onSelectAccount(id)}>
        <Grid
          container
          className={
            selectedAccount === id && clickable == true
              ? classes.confirmedCardContainer
              : clickable == false
              ? classes.disabledCardContainer
              : classes.cardContainer
          }
        >
          <Grid xs={12} sm={8} md={8} item container alignItems="center">
            <Grid item>
              <img
                src={`data:image/png;base64, ${avatarUrl}`}
                alt="Avatar"
                className={classes.userAvatar}
              />
            </Grid>
            <Grid item>
              <Grid item>
                <Typography
                  variant="listItem1"
                  className={classes.mainTextColor}
                >
                  {bankName}
                </Typography>
              </Grid>
              <Grid item className={classes.accountTypeWrapper}>
                <Typography variant="body1" className={classes.accountType}>
                  {accountType}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            justify="flex-end"
            className={classes.currentBalanceWrapper}
          >
            <Grid item>
              <Typography variant="listItem1" className={classes.mainTextColor}>
                ${numberWithCommas(currentBalance!!)}
              </Typography>
            </Grid>
            {selectedAccount === id && clickable == true && (
              <Grid item className={classes.primaryTextWrapper}>
                <Typography variant="body1" className={classes.accountType}>
                  Primary
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BankConfirmation;
