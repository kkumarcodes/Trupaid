import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../../../components/Typography';
import { Grid } from '@material-ui/core';
import CallSplitIcon from '@material-ui/icons/CallSplit';

export interface Props {
  title?: string;
  nextDate?: string;
  showSplitIcon: number;
}

const useStyles = makeStyles((theme) => ({
  mainTitleWrappper: {
    display: 'flex',
    alignItems: 'center',
    height: '26px',
    marginBottom: '5px',
  },
  recurringBillTitle: {
    marginRight: '10px',
  },
}));

const LeftContent: FC<Props> = (props) => {
  const { title, showSplitIcon, nextDate } = props;
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item container direction="row" xs={12} sm={8}>
          <Grid item xs={12} className={classes.mainTitleWrappper}>
            <Typography
              variant="subtitle1"
              className={classes.recurringBillTitle}
            >
              {title}
            </Typography>
            {showSplitIcon > 0 && <CallSplitIcon />}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Next: {nextDate}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeftContent;
