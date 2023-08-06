import React, { FC } from "react";
import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Tabs,
  Tab,
  Box,
  IconButton,
  Grid,
} from "@material-ui/core";

import {
  NextIcon,
  NextIconDisabled,
  BackIcon,
  BackIconDisabled,
} from "../Icons";

export interface tabProps {
  name: string;
  content: React.ReactNode;
}

export interface Props {
  activeName: string;
  tabs: Array<tabProps>;
  onChangeCb: (newValue: string) => void;
  controls: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    "&:focus": {
      opacity: 1,
    },
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,

    [theme.breakpoints.only("xs")]: {
      padding: "0px 0px",
      width: "100%",
      position: "unset",
    },
  },
  content: {
    padding: "20px 4px 20px 4px",
  },
  tabsBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
  },
  tabsBoxControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    " .MuiTabs-fixed.MuiTabs-scroller": {
      overflow: "visible",
      width: "300px",
    },
    "&.MuiTabs-root": {
      overflow: "visible",
      width: "fit-content",
      minHeight: "40px",
      height: "40px",
    },
  },
  fixed: {
    overflow: "visible !important",
    style: {
      overflow: "visible",
    },
  },
  tabItem: {
    border: "none",
    borderRadius: "10px",
    boxShadow: "0px 20px 30px rgba(210, 207, 233, 0.5)",
    fontFamily: "Playfair Display",
    fontSize: "21px",
    fontWeight: "bold",
    color: "#2121213f",
    lineHeight: "28px",
    textTransform: "none",
    background: "white",
    opacity: 1,
    "&.Mui-selected": {
      border: "1px solid #00CE00",
      color: "#212121ff",
    },
    "&.MuiTab-root": {
      height: "40px",
      minHeight: "40px",
      width: "220px",
      padding: "0px",
      margin: "0px 5px",
    },
  },
  iconButton: {
    marginRight: 8,
    marginLeft: 8,
  },
  iconButtonLeft: {
    paddingLeft: 0,
    paddingRight: 7.5,
  },
  iconButtonRight: {
    paddingLeft: 7.5,
    paddingRight: 0,
  },
  gridItem: {
    margin: "0px 2.5px",
    height: 40,
    textAlign: "center",
    fontFamily: "Playfair Display",
    fontSize: "21px",
    fontWeight: "bold",
    lineHeight: "20px",
    background: "white",
    padding: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow: "0px 20px 30px rgba(210, 207, 233, 0.5)",
  },
  itemOne: {
    width: "200px",
  },
  itemSmallPhone: {
    fontSize: "16px",
  },
  gridItemControl: {
    fontSize: "16px",
  },
  gridItemUnSelected: {
    color: "#2121213f",
    border: "none",
  },
  gridItemSelected: {
    border: "1px solid #00CE00",
    color: "#212121ff",
  },
}));

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AppTabs: FC<Props> = (props) => {
  const { activeName, tabs, controls, onChangeCb } = props;
  const getIndex = (name: string) => {
    for (var index = 0; index < tabs.length; index++) {
      if (tabs[index].name === name) {
        return index;
      }
    }
    return 0;
  };
  const classes = useStyles();
  const theme = useTheme();
  const [index, setIndex] = React.useState(getIndex(activeName));

  const matchesPhoneSize = useMediaQuery(theme.breakpoints.only("xs"));
  const matchesPhoneSmallWidth = useMediaQuery("(max-Width:350px)");

  const tabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setIndex(newValue);
    onChangeCb(tabs[newValue].name);
  };

  const gridItemChange = (newValue: number) => {
    setIndex(newValue);
    onChangeCb(tabs[newValue].name);
  };  

  return (
    <div>
      <div className={classes.root}>
        {!matchesPhoneSize ? (
          <div className={controls ? classes.tabsBoxControl : classes.tabsBox}>
            {controls && (
              <IconButton
                className={classes.iconButton}
                onClick={() => {
                  if (index !== 0) {
                    setIndex(index - 1);
                  }
                }}
              >
                {index === 0 ? <BackIconDisabled /> : <BackIcon />}
              </IconButton>
            )}
            <Tabs
              TabIndicatorProps={{
                style: {
                  background: "transparent",
                  height: "0px",
                },
              }}
              className={classes.tabs}
              classes={{
                fixed: classes.fixed,
              }}
              value={index}
              onChange={tabChange}
              aria-label="app-tabs"
              variant="standard"
            >
              {tabs.map((tab, index) => (
                <Tab
                  disableRipple
                  className={clsx(classes.tabItem)}
                  label={tab.name}
                  value={index}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
            {controls && (
              <IconButton
                className={classes.iconButton}
                onClick={() => {
                  if (index !== tabs.length - 1) {
                    setIndex((pre) => pre + 1);
                  }
                }}
              >
                {index === tabs.length - 1 ? (
                  <NextIconDisabled />
                ) : (
                  <NextIcon />
                )}
              </IconButton>
            )}
          </div>
        ) : tabs.length === 1 ? (
          <div
            className={clsx(
              classes.gridItem,
              classes.tabsBox,
              classes.gridItemSelected,
              classes.itemOne,
              {
                [classes.itemSmallPhone]: matchesPhoneSmallWidth,
              }
            )}
          >
            {tabs[0].name}
          </div>
        ) : (
          <div className={controls ? classes.tabsBoxControl : classes.tabsBox}>
            {controls && (
              <IconButton
                className={classes.iconButtonLeft}
                onClick={() => {
                  if (index !== 0) {
                    setIndex(index - 1);
                  }
                }}
              >
                {index === 0 ? <BackIconDisabled /> : <BackIcon />}
              </IconButton>
            )}
            <Grid container>
              {tabs.map((tab, i) => (
                <Grid item xs={6}>
                  <div
                    onClick={() => {
                      gridItemChange(i);
                    }}
                    className={clsx(classes.gridItem, {
                      [classes.gridItemSelected]: i === index,
                      [classes.gridItemUnSelected]: i !== index,
                      [classes.gridItemControl]: controls,
                      [classes.itemSmallPhone]: matchesPhoneSmallWidth,
                    })}
                  >
                    {tab.name}
                  </div>
                </Grid>
              ))}
            </Grid>
            {controls && (
              <IconButton
                className={classes.iconButtonRight}
                onClick={() => {
                  if (index !== tabs.length - 1) {
                    setIndex((pre) => pre + 1);
                  }
                }}
              >
                {index === tabs.length - 1 ? (
                  <NextIconDisabled />
                ) : (
                  <NextIcon />
                )}
              </IconButton>
            )}
          </div>
        )}
        <div className={classes.content}>
          {tabs[index].content}
        </div>
      </div>
    </div>
  );
};

export default AppTabs;
