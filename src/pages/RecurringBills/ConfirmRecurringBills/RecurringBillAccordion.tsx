import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  FormControlLabel,
} from '@material-ui/core';
import CheckBox from '../../../components/Checkbox';
import Typography from '../../../components/Typography';
import { ExpandMoreIcon, ExpandLessIcon } from '../../../components/Icons';
import { Grid, Box } from '@material-ui/core';
import { useState } from 'react';

export interface Props {
  LeftContent: ReactNode;
  RightContent?: ReactNode;
  Details: ReactNode;
  category: string;
  showRightContent?: boolean;
  onSelected: (event: boolean) => void;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  accordionRounded: {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: '#fafafa',
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
  accordionSummaryRoot: {
    padding: 0,
  },
  accordionSummaryContent: {
    alignItems: 'center',
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
    padding: 0,
  },
  detailsContainer: {
    width: '100%',
    padding: '16px 0px',
  },
}));

const RecurringBillAccordion: FC<Props> = (props) => {
  const classes = useStyles();
  const {
    LeftContent,
    RightContent,
    Details,
    category,
    showRightContent,
    title,
    onSelected,
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  const handleChecked = (event: boolean) => {
    setChecked(event);
    onSelected(event);
  };

  return (
    <>
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
            root: classes.accordionSummaryRoot,
            expandIcon: classes.expandIcon,
            content: classes.accordionSummaryContent,
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              {LeftContent}
            </Grid>
            {showRightContent && (
              <Grid item xs={12}>
                {RightContent}
              </Grid>
            )}
          </Grid>
        </MuiAccordionSummary>
        <MuiAccordionDetails classes={{ root: classes.accordionDetails }}>
          <div className={classes.detailsContainer}>{Details}</div>
        </MuiAccordionDetails>
      </MuiAccordion>
    </>
  );
};

export default RecurringBillAccordion;
