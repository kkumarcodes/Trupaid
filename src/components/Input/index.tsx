import React, { FC, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input as MuiInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { PassVisibleOnIcon, PassVisibleOffIcon } from '../Icons';
import Typography from '../Typography/index';

export interface Props {
  value?: string;
  type: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: (newValue: string, error: boolean) => void;
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  disableUnderline?: boolean;
  inputLabel?: string;
  maxLength?: number;
  isRequired?: boolean;
}

const useStyles = makeStyles((theme) => ({
  contained: (props: Props) => ({
    width: 250,
    height: 60,
    padding: '7px 5px 8px 15px',
    fontFamily: 'Montserrat',
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    color: '#212121',
    border: '1px solid #F4F4F4',
    overflow: 'hidden',
    '&.MuiInput-fullWidth': {
      width: '100%',
    },
    '&.Mui-disabled': {
      backgroundColor: '#F4F4F4',
    },
    '&.Mui-error': {
      border: '1px solid #D02424',
    },
    '&.MuiIconButton-root': {
      paddingRight: '4px !important',
    },
    [theme.breakpoints.down('xs')]: {
      height: 52,
    },
  }),
  containedSSN: (props: Props) => ({
    width: 250,
    height: 60,
    padding: '7px 5px 8px 15px',
    fontFamily: 'Montserrat',
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    color: '#212121',
    border: '1px solid #F4F4F4',
    overflow: 'hidden',
    textSecurity: 'disc',
    WebkitTextSecurity: 'disc',
    '&.MuiInput-fullWidth': {
      width: '100%',
    },
    '&.Mui-disabled': {
      backgroundColor: '#F4F4F4',
    },
    '&.Mui-error': {
      border: '1px solid #D02424',
    },
    '&.MuiIconButton-root': {
      paddingRight: '4px !important',
    },
    [theme.breakpoints.down('xs')]: {
      height: 52,
    },
  }),
  inputLabel: {
    display: 'block',
    marginBottom: '10px',
  },
  errorMessage: {
    marginTop: '6px',
    position: 'absolute',
  },
  passwordVisibleIcon: {
    paddingTop: '4px',
  },
}));

const Input: FC<Props> = (props) => {
  const {
    type,
    onChange,
    errorMessage,
    inputLabel,
    maxLength,
    isRequired,
    value: baseValue,
    ...rest
  } = props;
  const classes = useStyles(props);

  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(baseValue);
  const [showError, setShowError] = useState(false);
  const [errorType, setErrorType] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  function formatPhoneNumber(phoneNumberString: string) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    cleaned = cleaned.replace('(', '');
    cleaned = cleaned.replace(')', '');
    cleaned = cleaned.replace('-', '');
    var part1 = cleaned.substring(0, 3);
    var part2 = cleaned.substring(3, 6);
    var part3 = cleaned.substring(6, 10);
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    var formatedString = '';

    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    } else if (!Number.isNaN(Number(part1)) && part1.length == 3) {
      formatedString = phoneNumberString;

      if (part2 && !Number.isNaN(Number(part2))) {
        formatedString = '(' + part1 + ') ' + part2;
      } else if (Number.isNaN(Number(part2))) {
        return phoneNumberString;
      }

      if (part3 && !Number.isNaN(Number(part3))) {
        formatedString += '-' + part3;
      } else if (Number.isNaN(Number(part3))) {
        return phoneNumberString;
      }

      return formatedString;
    }

    return phoneNumberString;
  }

  const onChangeCallback = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let errorType = false;

      let typedValue = event.target.value;

      if (type == 'phone') {
        setValue(formatPhoneNumber(event.target.value));
        typedValue = formatPhoneNumber(event.target.value);
      } else {
        setValue(event.target.value);
        typedValue = event.target.value;
      }

      if (typedValue) {
        if (
          (type == 'email' ||
            type == 'phone' ||
            type == 'zipcode' ||
            type == 'ssn') &&
          !Regex[type].test(typedValue)
        ) {
          errorType = true;
          setShowError(true);
          setErrorType('invalid');
        } else {
          setShowError(false);
          setErrorType('invalid');
        }
      } else {
        if (type == 'optional') {
          setShowError(false);
        } else {
          if (isRequired == true) {
            errorType = true;
            setShowError(true);
            setErrorType('empty');
          } else {
            setShowError(false);
          }
        }
      }
      if (onChange) {
        onChange(typedValue, errorType);
      }
    },
    [onChange, type],
  );

  const Regex = {
    email: /^\S+@\S+\.\S+$/,
    phone: /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/,
    zipcode: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    ssn: /^\d{4}$/,
  };

  const ErrorMessage: any = {
    email: {
      empty: 'This field is required!',
      invalid: 'This email is invalid',
    },
    phone: {
      empty: 'This field is required!',
      invalid: 'This phone number is invalid',
    },
    zipcode: {
      empty: 'This field is required!',
      invalid: 'This zipcode is invalid',
    },
    ssn: {
      empty: 'This field is required!',
      invalid: 'This SSN is invalid',
    },
    text: {
      empty: 'This field is required!',
    },
    password: {
      empty: 'This field is required!',
    },
  };

  return type !== 'password' ? (
    <>
      <Typography variant="fieldInputLabel" className={classes.inputLabel}>
        {inputLabel}
      </Typography>
      <MuiInput
        error={showError ? true : false}
        type={type}
        onChange={onChangeCallback}
        className={type === 'ssn' ? classes.containedSSN : classes.contained}
        value={value}
        inputProps={maxLength ? { maxLength } : {}}
        {...rest}
      />
      {showError && (
        <Typography variant="formErrorMessage" className={classes.errorMessage}>
          {(type == 'email' ||
            type == 'phone' ||
            type == 'zipcode' ||
            type == 'text' ||
            type == 'date' ||
            type == 'ssn') &&
            ErrorMessage[type][errorType]}
        </Typography>
      )}
    </>
  ) : (
    <>
      <Typography variant="fieldInputLabel" className={classes.inputLabel}>
        {inputLabel}
      </Typography>
      <MuiInput
        error={showError ? true : false}
        type={showPassword ? 'text' : 'password'}
        onChange={onChangeCallback}
        className={classes.contained}
        value={value}
        endAdornment={
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <PassVisibleOffIcon
                    viewBox="0 0 18 18"
                    style={{ marginTop: 4 }}
                  />
                ) : (
                  <span className={classes.passwordVisibleIcon}>
                    <PassVisibleOnIcon viewBox="0 0 18 18" />
                  </span>
                )}
              </IconButton>
            </InputAdornment>
          ) : null
        }
        {...rest}
      />
      {showError && (
        <Typography variant="formErrorMessage" className={classes.errorMessage}>
          {type == 'password' && ErrorMessage[type][errorType]}
        </Typography>
      )}
    </>
  );
};

export default Input;
