import React, { FC, useMemo, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { DateTime } from 'luxon';

import Container from 'components/Container';
import OnBoardNavbar from 'components/OnBoardingNavbar';
import WellPaidAccordion from 'components/Accordion';
import Typography from 'components/Typography';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import DetailContent from './DetailContent';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { transactionSeries } from 'store/transactionSeriesSlice';
import { MenuItemProp } from './DetailContent';

const useStyles = makeStyles((theme) => ({
  informationContainer: {
    textAlign: 'center',
    marginTop: '25px',
  },
  totalBillSummaryContainer: {
    marginTop: '40px',
  },
  wellPaidAccordionContainer: {
    marginTop: '25px',
  },
  leaveTipCheckBox: {
    marginTop: '105px',
    display: 'flex',
  },
  nextButtonContainer: {
    marginTop: '40px',
  },
  addOtherBillsLabel: {
    marginTop: '40px',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  otherBillItem: {
    marginTop: '15px',
  },
  greenPlusSign: {
    color: theme.palette.wellPaidGreen,
    fontWeight: 'bold',
  },
}));

interface Props {
  goBack: () => void;
  goNext: () => void;
  checked: any[];
  amount: any;
  selected: any;
  setSelected: (item: any) => void;
  setChecked: (item: string[]) => void;
  requestAmountItem?: () => void;
  calcRequestTotal?: number;
  splitAmount: any;
  setSplitAmount: (amount: any) => void;
  splitTypeValue: any;
  setSplitTypeValue: (type: any) => void;
}

interface SplitBillProps {
  item: any;
  amount: number;
  checked: string[];
  setChecked: (item: string[]) => void;
  selected: MenuItemProp[];
  setSelected: (item: MenuItemProp[]) => void;
  splitAmount: any;
  setSplitAmount: (amount: any) => void;
  splitTypeValue: string;
  setSplitTypeValue: (type: string) => void;
}

const formatDate = (date: any) => {
  var dateString = DateTime.fromFormat(date, 'yyyy-LL-dd').toFormat('LLL d');
  return dateString;
};

const SplitBillItem: FC<SplitBillProps> = ({
  item,
  amount,
  checked,
  setChecked,
  selected,
  setSelected,
  splitAmount,
  setSplitAmount,
  splitTypeValue,
  setSplitTypeValue,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.otherBillItem}>
      <WellPaidAccordion
        LeftContent={
          <LeftContent
            title={item.seriesName}
            nextDate={
              item.consumerPreferenceSeries
                ? formatDate(item.consumerPreferenceSeries.nextDate)
                : formatDate(item.predictedTransactions[0].date)
            }
            showSplitIcon={item.splitBillsCount}
          />
        }
        RightContent={
          <RightContent
            selected={selected}
            billAmount={amount}
            splitAmount={splitAmount}
            setSplitAmount={setSplitAmount}
            setSelected={setSelected}
            checked={checked}
            setChecked={setChecked}
            id={item.id}
          />
        }
        DetailContent={
          <DetailContent
            moreOptionsbillAmount={amount}
            billTitle={item.seriesName}
            selected={selected}
            splitAmount={splitAmount}
            setSplitAmount={setSplitAmount}
            setSelected={setSelected}
            splitTypeValue={splitTypeValue}
            setSplitTypeValue={setSplitTypeValue}
            nextDate={
              item.consumerPreferenceSeries
                ? formatDate(item.consumerPreferenceSeries.nextDate)
                : formatDate(item.predictedTransactions[0].date)
            }
          />
        }
        category=""
        title={item.seriesName}
        showRightContent={true}
      />
    </Grid>
  );
};

const SplitRecurringBills: FC<Props> = (props) => {
  const classes = useStyles();
  const {
    goBack,
    goNext,
    checked,
    amount,
    selected,
    setSelected,
    splitAmount,
    setSplitAmount,
    setChecked,
    splitTypeValue,
    setSplitTypeValue,
  } = props;

  const recurringTransactions = useSelector(transactionSeries);

  const calcAmount = useMemo(() => {
    let total = 0;

    Object.keys(amount).forEach((item: any) => {
      if (checked.indexOf(item) > -1) {
        total += Number(amount[item]);
      }
    });
    return total;
  }, [amount, checked]);

  const customGoBack = () => {
    goBack();
  };

  const handleGoNext = () => {
    goNext();
  };

  const requestAmount = useMemo(() => {
    let totalRequestAmount = 0;
    recurringTransactions
      .filter((item: any) => checked.indexOf(item.id) > -1)
      .forEach((item: any) => {
        if (selected[item.id] && selected[item.id].length > 0) {
          totalRequestAmount +=
            (amount[item.id] * selected[item.id].length) /
            (selected[item.id].length + 1);
        }
      });

    return totalRequestAmount;
  }, [checked, selected]);

  const handleClick = () => {};

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <OnBoardNavbar
            logoHeight={50}
            logoWidth={30}
            backEnabled={true}
            title="Split Your Recurring Bills"
            viewBox="0 0 30 36"
            mobileLogoHeight={24}
            mobileLogoWidth={110}
            mobileLogoViewBox="0 0 103 24"
            navbarMobileLayoutUpdate={false}
            goBack={customGoBack}
          />
        </Grid>
      </Grid>

      <Grid container className={classes.informationContainer}>
        <Grid item xs={12}>
          <Typography variant="body1">
            Split your bills evenly with transfer requests after you make a
            payment. For more transfer or split options, click ‘More Options’ in
            each bill detail.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.totalBillSummaryContainer}>
        <Grid item container sm={12}>
          <Grid item sm={3}></Grid>
          <Grid item sm={3} justify="space-between">
            <Typography variant="listItem1">Total of Bills</Typography>
          </Grid>
          <Grid item sm={3} className={classes.textAlignRight}>
            <Typography variant="listItem1">
              $
              {calcAmount
                .toFixed(2)
                .toString()
                .split(',')
                .join('')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
          </Grid>
          <Grid item sm={3}></Grid>
        </Grid>

        <Grid item container sm={12}>
          <Grid item sm={3}></Grid>
          <Grid item sm={3} justify="space-between">
            <Typography variant="body1">Request</Typography>
          </Grid>
          <Grid item sm={3} className={classes.textAlignRight}>
            <Typography variant="body1">
              <Typography variant="body2" className={classes.greenPlusSign}>
                +
              </Typography>
              &nbsp;$
              {requestAmount
                .toFixed(2)
                .toString()
                .split(',')
                .join('')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
          </Grid>
          <Grid item sm={3}></Grid>
        </Grid>

        <Grid item container sm={12}>
          <Grid item sm={3}></Grid>
          <Grid item sm={3} justify="space-between">
            <Typography variant="body1">Your Share</Typography>
          </Grid>
          <Grid item sm={3} className={classes.textAlignRight}>
            <Typography variant="body1">
              $
              {(calcAmount - requestAmount)
                .toFixed(2)
                .toString()
                .split(',')
                .join('')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
          </Grid>
          <Grid item sm={3}></Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.addOtherBillsLabel}>
        <Grid item xs={12}>
          <Typography variant="listItem1">Add Others to Your Bills</Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.wellPaidAccordionContainer}>
        {recurringTransactions
          .filter((item: any) => checked.indexOf(item.id) > -1)
          .map((item: any) => (
            <SplitBillItem
              item={item}
              amount={amount[item.id]}
              checked={checked}
              setChecked={setChecked}
              splitAmount={splitAmount[item.id] ?? {}}
              setSplitAmount={(amount: any) =>
                setSplitAmount({ ...splitAmount, [item.id]: amount })
              }
              selected={selected[item.id] ?? []}
              setSelected={(items: MenuItemProp[]) =>
                setSelected({ ...selected, [item.id]: items })
              }
              splitTypeValue={splitTypeValue[item.id]}
              setSplitTypeValue={(type: string) =>
                setSplitTypeValue({ ...splitTypeValue, [item.id]: type })
              }
            />
          ))}
      </Grid>

      <Grid container className={classes.leaveTipCheckBox}>
        <Grid item xs={1}>
          <Checkbox />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="body1">
            Love the service? Leave a tip with the change when you get paid back
            for recurring bills splits. Not required, but we appreciate it!
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.nextButtonContainer}>
        <Grid item xs={12}>
          <Button
            disabled={
              Object.keys(selected).filter(
                (item) => selected[item] && selected[item].length > 0,
              ).length !==
              recurringTransactions.filter(
                (item: any) => checked.indexOf(item.id) > -1,
              ).length
            }
            fullWidth={true}
            onClick={handleGoNext}
          >
            NEXT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplitRecurringBills;
