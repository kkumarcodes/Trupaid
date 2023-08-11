import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from './Typography';
import { Grid } from '@material-ui/core';
import { MenuItemProp } from './DetailContent';
import Link from './Link';

export interface Props {
  billAmount: number;
  billStatus?: string;
  selected: MenuItemProp[];
  id: string;
  checked: string[];
  setChecked: (item: string[]) => void;
  setSelected: (itme: MenuItemProp[]) => void;
  splitAmount: any;
  setSplitAmount: (amount: any) => void;
}

const useStyles = makeStyles((theme) => ({
  rightContentWrapper: {
    marginRight: '10px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '15px',
    },
  },
  leftContentDescription: {
    marginTop: '5px',
  },
  rightContent: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  greenPlusSign: {
    color: theme.palette.wellPaidGreen,
    fontWeight: 'bold',
  },
}));

const RightContent: FC<Props> = (props) => {
  const {
    billAmount,
    splitAmount,
    setSplitAmount,
    selected,
    checked,
    setChecked,
    id,
  } = props;
  const classes = useStyles();

  const skipSpliting = () => {
    setChecked(checked.filter((item) => item !== id));
  };

  const calcRequest = () => {
    let requestAmount = 0;

    selected.forEach((item) => {
      requestAmount += splitAmount[item.id!!];
    });

    return requestAmount;
  };

  return (
    <div className={classes.rightContentWrapper}>
      <Grid container className={classes.rightContent}>
        <Grid item container direction="row" xs={12} sm={8}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              $
              {billAmount
                .toFixed(2)
                .toString()
                .split(',')
                .join('')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.leftContentDescription}>
            {calcRequest() > 0 ? (
              <Typography variant="body2">
                {billAmount && (
                  <>
                    <Typography
                      variant="body2"
                      className={classes.greenPlusSign}
                    >
                      +
                    </Typography>
                    &nbsp;$
                    {calcRequest()
                      .toFixed(2)
                      .toString()
                      .split(',')
                      .join('')
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </>
                )}
              </Typography>
            ) : (
              <Link onClick={skipSpliting}>Skip</Link>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightContent;
