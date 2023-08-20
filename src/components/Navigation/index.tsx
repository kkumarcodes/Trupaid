import React, { FunctionComponent, useState } from 'react';
import {
  AppBar,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Menu,
  Button,
  MenuItem,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link, navigate } from 'gatsby';
import Logo from '../../assets/images/others/logo.svg';

const drawerWidth = 300;

const Navigation: FunctionComponent = () => {
  const [isPermanent, setPermanent] = useState(false);

  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, 'app-bar--shadow', {
        [classes.appBarShift]: isPermanent,
      })}>
      <Toolbar className={classes.toolbar}>
      <img src={Logo} alt="logo" className="" style={{height: '45px'}} onClick={() => navigate('/')}/>
        
        <div className='nav-button'>
        <Button onClick={() => navigate('/how-it-works')}>
          How It Works
        </Button>
        <Button onClick={() => navigate('/')}>
          Price
        </Button>
        </div>
        
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${0}px)`,
      marginLeft: 0,
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    background: '#fefeff',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  organisation: {
    maxHeight: '60px',
    maxWidth: '300px',
    '& img': {
      objectFit: 'contain',
      width: '100%',
      height: '50px',
      padding: '5px',
    },
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
    '& img': {
      maxHeight: '60px',
      maxWidth: '300px',
      padding: '4px',
      objectFit: 'contain',
    },
    '& h4': {
      margin: '0',
    },
  },
}));

export default Navigation;
