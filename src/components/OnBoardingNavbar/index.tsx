import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import {
  OnBoardingLogoIcon,
  BackArrowIcon,
  OnBoardingLogoIcon2,
} from '../Icons';
import Typography from '../Typography';
import Container from 'components/Container';

export interface Props {
  title?: string;
  logoHeight: number;
  logoWidth: number;
  viewBox: string;
  backEnabled: boolean;
  mobileLogoHeight: number;
  mobileLogoWidth: number;
  mobileLogoViewBox: string;
  navbarMobileLayoutUpdate: boolean;
  showTotalCost?: boolean;
  totalCost?: string;
  hideOnMobile?: boolean;
  goBack?: () => void;
}

const useStyles = makeStyles((theme) => ({
  onBoardingBackIcon: {
    paddingTop: '18px',
    cursor: 'pointer',
  },
  onBoardingBackIcon2: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '13px',
    },
  },
  titleWrapper: {
    maxWidth: '640px',
    marginTop: '105px',
  },
  onBoardingTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: '5px',
      marginLeft: '0px',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginTop: '15px',
      marginLeft: '0px',
    },
  },
  onBoardingTitle2: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginTop: '30px',
    },
  },
  onBoardingLogo: {
    position: 'absolute',
    left: '4.97%',
    top: '40px',
    [theme.breakpoints.down('md')]: {
      left: '40px',
      top: '20px',
    },
  },
  onBoardingLogo2: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginTop: '10px',
    },
  },

  mobileLayoutContainer: {
    paddingTop: '25px',
  },
  totalCostWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  totalCostLabel: {
    marginLeft: '10px',
    width: '35px',
  },
  mobileNavTitle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '30px',
  },
  desktopTitleWrapper: {
    textAlign: 'center',
  },
}));

const OnBoardNavbar: FC<Props> = (props) => {
  const {
    backEnabled,
    title,
    logoHeight,
    logoWidth,
    viewBox,
    mobileLogoHeight,
    mobileLogoWidth,
    mobileLogoViewBox,
    navbarMobileLayoutUpdate,
    goBack,
  } = props;

  const classes = useStyles(props);
  const theme = useTheme();
  const history = useHistory();

  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const matchesXsDown = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      {matchesXsDown && navbarMobileLayoutUpdate ? (
        <Grid container className={classes.mobileLayoutContainer}>
          <Grid item xs={3} className={classes.onBoardingBackIcon2}>
            {backEnabled ? (
              <span onClick={() => (goBack ? goBack() : history.goBack())}>
                <BackArrowIcon />
              </span>
            ) : null}
          </Grid>
          <Grid item xs={6} className={classes.onBoardingLogo2}>
            <OnBoardingLogoIcon2
              logoHeight={mobileLogoHeight}
              logoWidth={mobileLogoWidth}
              viewBox={mobileLogoViewBox}
            />
          </Grid>
          <Grid item xs={12} className={classes.mobileNavTitle}>
            <Typography variant="h1">{title}</Typography>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container>
            <Grid item className={classes.onBoardingLogo}>
              <OnBoardingLogoIcon
                logoHeight={logoHeight}
                logoWidth={logoWidth}
                viewBox={viewBox}
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" className={classes.titleWrapper}>
            <Grid item container sm={1} className={classes.onBoardingBackIcon}>
              {backEnabled ? (
                <span onClick={() => (goBack ? goBack() : history.goBack())}>
                  <BackArrowIcon />
                </span>
              ) : null}
            </Grid>
            <Grid
              container
              sm={10}
              justify="center"
              className={classes.desktopTitleWrapper}
            >
              <Typography variant="h1">{title}</Typography>
            </Grid>
            <Grid item sm={1}></Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default OnBoardNavbar;
