import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as MuiLink, LinkProps } from '@material-ui/core';
import { MappedPaletteOptions } from '../../types/theme/createPalette';

export interface Props extends Omit<LinkProps, 'color'> {
  color?: MappedPaletteOptions;
}

const useStyles = makeStyles((theme) => ({
  overrides: (props: Props) => ({
    color: props.color ? theme.palette[props.color] : theme.palette.darkBlue,
    cursor: 'pointer',
  }),
}));

const Link: FC<Props> = (props) => {
  const { color, className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <MuiLink
      className={`${classes.overrides} ${className}`}
      {...rest}
      color={color ? 'inherit' : 'initial'}
    ></MuiLink>
  );
};

export default Link;
