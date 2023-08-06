import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography as MuiTypography, TypographyProps} from '@material-ui/core';

import {CustomVariant} from 'types/theme/createTypography';
import {MappedPaletteOptions} from 'types/theme/createPalette';



export interface Props extends Omit<TypographyProps, 'variant' | 'color'> {
  variant?: CustomVariant;
  color?: MappedPaletteOptions;
};

const useStyles = makeStyles((theme) => ({
  overrides: (props: Props) => ({
    color: props.color ? theme.palette[props.color] : 'initial',
    //@ts-expect-error
    ...theme.typography[props.variant],
  }),
}));

const Typography:FC<Props> = (props) => {
  const {variant, color, className, ...rest} = props;
  const classes = useStyles(props);

  return <MuiTypography className={`${classes.overrides} ${className}`} {...rest} color={color ? 'inherit' : 'initial'} variant={variant ? 'inherit' : 'body1'}></MuiTypography>;
}

export default Typography;
