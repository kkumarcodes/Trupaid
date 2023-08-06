import React, { FC } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import customTheme from 'assets/theme/breakpoints';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container as MuiContainer, Typography } from '@material-ui/core';

interface Props {
  maxWidth?: 'lg' | 'md' | 'sm' | 'xs';
  children: any;
}

const useStyles = makeStyles((theme) => ({
  breakPointsSMOverride: {
    maxWidth: '688px !important',
    paddingBottom: '105px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '65px',
    },
  },
}));

const Container: FC<Props> = (props) => {
  const classes = useStyles();
  const { maxWidth, children } = props;

  return (
    <>
      <CssBaseline />
      <MuiContainer
        maxWidth={maxWidth}
        className={classes.breakPointsSMOverride}
      >
        {children}
      </MuiContainer>
    </>
  );
};

export default Container;
