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

import Mainlaptop from '../assets/images/others/mainlaptop.png';

import CheckIcon from '@material-ui/icons/Check';

const index = () => {
  return (
    <Layout>
      <section className='sectionbottom datasection text-center'>
        <Grid container>
          <Grid item md={2} className=""></Grid>
          <Grid item md={8} className="">


            <h1>Autopilot for Sharing</h1>
            <div className='p-30'>
              Living with others means sharing bills. Skip the monthly mess by tracking bills together. Settle the tab how you want: all at once or with auto-transfers. Easy.
            </div>
            <Button>
              Get TruPaid
            </Button>
            <img src={Mainlaptop} alt="logo" className="w-100" />
          </Grid>
          <Grid item md={2} className=""></Grid>

        </Grid>
      </section>

      <section className='sectiontop datasection' >
        <Grid container>
          <Grid item md={12} className="">
            <div className="col-12 text-center">
              <h2 className=" ">Simplify sharing with your group     </h2>
            </div>
          </Grid>
          <Grid container>
            <Grid item md={6} className="">
              <Card className="m-15 p-15">
                <h6 className="">Stop auto-renewals</h6>
                <p className=" ">Identify subscriptions and recurring bills charging your card and bank accounts.</p>
              </Card>
            </Grid>
            <Grid item md={6} className="">
              <Card className="m-15 p-15">
                <h6 className="">Track bills together</h6>
                <p className=" ">Track shared charges as a group and see your share automatically.</p>
              </Card>  </Grid>
            <Grid item md={6} className="">
              <Card className="m-15 p-15">
                <h6 className="">Auto-split charges</h6>
                <p className=" ">Set simple rules to split bills or subscriptions any time you're charged.</p>
              </Card>
            </Grid>
            <Grid item md={6} className="">
              <Card className="m-15 p-15">
                <h6 className="">Automated transfers</h6>
                <p className=" ">Schedule recurring bank transfers for rent or utility bills and auto-save from deposits.</p>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className='sectionbottom'>
        <Grid container>
          <Grid item md={12} className="">
            <div className="col-12 text-center">
              <h2 className=" ">Who we help</h2>
            </div>
          </Grid>
          <Grid item md={12} className="">
            <Grid container>
              <Grid item md={3} className="">
                <Card className="m-15">
                  <img src={Roommates} alt="logo" className="" />
                  <div className='p-30'>
                    <h6 className="">Roommates</h6>
                    <p className=" ">Avoid potential conflict and simplify house bills with a house ledger. Track charges together and split costs automatically. Any time you're charged, the whole group sees their share and can settle up costs.</p>
                  </div>

                </Card>
              </Grid>
              <Grid item md={3} className="">
                <Card className="m-15">
                  <img src={Couples} alt="logo" className="" />
                  <div className='p-30'>
                    <h6 className="">Couples</h6>
                    <p className=" ">Not ready to fully combine all your money into a joint account? Simply connect shared bills or tag shared charges to your house ledger. Let charges auto-split and settle up in seconds.</p>
                  </div>
                </Card>
              </Grid>
              <Grid item md={3} className="">
                <Card className="m-15">
                  <img src={Coparents} alt="logo" className="w-100" />
                  <div className='p-30'>
                    <h6 className="">Coparents</h6>
                    <p className=" ">Raising kids is tough enough without needing to add receipts to every split charge with the ex. Set simple auto-split rules for bank-validated karate or school charges to get paid back easily.</p>
                  </div>
                </Card>
              </Grid>
              <Grid item md={3} className="">
                <Card className="m-15">
                  <img src={Landlords} alt="logo" className="" />
                  <div className='p-30'>
                    <h6 className="">Landlords</h6>
                    <p className=" ">Auto-request your tenants to pay utility bills and rent in seconds. Tag your units with their utility bills or add a recurring rent charge and get paid with simple, high-limit bank transfers.</p>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className='sectiontop'>
        <Grid container className='datasection'>
          <Grid item md={6} className="">
            <img src={together} alt="logo" className="" style={{ maxWidth: '450px' }} />
          </Grid>
          <Grid item md={6} className="">
            <div className='datadesc'>
              <h2>Keep it together</h2>
              <p>TruPaid organizes your existing accounts and services in one place, adding tools to automate or share.</p>

              <p>Identify subscriptions in your accounts</p>

              <p>Organize subscription details</p>

              <p>Plan for your share</p>
            </div>
          </Grid>
        </Grid>
      </section>
      <section className='sectionbottom'>
        <Grid container className='datasection'>

          <Grid item md={6} className="">
            <div className='datadesc'>
              <h2>Share house bills</h2>
              <p>Share bills in seconds. Split future charges automatically or share tracking so everyone can plan their share.</p>

              <p>Split bills automatically</p>

              <p>Share bill tracking and details</p>

              <p>Settle up multiple bills all at once</p>
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
              <h2>Automate bank transfers</h2>
              <p>Transfer money on a schedule between your bank accounts or with others. Auto-save a percent of deposits or auto-sweep like a personal treasury department.</p>

              <p>Transfer between bank accounts</p>

              <p>Transfer and request with others</p>

              <p>Automate bill splitting</p>
            </div>

          </Grid>
        </Grid>
      </section>
      <Grid container>
        <Grid item md={2} className="">
        </Grid>
        <Grid item md={4} className="">
          <div>
            <div className='pricing-box'>
              <h6 className="">Free</h6>
              <p>Track and split simple requests</p>
              <p><span className="price">$0</span> / <small>month</small></p>
              <ul>
                <li><CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Track bill charges across all accounts</li>
                <li><CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Track your share of categorized spend</li>
                <li><CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Quick split one-time charges</li>
                <li><CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Set simple recurring transfers</li>
              </ul>
              <Button>Get TruPaid</Button>
            </div>
          </div>
        </Grid>
        <Grid item md={4} className="">
          <div>
            <div className='pricing-box'>
              <h6 className="">TruPaid Pro</h6>
              <p>Less than the cost of coffee for automated tracking and transfers</p>
              <p><span className="price">$3</span> / <small>month</small></p>
              <ul>
                <li><CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Unlimited transfers between accounts</li>
                <li> <CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Automated group bill tracking</li>
                <li><CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Advanced transfer routines</li>
                <li> <CheckIcon style={{ fontSize: 14, color: '#33428e', marginRight: '15px', marginTop: '8px' }} />Track your share of group bills</li>
              </ul>
              <Button>Get TruPaid</Button>
            </div>
          </div>
        </Grid>
        <Grid item md={2} className="">
        </Grid>
      </Grid>
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

export default index;
