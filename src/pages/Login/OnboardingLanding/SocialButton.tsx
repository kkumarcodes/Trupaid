import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import { MappedPaletteOptions } from '../../../types/theme/createPalette';

export interface Props extends Omit<ButtonProps, 'color'> {
  color?: 'black' | 'white';
  buttonIcon?: string;
  buttonText: string;
}

const useStyles = makeStyles((theme) => ({
  contained: (props: Props) => ({
    height: '56px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px',
    textTransform: 'unset',
    backgroundColor: theme.palette.white,
    borderRadius: '2px',
    color: props.color === 'black' ? 'white' : 'rgba(0, 0, 0, 0.54)',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24)',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      fontSize: '21px',
      lineHeight: '25px',
    },
    '&.MuiButton-fullWidth': {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      boxShadow:
        '0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24)',
      opacity: 0.8,
    },
  }),
  socialLogo: {
    marginRight: '15px',
    width: '18px',
    height: '18px',
  },
}));

const SocialButton: FC<Props> = (props) => {
  const { color, buttonIcon, buttonText, ...rest } = props;

  const classes = useStyles({ color, buttonText, buttonIcon });

  return (
    <MuiButton
      {...rest}
      classes={{
        contained: classes.contained,
      }}
      variant="contained"
    >
      <img src={buttonIcon} alt="logo" className={classes.socialLogo} />
      {buttonText}
    </MuiButton>
  );
};

export default SocialButton;
