import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from 'components/Typography';
import { Grid } from '@material-ui/core';

export interface Props {
  billTitle?: string;
  billFrequency?: string;
  billEstimation?: string;
  transferTitle?: string;
  transferDescription?: string;
  transferEstimation?: string;
}

const useStyles = makeStyles((theme) => ({
  detailFirstBlock: {
    paddingLeft: '46px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  detailsItem: {
    marginTop: '10px',
  },
}));

const Details: FC<Props> = (props) => {
  const {
    billTitle,
    billFrequency,
    billEstimation,
    transferTitle,
    transferDescription,
    transferEstimation,
  } = props;
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item container className={classes.detailsItem}>
        <Grid item xs={3} sm={4} className={classes.detailFirstBlock}>
          <Typography variant="subtitle1">{billTitle}</Typography>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Typography variant="body2">{billFrequency}</Typography>
        </Grid>
        <Grid item xs={3} sm={3} justify="center">
          <Typography variant="body2">${billEstimation} est</Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.detailsItem}>
        <Grid item xs={3} sm={4}>
          <Typography variant="subtitle1" className={classes.detailFirstBlock}>
            {transferTitle}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Typography variant="body2">{transferDescription}</Typography>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Typography variant="body2">${transferEstimation} est</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Details;
