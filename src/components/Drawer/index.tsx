import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Avatar,
  ListItemAvatar,
  useMediaQuery,
  Drawer,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Box,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import Typography from "../Typography/index";

import { Menu as MenuIcon } from "@material-ui/icons";

import {
  DrawHomeIcon,
  DrawTransferIcon,
  DrawExpensesIcon,
  DrawActivityIcon,
  DrawConnectIcon,
  DrawAccountsIcon,
  DrawSettingsIcon,
  OnBoardingLogoIcon,
  OnBoardingLogoIcon2,
} from "../Icons";

export interface routeProps {
  name: string;
  route: string;
  icon: string;
}

export interface Props {
  routes: Array<routeProps>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
  },
  drawer: {
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
    [theme.breakpoints.up("xs")]: {
      flexShrink: 0,
    },
  },
  drawerOpen: {
    width: 209,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.only("sm")]: {
      width: 303,
    },
    [theme.breakpoints.only("xs")]: {
      width: 303,
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(12) + 6, //102px
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(12) + 6,
    },
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(12) + 6,
    },
  },
  drawerPaper: {
    width: 209,
    backgroundColor: "white",
    [theme.breakpoints.only("sm")]: {
      width: 303,
    },
    [theme.breakpoints.only("xs")]: {
      width: 303,
    },
  },
  content: {
    flexGrow: 0,
    paddingLeft: theme.spacing(14) + 6,
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    [theme.breakpoints.only("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(1) + 6,
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
  logo: {
    margin: "auto",
    textAlign: "center",
    width: "103px",
    height: "24px",
  },
  menuIcon: {
    width: "25px",
    height: "25px",
    fontSize: 16,
    position: "absolute",
    [theme.breakpoints.only("sm")]: {
      fontSize: 19,
      width: "36px",
      height: "36px",
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  fontBold: {
    fontWeight: "bold",
    marginLeft: "20px",
  },
}));

const listItemStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "0px",
    paddingTop: "0px",
  },
  selectedIconContent: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    background: "linear-gradient(to right bottom, #00D2E0, #00D200)",
    [theme.breakpoints.only("sm")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  deSelectedIconContent: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    backgroundColor: "#F7F7F7FF",
    [theme.breakpoints.only("sm")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  drawIconSpacing: {
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "12.5px",
    marginBottom: "12.5px",
    [theme.breakpoints.only("sm")]: {
      marginLeft: "40px",
      marginRight: "25px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "40px",
      marginRight: "25px",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  topIconMargin: {
    marginLeft: "33px",
    marginTop: "40px",
    marginRight: "33px",
    marginBottom: "16px",
    [theme.breakpoints.only("sm")]: {
      marginLeft: "40px",
      marginTop: "65px",
      marginRight: "65px",
      marginBottom: "37.14px",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "40px",
      marginTop: "65px",
      marginRight: "65px",
      marginBottom: "37.14px",
    },
  },
  sideLogo: {
    objectFit: "cover",
    width: "36px",
    height: "42px",
    [theme.breakpoints.only("sm")]: {
      width: "197px",
      height: "46px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "197px",
      height: "46px",
    },
  },
  fontBold: {
    fontWeight: "bold",
  },
}));

const AppDrawer: FC<Props> = (props) => {
  const { routes, children } = props;
  const classes = useStyles();
  const listItemClasses = listItemStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeRoute, setActiveRoute] = React.useState("");
  const getIcons = (isActive: boolean, name: string) => {
    switch (name) {
      case "DrawHomeIcon": {
        return (
          <DrawHomeIcon
            viewBox="0 0 26 27"
            active={`${isActive}`}
          ></DrawHomeIcon>
        );
      }
      case "DrawTransferIcon": {
        return (
          <DrawTransferIcon
            viewBox="0 0 26 24"
            active={`${isActive}`}
          ></DrawTransferIcon>
        );
      }
      case "DrawExpensesIcon": {
        return (
          <DrawExpensesIcon
            viewBox="0 0 26 24"
            active={`${isActive}`}
          ></DrawExpensesIcon>
        );
      }
      case "DrawActivityIcon": {
        return (
          <DrawActivityIcon
            viewBox="0 0 24 26"
            active={`${isActive}`}
          ></DrawActivityIcon>
        );
      }
      case "DrawConnectIcon": {
        return (
          <DrawConnectIcon
            viewBox="0 0 24 19"
            active={`${isActive}`}
          ></DrawConnectIcon>
        );
      }
      case "DrawAccountsIcon": {
        return (
          <DrawAccountsIcon
            viewBox="0 0 24 24"
            active={`${isActive}`}
          ></DrawAccountsIcon>
        );
      }
      case "DrawSettingsIcon": {
        return (
          <DrawSettingsIcon
            viewBox="0 0 24 26"
            active={`${isActive}`}
          ></DrawSettingsIcon>
        );
      }
      default: {
        return (
          <DrawHomeIcon
            viewBox="0 0 26 27"
            active={`${isActive}`}
          ></DrawHomeIcon>
        );
      }
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const matchesMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const matchesPhoneSize = useMediaQuery(theme.breakpoints.only("xs"));
  const matchesTabletSize = useMediaQuery(theme.breakpoints.only("sm"));

  const drawer = (isTabletPhone: boolean) => (
    <div>
      <div className={listItemClasses.topIconMargin}>
        {!isTabletPhone ? (
          <OnBoardingLogoIcon2
            logoHeight={46}
            logoWidth={197}
            viewBox="0 0 103 24"
          />
        ) : (
          <OnBoardingLogoIcon
            logoHeight={50}
            logoWidth={35}
            viewBox="0 0 30 30"
          />
        )}
      </div>
      <List>
        {routes.map((route, index) => (
          <NavLink
            key={index}
            to={route.route}
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              setActiveRoute(location.pathname);
              return true;
            }}
          >
            <ListItem
              onClick={()=>{
                if (matchesPhoneSize || matchesTabletSize) {
                  handleDrawerToggle();
                }
              }}
              key={route.name}
              className={clsx([listItemClasses.root])}
              disableGutters={true}
              button
            >
              {route.route === activeRoute ? (
                <ListItemAvatar>
                  <Avatar
                    className={clsx(
                      listItemClasses.selectedIconContent,
                      listItemClasses.drawIconSpacing
                    )}
                  >
                    {getIcons(true, route.icon)}
                  </Avatar>
                </ListItemAvatar>
              ) : (
                <ListItemAvatar>
                  <Avatar
                    className={clsx(
                      listItemClasses.deSelectedIconContent,
                      listItemClasses.drawIconSpacing
                    )}
                  >
                    {getIcons(false, route.icon)}
                  </Avatar>
                </ListItemAvatar>
              )}
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    className={clsx({
                      [listItemClasses.fontBold]: route.route === activeRoute,
                    })}
                  >
                    {route.name}
                  </Typography>
                }
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {!matchesMdUp ? (
        <div>
          {matchesPhoneSize ? (
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <div>
                  <OnBoardingLogoIcon2
                    logoHeight={24}
                    logoWidth={103}
                    viewBox="0 0 103 24"
                  />
                </div>
              </Toolbar>
            </AppBar>
          ) : (
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar variant="dense">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <Typography className={classes.fontBold} variant="body1">
                  Dashboard
                </Typography>
              </Toolbar>
            </AppBar>
          )}
        </div>
      ) : null}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {(matchesPhoneSize || matchesTabletSize) && (
          <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer(false)}
          </Drawer>
        )}
        {matchesMdUp && (
          <Drawer
            variant="permanent"
            anchor="left"
            open={open}
            elevation={100}
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
            onMouseEnter={() => {
              handleDrawerOpen();
            }}
            onMouseLeave={() => {
              handleDrawerClose();
            }}
          >
            {drawer(true)}
          </Drawer>
        )}
      </nav>
      <div>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
};

export default AppDrawer;
