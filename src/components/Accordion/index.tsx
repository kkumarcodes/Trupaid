import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  FormControlLabel,
} from '@material-ui/core';
import AccordionActions from '@material-ui/core/AccordionActions';
import CheckBox from '../Checkbox';
import Typography from '../Typography';
import Button from '../Button';
import Link from '../Link';
import { ExpandMoreIcon, ExpandLessIcon } from '../Icons';
import { Grid, Box } from '@material-ui/core';
import { useState } from 'react';

export interface Props {
  LeftContent: ReactNode;
  RightContent?: ReactNode;
  DetailContent: ReactNode;
  category: string;
  showRightContent?: boolean;
  // onSelected: (event: boolean) => void;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  accordionRounded: {
    '&.MuiAccordion-rounded': {
      borderRadius: '10px !important',
      boxShadow: '0px 20px 30px rgba(210, 207, 233, 0.5); !important',
    },
  },
  avartarWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(133.49deg, #00D2E0 2.5%, #00D200 100%);',
  },
  accordionSummaryContent: {
    alignItems: 'center',
    paddingLeft: '10px',
  },
  expandIcon: {
    padding: '8px 18px 8px 8px',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '5px',
    },
    '&.MuiAccordionSummary-expandIcon.Mui-expanded': {
      transform: 'unset',
    },
  },
  cardBackground: {
    borderRadius: '10px',
  },
  billSplitAvartar: {
    color: theme.palette.white,
  },
  leftContentDescription: {
    marginTop: '5px',
  },
  accordionDetails: {
    padding: '0 25px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 10px',
    },
  },
  detailsContainer: {
    width: '100%',
    padding: '16px 0px',
    borderTop: '1px solid #B0B0B0',
  },
}));

const WellPaidAccordion: FC<Props> = (props) => {
  const classes = useStyles();
  const {
    LeftContent,
    RightContent,
    DetailContent,
    category,
    showRightContent,
    title,
    // onSelected,
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  const handleChecked = (event: boolean) => {
    setChecked(event);
    // onSelected(event);
  };

  return (
    <div>
      <MuiAccordion
        expanded={expanded}
        onChange={(event: object, expanded: boolean) => setExpanded(expanded)}
        classes={{ rounded: classes.accordionRounded }}
      >
        <MuiAccordionSummary
          expandIcon={
            expanded ? (
              <ExpandLessIcon viewBox="0 0 26 26" />
            ) : (
              <ExpandMoreIcon viewBox="0 0 26 26" />
            )
          }
          classes={{
            expandIcon: classes.expandIcon,
            content: classes.accordionSummaryContent,
          }}
        >
          <FormControlLabel
            aria-label="Select"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              category === 'billSplit' ? (
                <CheckBox
                  checked={checked}
                  onChange={(event) => handleChecked(event.target.checked)}
                />
              ) : (
                <div className={classes.avartarWrapper}>
                  <Typography
                    variant="smallText1"
                    className={classes.billSplitAvartar}
                  >
                    {title.substring(0, 1)}
                  </Typography>
                </div>
              )
            }
            label=""
          />

          <Grid container>
            <Grid item xs={8}>
              {LeftContent}
            </Grid>
            {showRightContent && (
              <Grid item xs={4}>
                {RightContent}
              </Grid>
            )}
          </Grid>
        </MuiAccordionSummary>
        <MuiAccordionDetails classes={{ root: classes.accordionDetails }}>
          <div className={classes.detailsContainer}>{DetailContent}</div>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export default WellPaidAccordion;
