import React, { FC } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import Typography from 'components/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
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
    percentage: {
      color: '#212121',
      textTransform: 'capitalize',
    },
    mainTextColor: {
      transform: 'translateY(4px)',
    },
    errorTextColor: {
      color: theme.palette.legendRed,
    },
    accountTypeWrapper: {
      marginTop: '5px',
    },
    percentageWrapper: {
      marginTop: '5px',
      paddingRight: '25px',
    },
    currentBalanceWrapper: {
      textAlign: 'right',
      paddingTop: '5px',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'left',
        marginTop: '5px',
      },
    },
    userItemContainer: {
      marginTop: '15px',
    },
    autoCompleteInput: {
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      padding: '13px',
    },
    iconButtonRoot: {
      padding: '0px !important',
      transform: 'translateX(10px)',
    },
  }),
);

interface Props {
  userAvatar: string;
  userName: string;
  userAlias: string;
  billAmount: number;
  percentage: number;
  splitType: string;
  onDelete?: () => void;
}

const UserConnection: FC<Props> = (props) => {
  const classes = useStyles();
  const {
    userAvatar,
    userName,
    userAlias,
    billAmount,
    percentage,
    splitType,
    onDelete,
  } = props;

  function numberWithCommas(x: string) {
    return Number(x)
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <Grid container className={classes.userItemContainer}>
        <Grid xs={12} sm={8} md={8} item container alignItems="center">
          <Grid item>
            <img src={userAvatar} alt="Avatar" className={classes.userAvatar} />
          </Grid>
          <Grid item>
            <Grid item>
              <Typography variant="listItem1" className={classes.mainTextColor}>
                {userName}
              </Typography>
            </Grid>
            <Grid item className={classes.accountTypeWrapper}>
              <Typography variant="body1" className={classes.percentage}>
                @{userAlias}
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
            <Typography variant="body1" className={classes.mainTextColor}>
              ${numberWithCommas(billAmount.toString())}
            </Typography>
            <IconButton
              classes={{ root: classes.iconButtonRoot }}
              onClick={onDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.percentageWrapper}>
            {splitType === 'fixed' ? (
              <Typography variant="body1">Fixed</Typography>
            ) : (
              <Typography variant="body1" className={classes.percentage}>
                {percentage}%
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserConnection;
