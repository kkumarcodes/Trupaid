import React, { FunctionComponent, useState } from 'react';
import {
  Card,
  Grid,
} from '@material-ui/core';
import Button from '../components/Button';
import Layout from "../components/Layout";
import Link from "../components/Link";
import Automate from '../assets/images/others/Automate bank transfers.svg';
import together from '../assets/images/others/Keep it together.svg';
import bills from '../assets/images/others/Share house bills.svg';

import Roommates from '../assets/images/others/Roommates.svg';
import Couples from '../assets/images/others/Couples.svg';
import Coparents from '../assets/images/others/Coparents.svg';
import Landlords from '../assets/images/others/Landlords.svg';

import Launch from '../assets/images/others/launch.svg';

import CheckIcon from '@material-ui/icons/Check';

const HowItWorks = () => {
  return (
    <Layout>
      <section className='sectionbottom datasection text-center'>
        <Grid container>
          <Grid item md={2} className=""></Grid>
          <Grid item md={8} className="">


            <h1>Automated finances in 5 minutes</h1>
            <div className='p-30'>
            Get organized with others in minutes. Connect your accounts and WellPaid does the heavy lifting. Then set it and forget it.
            </div>
            <Button>
              Get TruPaid
            </Button>
            <img src={Launch} alt="logo" className="w-100" />
          </Grid>
          <Grid item md={2} className=""></Grid>

        </Grid>
      </section>

      <section className='sectiontop datasection' >
        <Grid container>
          <Grid item md={12} className="">
            <div className="col-12 text-center">
              <h2 className=" ">Start in 3 steps</h2>
              <p>In minutes, you can see all your subscriptions and bills in one place with tools to make changes.</p>
            </div>
          </Grid>
          <Grid container>
            <Grid item md={4} className="">
              <div className="m-15 p-15">
                <h6 className="">1. Add cards and banks</h6>
                <p className=" ">Securely connect cards and banks to share charge details by logging into each bank portal.</p>
              </div>
            </Grid>
            <Grid item md={4} className="">
              <div className="m-15 p-15">
                <h6 className="">2. Confirm recurring bills</h6>
                <p className=" ">Quickly confirm subscription details identified by WellPaid or add new subscriptions.</p>
              </div>  </Grid>
            <Grid item md={4} className="">
              <div className="m-15 p-15">
                <h6 className="">3. Split and share</h6>
                <p className=" ">Add others to your bills by email or phone to automatically split costs, track together, or share details.</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
      
      <section className=''>
        <Grid container className='datasection'>
          <Grid item md={6} className="">
            <img src={together} alt="logo" className="" style={{ maxWidth: '450px' }} />
          </Grid>
          <Grid item md={6} className="">
            <div className='how-datadesc'>
              <h2>Share bills and split automatically</h2>
              <p>Add others to recurring bills to track together and split future charges automatically.</p>

              <h4>Confirm recurring bills</h4>
              <p>Ensure the estimated costs and bill details are correct to help everyone plan ahead.</p>
              <h4>Add others to bills</h4>
              <p>Add friends or roommates to each bill to share tracking of future charges.</p>
              <h4>Automate bill splitting</h4>
              <p>Split costs evenly, by %, or in fixed amounts. Get paid back all at once or after each bill.</p>

              <h4>Alerts and reminders</h4>
              <p>Get alerted if bills are more than expected or someone pauses a bill split.</p>
            </div>
          </Grid>
        </Grid>
      </section>
      <section className='sectionbottom'>
        <Grid container className='datasection'>

          <Grid item md={6} className="">
            <div className='how-datadesc'>
              <h2>Recurring transfers</h2>
              <p>Send money on a routine with others or between your accounts for auto-savings or sweeps.</p>

              <h4>Fixed transfers</h4>
              <p>Send between your banks one-time or on a routine at any connected bank.</p>

              <h4>Automated bill split transfers</h4>
              <p>Add others to automatically split bills. Get paid back any time you're charged or on a fixed date.</p>

              <h4>Percent of deposits (coming soon)</h4>
              <p>Automatically move a percent of deposits for savings, bills, or tax.</p>

              <h4>Sweeps & round ups (coming soon)</h4>
              <p>Automate how money goes into and out of your accounts. Save and manage cash easily.</p>
            </div>
          </Grid>
          <Grid item md={6} className="">
            <img src={bills} alt="logo" className="" />
          </Grid>
        </Grid>
      </section>
      <section className='sectiontop'>
        <Grid container className='datasection'>
          <Grid item md={6} className="">
            <img src={Automate} alt="logo" className="" />
          </Grid>
          <Grid item md={6} className="">
            <div className='datadesc'>
              <h2>Bank grade security</h2>
              <p>WellPaid uses 256-bit encryption and does not store, or even see, your bank login details. We take security seriously and store only what we need to serve you.</p>
            </div>

          </Grid>
        </Grid>
      </section>
      
      <Grid>
        <header id="hero2" className="main-footer">
          <div className='row align-items-center text-center pb-5'>
            <Grid container>
              <Grid item md={2} className=""></Grid>
              <Grid item md={8} className="">
                <h1 className="">
                  Ready to see why we're the leader in household finances?
                </h1>
                <p className="">
                </p>
                <div className="d-flex justify-content-center flex-wrap">
                  <Button>
                    Get TruPaid
                  </Button>
                </div>
              </Grid>

              <Grid item md={2} className=""></Grid>
            </Grid>
          </div>
        </header>
      </Grid>

    </Layout>
  );
};

export default HowItWorks;
