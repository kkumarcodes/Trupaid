import React, { FC, useEffect, useState, useMemo } from 'react';
import { navigate } from "gatsby";
import { Grid } from '@material-ui/core';

import { useAppDispatch } from '../../../hooks/store';

import Banner from '../../../components/Banner';
import OnBoardNavbar from '../../../components/OnBoardingNavbar';
import LeftContent from '../../../components/BillSplitAccordion/LeftContent';

import Details from '../../../components/BillSplitAccordion/Details';

import { makeStyles } from '@material-ui/core/styles';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';

// use redux-toolkit part
import { connect, useSelector } from 'react-redux';
import { getConnections, Connections } from '../../../store/connectionSlice';
import { transactionSeries } from '../../../store/transactionSeriesSlice';

import avatarImg from '../../../assets/images/profile/avatar.png';
import BillSplitAccordion from '../../../components/BillSplitAccordion';

import Container from '../../../components/Container';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
  },
  customContentContainer: {
    width: '100%',
    marginTop: '20px',
  },
  buttonContainer: {
    width: '100%',
    marginTop: '105px',
    marginBottom: '188px',
  },
  totalPrice: {
    textAlign: 'right',
  },
  accordionPaddingTop: {
    marginTop: '15px',
  },
  skipForNowLink: {
    alignItems: 'center',
    display: 'flex',
  },
  selectCard: {
    width: '100%',
    height: '37px',
    borderRadius: '10px',
    backgroundColor: '#F4F4F4',
    // [theme.breakpoints.down('md')]: {
    //   height: 60,
    //   fontSize: 16,
    // },
    // [theme.breakpoints.down('xs')]: {
    //   height: 52,
    // },
  },
  navbarContainer: {
    padding: '20px',
  },
  infoWrapper: {
    // maxWidth: '640px',
    textAlign: 'center',
    marginTop: '20px',
  },
  mobileLayoutContainer: {
    padding: '20px',
  },
  minusRed: {
    color: 'red',
  },
  totalCostWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  totalCostLabel: {
    marginLeft: '10px',
    width: '35px',
  },
  selectCardWrapper: {
    marginTop: '65px',
  },
  billSplitAccordionWrapper: {
    marginTop: '40px',
  },
  billSection: {
    marginTop: '40px',
  },
  authorizeButton: {
    marginTop: '40px',
  },
  connectionWrapper: {
    overflowX: 'auto',
    marginTop: '65px',
  },
  connectionItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '27px',
    cursor: 'pointer',
  },
  avatarWrapper: {
    marginRight: '7px',
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    border: '1px solid #00D200',
    borderRadius: '50%',
    transform: 'translateY(4px)',
  },
  connectionItemWrapper: {
    overflowX: 'auto',
    marginTop: '11px',
  },
  selectedItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '27px',
    cursor: 'pointer',
    opacity: '0.25',
  },
}));

interface Props {
  goBack: () => void;
  selected: any;
  amount: any;
  checked: any;
  splitTypeValue: any;
  splitAmount: any;
}

const FinalConfirmation: FC<Props> = (props) => {
  const { goBack, checked, selected, splitTypeValue, splitAmount, amount } =
    props;
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [showAccordion, setShowAccordion] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const [billSplitConfirmed, setBillSplitConfirmed] = useState(false);
  const classes = useStyles();
  const [sourceBank, setSourceBank] = useState('');
  const [open, setOpen] = useState(false);
  const [itemChecked, setItemChecked] = useState<string[]>([]);
  const connections = useSelector(Connections);
  const recurringTransactions = useSelector(transactionSeries);

  const customGoback = () => {
    goBack();
  };

  const handleConnectionClick = (id: string) => {
    setSelectedItem(id);
  };

  const cards = [
    'Wells Fargo ...3456',
    'Bank of America ..3426',
    'Chase Bank ..6903',
  ];

  useEffect(() => {
    dispatch(getConnections());
  }, []);

  const getTotalPrice = () => {
    let price = 0;
    connections[0]?.splitBills.forEach((bill: any) => {
      if (itemChecked.indexOf(bill.name) > -1) {
        price += Number(bill.transferAmount);
      }
    });

    return price;
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSourceBank(event.target.value as string);
  };

  const handleSelected = (title: string, checked: boolean) => {
    if (!checked) {
      setItemChecked(itemChecked.filter((item) => item !== title));
    } else {
      setItemChecked([title, ...itemChecked]);
    }
  };

  const handleClick = (clicked: string) => {
    if (clicked === 'yes') {
      setShowAccordion(true);
      setChangeButton(false);
    } else {
      setShowAccordion(false);
      setChangeButton(true);
    }
  };

  const handleAuthorize = () => {
    setBillSplitConfirmed(true);
    console.log('connection data:', connections);
    if (billSplitConfirmed) {
      navigate('/dashboard');
    }
  };

  const selectedUser = useMemo(() => {
    let userItem: any[] = [];
    let selectedItems: string[] = [];
    for (let item in selected) {
      selected[item].forEach((selectItem: any) => {
        if (selectedItems.indexOf(selectItem.id) === -1) {
          userItem.push(selectItem);
          selectedItems.push(selectItem.id);
        }
      });
    }

    return userItem;
  }, [selected]);

  const [selectedItem, setSelectedItem] = useState(
    selectedUser.length > 0 ? selectedUser[0].id : '',
  );

  const userTransations = useMemo(
    () =>
      Object.keys(selected).filter(
        (item: string) =>
          selected[item].map((item: any) => item.id).indexOf(selectedItem) > -1,
      ),
    [selectedItem, selected],
  );

  const user = useMemo(
    () => connections.find((item: any) => item.id === selectedItem),
    [connections, selectedItem],
  );

  const getPercentage = (id: string, value: number) => {
    if (value && amount[id]) {
      return Math.round((value * 100) / amount[id]) + '%';
    } else {
      return '0.00%';
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        wrap="wrap"
        className={classes.content}
        alignContent="space-between"
        justify="center"
      >
        <Grid item xs={12}>
          <OnBoardNavbar
            logoHeight={50}
            logoWidth={30}
            backEnabled={true}
            viewBox="0 0 30 36"
            mobileLogoHeight={24}
            mobileLogoWidth={110}
            mobileLogoViewBox="0 0 103 24"
            navbarMobileLayoutUpdate={true}
            showTotalCost={true}
            totalCost="1,532.06"
            goBack={customGoback}
            title="Final Confirmations"
          />
        </Grid>

        <Banner severity="error" text={errorMessage} />
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Grid item container justify="center">
              <Grid item container className={classes.infoWrapper}>
                <Typography variant="body1">
                  Review your recurring bill split requests. Check all bills and
                  click ‘Authorize’ to request automated money transfers.
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={classes.connectionWrapper}>
              <Grid item xs={12}>
                <Typography variant="buttonLabel">
                  Authorize Requests for Each User
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                className={classes.connectionItemWrapper}
              >
                {selectedUser.map((item: any) => (
                  <div
                    className={
                      item.id == selectedItem
                        ? classes.selectedItem
                        : classes.connectionItem
                    }
                    onClick={() => handleConnectionClick(item.id)}
                  >
                    <div className={classes.avatarWrapper}>
                      <img
                        src={avatarImg}
                        alt="User Avatar"
                        className={classes.userAvatar}
                      />
                    </div>
                    <div>
                      <Typography variant="buttonLabel">
                        {item.preferredName.split(' ')[0] +
                          ' ' +
                          (item.preferredName.split(' ')[1]
                            ? item.preferredName.split(' ')[1].substr(0, 1)
                            : '')}
                      </Typography>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              className={classes.customContentContainer}
            >
              <Grid item xs={12}>
                <Typography variant="buttonLabel">
                  Requests for{' '}
                  {`${
                    user.preferredName.split(' ')[0] +
                    ' ' +
                    (user.preferredName.split(' ')[1]
                      ? user.preferredName.split(' ')[1].substr(0, 1)
                      : '')
                  }`}
                </Typography>
              </Grid>
              <Grid
                item
                container
                className={classes.billSplitAccordionWrapper}
              >
                {recurringTransactions
                  .filter(
                    (item: any) =>
                      checked.indexOf(item.id) > -1 &&
                      userTransations.indexOf(item.id) > -1,
                  )
                  .map((item: any) => (
                    <Grid
                      item
                      container
                      className={classes.accordionPaddingTop}
                    >
                      <BillSplitAccordion
                        LeftContent={
                          <LeftContent
                            title={item.seriesName}
                            subTitle=""
                            description={`${
                              user.preferredName.split(' ')[0] +
                              ' ' +
                              (user.preferredName.split(' ')[1]
                                ? user.preferredName.split(' ')[1].substr(0, 1)
                                : '')
                            } Pays you ${
                              splitTypeValue[item.id] === 'fixed'
                                ? '$' + splitAmount[item.id]?.[selectedItem]
                                : getPercentage(
                                    item.id,
                                    splitAmount[item.id]?.[selectedItem],
                                  )
                            }`}
                          />
                        }
                        Details={
                          <Details
                            billTitle="The Bill"
                            billFrequency="Monthly (Apr 30th est)"
                            billEstimation="59.99"
                            transferTitle="Transfer"
                            transferDescription="Recurring monthly"
                            transferEstimation={item.transferAmount}
                          />
                        }
                        showRightContent={false}
                        category={billSplitConfirmed ? '' : 'billSplit'}
                        title={item.name}
                        onSelected={(checked: boolean) =>
                          handleSelected(item.name as string, checked)
                        }
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              className={classes.buttonContainer}
            >
              <Grid
                item
                xs={12}
                justify="center"
                className={classes.authorizeButton}
              >
                <Button
                  size="large"
                  disabled={itemChecked.length === 0}
                  onClick={handleAuthorize}
                >
                  Authorize
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinalConfirmation;
