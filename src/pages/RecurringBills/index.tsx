import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ConfirmRecurringBills from './ConfirmRecurringBills';
import SplitRecurringBills from './SplitRecurringBills';
import FinalConfirmation from './FinalConfirmation';
import { transactionSeries } from '../../store/transactionSeriesSlice';

interface Props {}

const RecurringBills: FC<Props> = (props) => {
  const [step, setStep] = useState(1);
  const recurringTransactions = useSelector(transactionSeries);

  const [amount, setAmount] = useState({});
  const [checked, setChecked] = useState<string[]>([]);
  const [selected, setSelected] = useState<any>({});
  const [splitAmount, setSplitAmount] = useState<any>({});
  const [splitTypeValue, setSplitTypeValue] = useState<any>({});

  useEffect(() => {
    if (checked.length === 0) {
      setChecked(
        recurringTransactions
          .filter((item: any) => item.recurringConfidence === 'high')
          .map((item: any) => item.id),
      );
    }

    let amountValue: any = {};
    recurringTransactions.forEach((item: any) => {
      amountValue[item.id] = item.consumerPreferenceSeries
        ? item.consumerPreferenceSeries.amount
        : item.predictedTransactions[0].amount;
    });
    setAmount(amountValue);
  }, [recurringTransactions]);

  return (
    <>
      {step === 1 && (
        <ConfirmRecurringBills
          amount={amount}
          checked={checked}
          setAmount={setAmount}
          setChecked={setChecked}
          goNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <SplitRecurringBills
          checked={checked}
          amount={amount}
          goBack={() => setStep(1)}
          goNext={() => setStep(3)}
          setChecked={setChecked}
          selected={selected}
          setSelected={setSelected}
          splitAmount={splitAmount}
          setSplitAmount={setSplitAmount}
          splitTypeValue={splitTypeValue}
          setSplitTypeValue={setSplitTypeValue}
        />
      )}
      {step === 3 && (
        <FinalConfirmation
          goBack={() => setStep(2)}
          selected={selected}
          checked={checked}
          amount={amount}
          splitTypeValue={splitTypeValue}
          splitAmount={splitAmount}
        />
      )}
    </>
  );
};

export default RecurringBills;
