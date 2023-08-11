import React from 'react';
import NumberFormat from 'react-number-format';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    formattedInputRoot: {
      borderRadius: '10px',
    },
    '& .MuiOutlinedInput-input': {
      padding: '0px !important',
    },
    muiIconButtonRoot: {
      position: 'absolute',
      right: '13px',
      padding: '5px',
    },
    customOutlinedRoot: {
      borderRadius: '10px',
    },
    inputRoot: {
      padding: '8px 10px',
    },
  }),
);

interface NumberFormatCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      suffix="%"
    />
  );
}

interface Props {
  amount: string;
  showResetButton?: boolean;
  type?: string;
  onChange?: (value: string) => void;
}

export default function PercentageInput({
  amount,
  onChange,
  type,
  showResetButton,
}: Props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: Number(amount),
  });

  const handleChange =
    (prop: keyof Props) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [prop]: event.target.value,
      });

      if (onChange) {
        onChange(event.target.value);
      }
    };

  const resetValue = () => {
    setValues({ ...values, amount: Number(amount) });
  };

  const onChangeValue = () => {
    if (values.amount.toString() === '') {
      setValues({ amount: 0 });
      if (onChange) {
        onChange('0');
      }
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        label=""
        value={values.amount}
        onChange={handleChange('amount')}
        name="numberformat"
        id="formatted-numberformat-input"
        variant="outlined"
        fullWidth={true}
        onBlur={onChangeValue}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
          classes: {
            input: classes.inputRoot,
            root: classes.customOutlinedRoot,
          },
        }}
      />
      {showResetButton && (
        <IconButton
          aria-label="toggle password visibility"
          onClick={resetValue}
          edge="end"
          classes={{ root: classes.muiIconButtonRoot }}
        >
          <RefreshIcon />
        </IconButton>
      )}
    </div>
  );
}
