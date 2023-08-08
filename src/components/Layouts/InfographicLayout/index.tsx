import { FC, ReactNode, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, MobileStepper } from "@material-ui/core";

import Infographic, { InfographicProps } from "./Inforgraphic";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface Props {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  content?: ReactNode;
  infographicContent?: ReactNode;
  infographicProps?: InfographicProps;
  infographicSlides?: InfographicProps[];
  MobileTitleContent?: any;
  showDot?: boolean;
}

const useStyles = makeStyles((theme) => ({
  swippable: {
    height: "inherit",
    width: "inherit",
  },
  stepper: {
    backgroundColor: "transparent",
    paddingBottom: "15px",
    [theme.breakpoints.only("sm")]: {
      paddingTop: "40px",
    },
  },
  dotActive: {
    backgroundColor: "#33428E !important",
  },
  dot: {
    backgroundColor: "white",
    margin: "0 5px",
    [theme.breakpoints.down("sm")]: {
      height: "10px",
      width: "10px",
      margin: "0 7.5px",
    },
  },
  root: {
    height: "100%",
    alignItems: "flex-start",
    alignContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      flexWrap: "wrap-reverse",
    },
  },
  infographicSection: {
    padding: "0px",
    [theme.breakpoints.up("md")]: {
      padding: "25px 0px 25px 25px",
      height: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "455px",
      padding: "25px 25px 0px 25px",
    },
  },
  infographicContent: {
    backgroundColor: "#EEF1FA",
    position: "relative",
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    [theme.breakpoints.only("sm")]: {
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: "0 !important",
    },
    [theme.breakpoints.up("sm")]: {
      borderBottomLeftRadius: 40,
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 0,
    },
  },
  content: {
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
}));

const InfographicLayout: FC<Props> = (props) => {
  const {
    infographicContent,
    infographicProps,
    infographicSlides,
    content,
    hideOnMobile,
    MobileTitleContent,
    hideOnTablet,
    showDot,
  } = props;
  const classes = useStyles(props);

  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const matchesPhoneSize = useMediaQuery(theme.breakpoints.only("xs"));
  const matchesTabletSize = useMediaQuery(theme.breakpoints.only("sm"));

  const hideOnMobileDevice =
    !(matchesPhoneSize && hideOnMobile) && !(matchesTabletSize && hideOnTablet);

  const [swipeIndex, setSwipeIndex] = useState(0);

  return (
    <Grid className={classes.root} container direction="row">
      <Grid container item sm={12} md={7}>
        {content}
      </Grid>
      {hideOnMobileDevice && (
        <Grid
          className={classes.infographicSection}
          container
          item
          md={5}
          sm={12}
        >
          <Grid
            alignContent="flex-start"
            justify="center"
            className={classes.infographicContent}
            container
            direction="row"
          >
            {matchesPhoneSize && <MobileTitleContent />}
            {infographicContent ? (
              infographicContent
            ) : (
              <>
                {infographicProps && <Infographic {...infographicProps} />}
                {infographicSlides && (
                  <Grid
                    item
                    container
                    alignContent="flex-start"
                    justify="center"
                    direction={
                      matchesMdUp || matchesPhoneSize
                        ? "column"
                        : "column-reverse"
                    }
                    alignItems="center"
                  >
                    <AutoPlaySwipeableViews
                      className={classes.swippable}
                      enableMouseEvents
                      index={swipeIndex}
                      onChangeIndex={setSwipeIndex}
                    >
                      {infographicSlides.map((slideProps: InfographicProps) => (
                        <Infographic key={slideProps.title} {...slideProps} />
                      ))}
                    </AutoPlaySwipeableViews>
                    {showDot && (
                      <MobileStepper
                        variant="dots"
                        steps={infographicSlides.length}
                        position="static"
                        activeStep={swipeIndex}
                        classes={{
                          root: classes.stepper,
                          dotActive: classes.dotActive,
                          dot: classes.dot,
                        }}
                        backButton={null}
                        nextButton={null}
                      />
                    )}
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default InfographicLayout;
