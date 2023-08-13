import {
  AppBar,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  useTheme,
  Menu,
  MenuItem,
  Card,
  Grid,
} from '@material-ui/core';
import Button from '../components/Button';
import React from 'react';
import Layout from "../components/Layout";
import Link from "../components/Link";


const index = () => {
  return (
    <Layout>
      <h1>Autopilot for Sharing</h1>
      <div>
        Living with others means sharing bills. Skip the monthly mess by tracking bills together. Settle the tab how you want: all at once or with auto-transfers. Easy.
      </div>
      <Button>
        Get TruPaid
      </Button>

      <section id="feature-grid1"
        style={{ backgroundImage: `url()` }}
        className="" >
        <Grid container>
          <Grid item md={12} className="">
            <div className="col-12 text-center">
              <h2 className="sw-font-size-4xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-7xs sw-letter-spacing-normal sw-line-height-normal ">Simplify sharing with your group     </h2>
            </div>
          </Grid>
          <Grid container>
            <Grid item md={6} className="">
              <Card className="" style={{ height: "136px" }}>
                <h6 className="">Stop auto-renewals</h6>
                <p className=" ">Identify subscriptions and recurring bills charging your card and bank accounts.</p>
              </Card>
            </Grid>
            <Grid item md={6} className="">
              <Card className="">
                <h6 className="">Track bills together</h6>
                <p className=" ">Track shared charges as a group and see your share automatically.</p>
              </Card>  </Grid>
            <Grid item md={6} className="">
              <Card className="" style={{ height: "136px" }}>
                <h6 className="">Auto-split charges</h6>
                <p className=" ">Set simple rules to split bills or subscriptions any time you're charged.</p>
              </Card>
            </Grid>
            <Grid item md={6} className="">
              <Card className="">
                <h6 className="">Automated transfers</h6>
                <p className=" ">Schedule recurring bank transfers for rent or utility bills and auto-save from deposits.</p>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>

    </Layout>
  );
};

export default index;
