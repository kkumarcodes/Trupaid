import React, {
  FunctionComponent,
  useEffect,
  useState,
  FC,
  useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import {
  getTransactionSeries,
  transactionSeries,
} from '../../../store/transactionSeriesSlice';
import { useAppDispatch } from 'hooks/store';
import { DateTime } from 'luxon';

import RecurringBillLogo from '../../../assets/images/others/recurringBillLogo.svg';
import RecurringBillRect1 from '../../../assets/images/others/recurringBillRect1.png';
import RecurringBillRect3 from '../../../assets/images/others/recurringBillRect3.png';

import CallSplitIcon from '@material-ui/icons/CallSplit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import OnBoardNavbar from '../../../components/OnBoardingNavbar';
import Container from '../../../components/Container';
import Typography from '../../../components/Typography';
import CheckBox from '../../../components/Checkbox';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import RecurringBillAccordion from './RecurringBillAccordion';
import FormattedInputs from './FormattedInput';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  recurringBillInstruction: {
    textAlign: 'center',
    marginTop: '25px ',
  },
  expenseAmountContainer: {
    marginTop: '65px',
  },
  expenseAmount: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  recurringImgContainer: {
    marginTop: '20px',
  },
  recurringBillItemContainer: {
    alignItems: 'center',
    padding: '15px 0',
    '&:not(last-child)': {
      borderBottom: '1px solid #D8D8D8',
    },
  },
  recurringBillTitle: {
    marginRight: '10px',
  },
  recurringBillIconWrapper: {
    width: '20px',
    height: '20px',
  },
  recurringImg: {
    width: '100%',
  },
  recurringLeftSection: {
    display: 'flex',
  },
  nextButtonWrapper: {
    marginTop: '40px',
  },
  borderInputWrapper: {
    width: '140px',
  },
  indicatorImg: {
    marginRight: '15px',
  },
  mainTitleWrappper: {
    display: 'flex',
    alignItems: 'center',
    height: '26px',
    marginBottom: '5px',
  },
  otherBillTitle: {
    marginTop: '43px',
  },
  missingExpenseLink: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '71px',
  },
  recurringBillAccordionContainer: {
    marginTop: '13px',
  },
  accordionDetailItemContainer: {
    alignItems: 'center',
    padding: '15px 0',
    borderTop: '1px solid #D8D8D8',
  },
  recurringCheckBox: {
    marginRight: '6px',
    marginTop: '-6px',
  },
  recurringBillLinkIcon: {
    marginRight: '15px',
    width: '24px',
    height: '24px',
  },
  recurringBillLink: {
    marginRight: '12px',
  },
  recurringFrequency: {
    textTransform: 'capitalize',
    marginRight: '5px',
  },
}));

const formatDate = (date: any) => {
  var dateString = DateTime.fromFormat(date, 'yyyy-LL-dd').toFormat('LLL d');
  return dateString;
};

const Leftcontent: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const recurringTransactions = useSelector(transactionSeries);

  useEffect(() => {
    dispatch(getTransactionSeries());
  }, []);

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="listItem1">
            Other Possible Recurring Expenses
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

interface DetailProps {
  onChange: (id: string) => void;
  amount: any;
  setAmount: (amount: any) => void;
  checked: string[];
}

const DetailContent: FC<DetailProps> = ({
  onChange,
  amount,
  setAmount,
  checked,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const recurringTransactions = useSelector(transactionSeries);

  useEffect(() => {
    dispatch(getTransactionSeries());
  }, []);

  return (
    <>
      {recurringTransactions.map((mediumTransacton: any) => (
        <>
          {mediumTransacton.recurringConfidence !== 'high' && (
            <Grid container className={classes.recurringBillItemContainer}>
              <Grid item xs={8} className={classes.recurringLeftSection}>
                <img
                  src={RecurringBillRect3}
                  alt="Recurring Bills"
                  className={classes.indicatorImg}
                />
                <Grid item className={classes.recurringCheckBox}>
                  <CheckBox
                    checked={checked.indexOf(mediumTransacton.id) > -1}
                    onChange={() => onChange(mediumTransacton.id)}
                  />
                </Grid>

                <Grid item container direction="column">
                  <Grid item className={classes.mainTitleWrappper}>
                    <Typography
                      variant="listItem1"
                      className={classes.recurringBillTitle}
                    >
                      {mediumTransacton.seriesName}
                    </Typography>
                    {mediumTransacton.splitBillsCount > 0 && <CallSplitIcon />}
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      className={classes.recurringFrequency}
                    >
                      {mediumTransacton.consumerPreferenceSeries
                        ? mediumTransacton.consumerPreferenceSeries.frequency
                        : mediumTransacton.frequency}
                    </Typography>
                    <Typography variant="body1">
                      (Next: &nbsp;
                      {mediumTransacton.consumerPreferenceSeries
                        ? formatDate(
                            mediumTransacton.consumerPreferenceSeries.nextDate,
                          )
                        : formatDate(
                            mediumTransacton.predictedTransactions[0].date,
                          )}
                      )
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item className={classes.borderInputWrapper}>
                    <FormattedInputs
                      amount={
                        mediumTransacton.consumerPreferenceSeries
                          ? mediumTransacton.consumerPreferenceSeries.amount
                          : mediumTransacton.predictedTransactions[0].amount
                      }
                      onChange={(value) =>
                        setAmount({ ...amount, [mediumTransacton.id]: value })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      ))}
    </>
  );
};

const ConfirmRecurringBills: FunctionComponent<any> = ({
  goNext,
  amount,
  checked,
  setAmount,
  setChecked,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const recurringTransactions = useSelector(transactionSeries);

  useEffect(() => {
    dispatch(getTransactionSeries());
  }, []);

  function handleSelect() {
    console.log('aaa');
  }

  const handleGoNext = () => {
    goNext();
  };

  const onChange = (id: string) => {
    if (checked.indexOf(id) > -1) {
      setChecked(checked.filter((item: any) => item !== id));
    } else {
      setChecked([id, ...checked]);
    }
  };

  const calcAmount = useMemo(() => {
    let total = 0;

    Object.keys(amount).forEach((item: any) => {
      if (checked.indexOf(item) > -1) {
        total += Number(amount[item]);
      }
    });

    return total
      .toFixed(2)
      .toString()
      .split(',')
      .join('')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }, [amount, checked]);

  return (
    <>
      <Container>
        <OnBoardNavbar
          title="Confirm Recurring Bills"
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
        <Grid container>
          <Grid
            item
            xs={12}
            justify="center"
            className={classes.recurringBillInstruction}
          >
            <Typography variant="body1">
              Select all recurring expenses and confirm the estimated amounts to
              plan a budget or split with others in the future.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.expenseAmountContainer}>
          <Grid item xs={9}>
            <Typography variant="codeValue">Your Recurring Expenses</Typography>
          </Grid>
          <Grid item xs={3} className={classes.expenseAmount}>
            <Typography variant="codeValue">${calcAmount}</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.recurringImgContainer}>
          <Grid item xs={12}>
            <img
              className={classes.recurringImg}
              src={RecurringBillLogo}
              alt="Recurring Bills"
            />
          </Grid>
        </Grid>

        {recurringTransactions.map((transaction: any) => (
          <>
            {transaction.recurringConfidence === 'high' && (
              <Grid container className={classes.recurringBillItemContainer}>
                <Grid item xs={8} className={classes.recurringLeftSection}>
                  <img
                    src={RecurringBillRect1}
                    alt="Recurring Bills"
                    className={classes.indicatorImg}
                  />
                  <Grid item className={classes.recurringCheckBox}>
                    <CheckBox
                      checked={checked.indexOf(transaction.id) > -1}
                      onChange={() => onChange(transaction.id)}
                    />
                  </Grid>

                  <Grid item container direction="column">
                    <Grid item className={classes.mainTitleWrappper}>
                      <Typography
                        variant="listItem1"
                        className={classes.recurringBillTitle}
                      >
                        {transaction.seriesName}
                      </Typography>
                      {transaction.splitBillsCount > 0 && <CallSplitIcon />}
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        className={classes.recurringFrequency}
                      >
                        {transaction.consumerPreferenceSeries
                          ? transaction.consumerPreferenceSeries.frequency
                          : transaction.frequency}
                      </Typography>
                      <Typography variant="body1">
                        (Next: &nbsp;
                        {transaction.consumerPreferenceSeries
                          ? formatDate(
                              transaction.consumerPreferenceSeries.nextDate,
                            )
                          : formatDate(transaction.predictedTransactions.date)}
                        )
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item className={classes.borderInputWrapper}>
                      <FormattedInputs
                        amount={
                          transaction.consumerPreferenceSeries
                            ? transaction.consumerPreferenceSeries.amount
                            : transaction.predictedTransactions.amount
                        }
                        onChange={(value) =>
                          setAmount({ ...amount, [transaction.id]: value })
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </>
        ))}

        <Grid container className={classes.recurringBillAccordionContainer}>
          <Grid item xs={12}>
            <RecurringBillAccordion
              LeftContent={<Leftcontent />}
              Details={
                <DetailContent
                  checked={checked}
                  onChange={onChange}
                  amount={amount}
                  setAmount={setAmount}
                />
              }
              title="nothing"
              category=""
              onSelected={handleSelect}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item container xs={12} className={classes.missingExpenseLink}>
            <Grid item className={classes.recurringBillLinkIcon}>
              <AddCircleOutlineIcon style={{ fill: '#3342be' }} />
            </Grid>
            <Grid item className={classes.recurringBillLink}>
              <Typography>Missing an expense?</Typography>
            </Grid>
            <Grid item>
              <Link>Select from your Expense history</Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.nextButtonWrapper}>
          <Grid item xs={12}>
            <Button fullWidth={true} onClick={handleGoNext}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ConfirmRecurringBills;
