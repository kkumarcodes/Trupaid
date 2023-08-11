import React, { FC, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '../../../components/Typography';
import { ConfirmationYesIcon, ConfirmationNoIcon } from '../../../components/Icons';
import { Paper, Box, Grid, useMediaQuery } from '@material-ui/core';

export interface Props {
  userName: string;
  userAlias: string;
  avatarUrl: string;
  confirmationStatus: string;
  currentBalance?: number;
  onClicked: (clicked: string) => void;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: '#F3F3F3',
    borderRadius: '20px',
  },
  userAvatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  confirmButton: {
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    padding: '10px 15px',
    cursor: 'pointer',
    textAlign: 'center',
    marginLeft: '15px',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.0597684)',
  },
  confirmedButtonStyle: {
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    padding: '10px 15px',
    border: '1px solid #00D200',
    cursor: 'pointer',
    textAlign: 'center',
    marginLeft: '15px',
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
  confirmationButtonWrapper: {
    justifyContent: 'flex-end',
    marginTop: '0px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      marginTop: '25px',
    },
  },
  userAlias: {
    marginTop: '5px',
  },
}));

const BillSplitConfirmation: FC<Props> = (props) => {
  const {
    userName,
    userAlias,
    avatarUrl,
    confirmationStatus,
    currentBalance,
    onClicked,
  } = props;
  const classes = useStyles();

  const [confirmed, setConfirmed] = useState('');

  function handleClick(clicked: string) {
    setConfirmed(confirmed === clicked ? '' : clicked);
    onClicked(clicked);
  }

  return (
    <>
      <Grid container className={classes.container}>
        <Grid
          xs={12}
          sm={confirmationStatus == 'pending' ? 12 : 7}
          item
          container
          alignItems="center"
        >
          <Grid item>
            <img src={avatarUrl} alt="Avatar" className={classes.userAvatar} />
          </Grid>
          <Grid item direction="column">
            <Grid item container>
              <Typography variant="listItem1">{userName}</Typography>
              {confirmationStatus == 'pending' && (
                <div className={classes.pendingConfirmation}>
                  <Typography variant="tagsLegendLabel">
                    Pending Confirmation
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item className={classes.userAlias}>
              <Typography variant="body1">{userAlias}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {confirmationStatus !== 'pending' &&
        confirmationStatus !== 'invited' ? (
          <Grid
            xs={12}
            sm={5}
            item
            container
            direction="row"
            className={classes.confirmationButtonWrapper}
          >
            <Grid item>
              <Paper
                className={
                  confirmed === 'yes'
                    ? classes.confirmedButtonStyle
                    : classes.confirmButton
                }
                onClick={() => handleClick('yes')}
                elevation={3}
              >
                <div className={classes.confirmIconWrapper}>
                  <ConfirmationYesIcon />
                </div>
                <Typography variant="smallText2">Yes</Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper
                className={
                  confirmed === 'no'
                    ? classes.confirmedButtonStyle
                    : classes.confirmButton
                }
                onClick={() => handleClick('no')}
              >
                <div className={classes.confirmIconWrapper}>
                  <ConfirmationNoIcon />
                </div>
                <Typography variant="smallText2">No</Typography>
              </Paper>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default BillSplitConfirmation;
