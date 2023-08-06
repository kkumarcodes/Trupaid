import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "components/Typography";
import { Grid } from "@material-ui/core";

export interface Props {
  billAmount?: string;
  billStatus?: string;
}

const useStyles = makeStyles((theme) => ({
  rightContentWrapper: {
    marginRight: "30px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "15px",
    },
  },
  leftContentDescription: {
    marginTop: "5px",
  },
  rightContent: {
    justifyContent: "flex-end",
    textAlign: "right",
  },
}));

const RightContent: FC<Props> = (props) => {
  const { billAmount, billStatus } = props;
  const classes = useStyles();
  return (
    <div className={classes.rightContentWrapper}>
      <Grid container className={classes.rightContent}>
        <Grid item container direction="row" xs={12} sm={8}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">${billAmount}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.leftContentDescription}>
            <Typography variant="body2">{billStatus}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightContent;
