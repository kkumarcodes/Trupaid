import React, { FC, useEffect, useState, useMemo } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Button from 'components/Button';
import { Dialog as MuiDialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

import Typography from 'components/Typography';
import WellPaidSelect from 'components/Select';
import Link from 'components/Link';
import FormattedInputs from '../ConfirmRecurringBills/FormattedInput';
import PercentageInput from './PercentageInput';
import Checkbox from 'components/Checkbox';
import WellPaidDatePicker from 'components/DatePicker';

import { getAccounts, Accounts } from 'store/accountsSlice';
import { getSplitOptions, SplitOptions } from 'store/splitOptionSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/store';

const useStyles = makeStyles(() => ({
  customDialogWidth: {
    width: '497px',
    borderRadius: '15px',
  },
  billTitleContainer: {
    marginTop: '7px',
    marginBottom: '25px',
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    padding: '25px',
  },
  modalConfirmButton: {
    marginRight: '15px',
  },
  modalTextItem: {
    marginTop: '15px',
    alignItems: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  marginTopTwentyFive: {
    marginTop: '25px',
  },
  marginBottomTwentyFive: {
    marginBottom: '25px',
  },
  transferTimingContainer: {
    marginTop: '25px',
    marginBottom: '25px',
  },
  repeatUntilContainer: {
    marginTop: '15px',
    marginBottom: '25px',
  },
  checkBoxWrapper: {
    textAlign: 'right',
    transform: 'translateX(8px)',
  },
  moreOptionPercentage: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#334282',
    },
  },
  fixedAmountInput: {
    textAlign: 'right',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#334282',
    },
  },
}));

interface Props {
  moreOptionDialogOpen: boolean;
  moreOptionBillAmount: number;
  billTitle: string;
  nextDate: string;
  selectedUsers: any;
  handleClose: () => void;
  splitAmount: any;
  splitTypeValue: string;
  setSplitAmount: (amount: any) => void;
  setSplitTypeValue: (splitType: string) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="body1">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const MoreOptionDialog: FC<Props> = (props) => {
  const classes = useStyles();
  const dispath = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const {
    moreOptionDialogOpen,
    moreOptionBillAmount,
    billTitle,
    nextDate,
    selectedUsers,
    handleClose,
    splitAmount,
    splitTypeValue,
    setSplitAmount,
    setSplitTypeValue,
  } = props;

  const initialOptions = {
    transferTiming: 'after_bill_paid',
    repeatUntil: 'manually_stopped',
    splitType: splitTypeValue,
    depositTo: 'Plaid Checking',
  };

  const [amount, setAmount] = useState(splitAmount);
  const accounts = useSelector(Accounts);
  const [value, setValue] = useState<any>(initialOptions);
  const splitOptions = useSelector(SplitOptions);

  useEffect(() => {
    setAmount(splitAmount);
  }, [splitAmount]);

  useEffect(() => {
    setSplitTypeValue(value.splitType);
  }, [value.splitType]);

  const transferTiming = [
    { label: 'After Bill is Paid', value: 'after_bill_paid' },
    { label: 'Fixed Monthly', value: 'fixed_monthly' },
  ];

  const repeatUntil = [
    { label: 'Manually Stopped', value: 'manually_stopped' },
  ];

  const splitType = [
    { label: 'Even', value: 'even' },
    { label: 'Percentages', value: 'percentage' },
    { label: 'Fixed Amounts', value: 'fixed' },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispath(getAccounts());
    dispath(getSplitOptions());
  }, []);

  const calcPercentage = (value: number) => {
    let percentage = 0;

    if (selectedUsers && value !== undefined) {
      percentage = Math.round((value * 100) / moreOptionBillAmount);
    }

    return percentage;
  };

  const calcSplitedAmount = useMemo(() => {
    let requestAmount = 0;

    if (selectedUsers) {
      selectedUsers.forEach((item: any) => {
        requestAmount += amount[item.id!!];
      });
    }

    return moreOptionBillAmount - requestAmount;
  }, [amount, selectedUsers]);

  const calcSplitedPercentage = useMemo(() => {
    return Math.round((calcSplitedAmount * 100) / moreOptionBillAmount);
  }, [calcSplitedAmount, moreOptionBillAmount]);

  return (
    <div>
      <MuiDialog
        open={moreOptionDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paperWidthSm: classes.customDialogWidth,
        }}
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          <Typography variant="codeValue">More Options</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container alignItems="center">
            <Grid item xs={5}>
              <Typography variant="listItem1">{billTitle}</Typography>
            </Grid>
            <Grid item xs={7} className={classes.textAlignRight}>
              <Typography variant="listItem1">
                $
                {moreOptionBillAmount
                  .toFixed(2)
                  .toString()
                  .split(',')
                  .join('')
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            className={classes.marginBottomTwentyFive}
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography>Monthly ({nextDate})</Typography>
            </Grid>
            <Grid item xs={7} className={classes.textAlignRight}>
              <Typography>{value.depositTo}</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            className={classes.transferTimingContainer}
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography>Transfer Timing</Typography>
            </Grid>
            <Grid item xs={7}>
              <WellPaidSelect
                defaultValue={transferTiming[0].value}
                selectItem={transferTiming}
                onChange={(newValue) =>
                  setValue({ ...value, transferTiming: newValue })
                }
              />
            </Grid>
          </Grid>
          {value.transferTiming === 'fixed_monthly' && (
            <>
              <Grid container alignItems="center">
                <Grid item xs={11}>
                  <Typography variant="graphAxisLabel">
                    For bill splits in advance of the bill being paid, select
                    here to evenly split any amount variances at month end.
                  </Typography>
                </Grid>
                <Grid item xs={1} className={classes.checkBoxWrapper}>
                  <Checkbox />
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.transferTimingContainer}
                alignItems="center"
              >
                <Grid item xs={5}>
                  <Typography>Next Transfer Date</Typography>
                </Grid>
                <Grid item xs={7}>
                  <WellPaidDatePicker />
                </Grid>
              </Grid>
            </>
          )}

          <Divider />
          <Grid
            container
            className={classes.marginTopTwentyFive}
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography>Deposit To</Typography>
            </Grid>
            <Grid item xs={7}>
              <WellPaidSelect
                defaultValue={
                  accounts
                    .filter((item) => item.subtype == 'checking')
                    .map((item) => item.name)?.[0]
                }
                selectItem={accounts
                  .filter((item) => item.subtype == 'checking')
                  .map((item) => ({ label: item.name, value: item.name }))}
                onChange={(newValue) =>
                  setValue({ ...value, depositTo: newValue })
                }
              />
            </Grid>
          </Grid>

          <Grid
            container
            className={classes.repeatUntilContainer}
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography>Repeat Until</Typography>
            </Grid>
            <Grid item xs={7}>
              <WellPaidSelect
                defaultValue={repeatUntil[0].value}
                selectItem={repeatUntil}
                onChange={(newValue) =>
                  setValue({ ...value, repeatUntil: newValue })
                }
              />
            </Grid>
          </Grid>
          <Divider />

          <Grid
            container
            className={classes.marginTopTwentyFive}
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography>Split Type</Typography>
            </Grid>
            <Grid item xs={7}>
              <WellPaidSelect
                defaultValue={splitTypeValue}
                selectItem={splitType}
                onChange={(newValue) => {
                  setValue({ ...value, splitType: newValue });
                  if (newValue === 'even') {
                    let result: any = {};
                    selectedUsers.forEach((item: any) => {
                      result[item.id] =
                        moreOptionBillAmount / (selectedUsers.length + 1);
                    });
                    setAmount(result);
                  }
                }}
              />
            </Grid>
          </Grid>
          {value.splitType === 'even' && (
            <>
              <Grid container className={classes.modalTextItem}>
                <Grid item xs={5}>
                  <Typography>Your Share</Typography>
                </Grid>
                <Grid item xs={7} className={classes.textAlignRight}>
                  <Typography>
                    {calcSplitedPercentage}% ($
                    {calcSplitedAmount
                      .toFixed(2)
                      .toString()
                      .split(',')
                      .join('')
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    est)
                  </Typography>
                </Grid>
              </Grid>

              {selectedUsers.map((item: any) => (
                <Grid container className={classes.modalTextItem}>
                  <Grid item xs={5}>
                    <Typography>{item.preferredName}</Typography>
                  </Grid>
                  <Grid item xs={7} className={classes.textAlignRight}>
                    <Typography>
                      {calcPercentage(amount[item.id])}% ($
                      {amount[item.id]?.toFixed(2)} est)
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </>
          )}

          {value.splitType === 'percentage' && (
            <>
              <Grid container className={classes.modalTextItem}>
                <Grid item xs={5}>
                  <Typography>Your Share</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    ($
                    {calcSplitedAmount
                      .toFixed(2)
                      .toString()
                      .split(',')
                      .join('')
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    est)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{calcSplitedPercentage}%</Typography>
                </Grid>
              </Grid>

              {selectedUsers.map((item: any) => (
                <Grid container className={classes.modalTextItem}>
                  <Grid item xs={5}>
                    <Typography>{item.preferredName}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>
                      ($
                      {amount[item.id]
                        .toFixed(2)
                        .toString()
                        .split(',')
                        .join('')
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                      est)
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.moreOptionPercentage}>
                    <PercentageInput
                      amount={calcPercentage(amount[item.id]).toString()}
                      onChange={(value) =>
                        setAmount({
                          ...amount,
                          [item.id]:
                            (moreOptionBillAmount * Number(value)) / 100,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              ))}
            </>
          )}

          {value.splitType === 'fixed' && (
            <>
              <Grid container className={classes.modalTextItem}>
                <Grid item xs={8}>
                  <Typography>Your Share</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    $
                    {calcSplitedAmount
                      .toFixed(2)
                      .toString()
                      .split(',')
                      .join('')
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    est
                  </Typography>
                </Grid>
              </Grid>

              {selectedUsers.map((item: any) => (
                <Grid container className={classes.modalTextItem}>
                  <Grid item xs={8}>
                    <Typography>{item.preferredName}</Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.fixedAmountInput}>
                    <FormattedInputs
                      amount={amount[item.id]?.toString()}
                      onChange={(value) =>
                        setAmount({
                          ...amount,
                          [item.id]: Number(value),
                        })
                      }
                    />
                  </Grid>
                </Grid>
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions classes={{ root: classes.buttonContainer }}>
          <Grid container alignItems="center">
            <Grid item className={classes.modalConfirmButton}>
              <Button
                size="small"
                onClick={() => {
                  setSplitAmount(amount);
                  handleClose();
                }}
              >
                Confirm
              </Button>
            </Grid>
            <Grid item>
              <Link onClick={handleClose}>Cancel</Link>
            </Grid>
          </Grid>
        </DialogActions>
      </MuiDialog>
    </div>
  );
};

export default MoreOptionDialog;
