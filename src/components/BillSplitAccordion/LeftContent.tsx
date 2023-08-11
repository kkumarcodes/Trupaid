import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../Typography';
import { Grid } from '@material-ui/core';

export interface Props {
  title?: string;
  subTitle?: string;
  description?: string;
}

const useStyles = makeStyles((theme) => ({
  leftContentDescription: {
    marginTop: '5px',
  },
}));

const LeftContent: FC<Props> = (props) => {
  const { title, subTitle, description } = props;
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item container direction="row" xs={12} sm={8}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2">{subTitle}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.leftContentDescription}>
            <Typography variant="body2">{description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeftContent;
