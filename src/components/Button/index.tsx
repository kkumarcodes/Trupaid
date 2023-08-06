import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button as MuiButton,
  ButtonProps,
  CircularProgress,
} from '@material-ui/core';
import { MappedPaletteOptions } from 'types/theme/createPalette';

export interface Props
  extends Omit<ButtonProps, 'color' | 'variant' | 'disableElevation'> {
  color?: 'wellPaidGreen' | 'slate' | 'mint' | 'dataTeal' | 'darkBlue';
  isLoading?: boolean;
  customPadding?: boolean;
}

const useStyles = makeStyles((theme) => ({
  contained: (props: Props) => ({
    height: props.customPadding ? '30px' : '56px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    backgroundColor: props.color
      ? theme.palette[props.color as MappedPaletteOptions]
      : theme.palette.slateGray,
    width: props.size !== 'medium' ? '100%' : 200,
    borderRadius: '12px',
    color:
      ((props.color === 'darkBlue' || props.color === 'wellPaidGreen') &&
        'white') ||
      'black',
    border:
      props.color !== 'slate' && props.color !== 'darkBlue'
        ? '1px solid #40A079'
        : '',
    overflow: 'hidden',
    '&.MuiButton-fullWidth': {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: props.color
        ? theme.palette[props.color as MappedPaletteOptions]
        : theme.palette.slateGray,
      boxShadow: 'none',
      opacity: 0.8,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: 'none',
        backgroundColor: props.color
          ? theme.palette[props.color as MappedPaletteOptions]
          : theme.palette.slateGray,
      },
      '&.Mui-disabled': {
        boxShadow: 'none',
        backgroundColor: props.color
          ? theme.palette[props.color as MappedPaletteOptions]
          : theme.palette.slateGray,
        opacity: 0.2,
      },
    },
    '&.Mui-disabled': {
      color:
        ((props.color === 'darkBlue' || props.color === 'wellPaidGreen') &&
          'white') ||
        'black',
      backgroundColor: props.color
        ? theme.palette[props.color as MappedPaletteOptions]
        : theme.palette.slateGray,
      opacity: 0.2,
    },
  }),
  /* Styles applied to the root element if `size="small"`. */
  containedSizeSmall: {
    width: '120px !important',
  },
  /* Styles applied to the root element if `size="large"`. */
  containedSizeLarge: {
    width: '300px',
  },
  buttonProgress: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Button: FC<Props> = (props) => {
  const {
    color = 'darkBlue',
    size = 'medium',
    className,
    children,
    isLoading,
    disabled,
    ...rest
  } = props;
  const classes = useStyles({ color, size });

  return (
    <MuiButton
      {...rest}
      disabled={disabled || isLoading}
      size={size}
      classes={{
        contained: classes.contained,
        containedSizeSmall: classes.containedSizeSmall,
        containedSizeLarge: classes.containedSizeLarge,
      }}
      variant="contained"
      disableElevation
    >
      {children}
      {isLoading && (
        <CircularProgress size={26} className={classes.buttonProgress} />
      )}
    </MuiButton>
  );
};

export default Button;
