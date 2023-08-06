import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox as MuiCheckBox, CheckboxProps } from '@material-ui/core';

export interface Props extends Omit<CheckboxProps, 'color'> {}

const useStyles = makeStyles((theme) => ({
  contained: (props: Props) => ({
    paddingLeft: '0px !important',
    color: '#D8D8D8',
    borderRadius: 3,
    paddingTop: 6,
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '&.Mui-disabled': {
      color: '#A0A0A0',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 8,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 6,
    },
  }),
  icon: {
    borderRadius: 6,
    width: 24,
    height: 24,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#FFF',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: (props: Props) => ({
    backgroundColor: '#fff',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%2300CE00'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#fff',
    },
  }),
}));

const StyledCheckbox: FC<Props> = ({ onChange, checked }) => {
  const classes = useStyles({});

  return (
    <>
      <MuiCheckBox
        checked={checked}
        className={classes.contained}
        disableRipple
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'decorative checkbox' }}
        onChange={onChange}
      />
    </>
  );
};

export default StyledCheckbox;
