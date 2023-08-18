import React, { FunctionComponent, useState } from 'react';
import {
  AppBar,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  useTheme,
  Menu,
  MenuItem,
  Box,
  Grid,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import clsx from 'clsx';
import { Link } from 'gatsby';

const drawerWidth = 300;

const Footer: FunctionComponent = () => {

  const classes = useStyles();
  return (
    <div>
      <Box className="footer2">
        <Grid container>
          <Grid item md={3}>
            <p className="sw-font-size-m sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-3xs sw-padding-bottom-none sw-line-height-loose">© 2023 TruPaid Inc.</p>
            <Link target="_blank" to="https://www.facebook.com/trupaidinc" rel="noreferrer">
              <FacebookIcon style={{ marginRight: '15px' }} />
            </Link>
            <Link target="_blank" to="https://twitter.com/trupaidInc" rel="noreferrer">
              <TwitterIcon style={{ marginRight: '15px' }} />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/trupaidinc/" rel="noreferrer">
              <InstagramIcon style={{ marginRight: '15px' }} />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/company/trupaid/" rel="noreferrer">
              <LinkedInIcon style={{ marginRight: '15px' }} />
            </Link>

          </Grid>

          <Grid item md={3} className={classes.links}>
            <h4 >Product</h4>
            <Link target="" className="" to="/how-it-works">How it works</Link>
            <Link target="" className="" to="/identity">Identity</Link>
            <Link target="" className="" to="/reference">Reference Checks</Link>
          </Grid>
          <Grid item md={3} className={classes.links}>
            <h4 >Other Services</h4>
            <Link target="_blank" className="" to="/services">Services</Link>
            <Link target="" className="" to="https://blog.gettrupaid.com/">Blog</Link>
            <Link target="" className="" to="/partners">Partners</Link>
          </Grid>
          <Grid item md={3} className={classes.links}>
            <h4 className="">Company</h4>
            <Link target="" className="" to="/help">Help &amp; FAQ</Link>
            <Link target="" className="" to="/terms-of-service">Terms of Service</Link>
            <Link target="" className="" to="/privacy-policy">Privacy Policy</Link>
            <Link target="" className="" to="/hiring">Careers</Link>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
}

const useStyles = makeStyles((theme) => ({

  links: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 1rem',
  }
}));

export default Footer;
