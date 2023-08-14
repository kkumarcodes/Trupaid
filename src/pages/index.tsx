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
import GoogleIcon from '../assets/images/others/googleicon.png';

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
              <h2 className=" ">Simplify sharing with your group     </h2>
            </div>
          </Grid>
          <Grid container>
            <Grid item md={6} className="">
              <Card className="">
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
              <Card className="">
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

      <Grid container>
        <Grid item md={12} className="">
          <div className="col-12 text-center">
            <h2 className=" ">Who we help</h2>
          </div>
        </Grid>
        <Grid item md={12} className="">
          <Grid container>
            <Grid item md={3} className="">
              <Card className="">
                <img src={GoogleIcon} alt="logo" className="" />

                <h6 className="">Roommates</h6>
                <p className=" ">Avoid potential conflict and simplify house bills with a house ledger. Track charges together and split costs automatically. Any time you're charged, the whole group sees their share and can settle up costs.</p>
              </Card>
            </Grid>
            <Grid item md={3} className="">
              <Card className="">
                <h6 className="">Couples</h6>
                <p className=" ">Not ready to fully combine all your money into a joint account? Simply connect shared bills or tag shared charges to your house ledger. Let charges auto-split and settle up in seconds.</p>
              </Card>
            </Grid>
            <Grid item md={3} className="">
              <Card className="">
                <h6 className="">Coparents</h6>
                <p className=" ">Raising kids is tough enough without needing to add receipts to every split charge with the ex. Set simple auto-split rules for bank-validated karate or school charges to get paid back easily.</p>
              </Card>
            </Grid>
            <Grid item md={3} className="">
              <Card className="">
                <h6 className="">Landlords</h6>
                <p className=" ">Auto-request your tenants to pay utility bills and rent in seconds. Tag your units with their utility bills or add a recurring rent charge and get paid with simple, high-limit bank transfers.</p>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} className="">
          <img src={GoogleIcon} alt="logo" className="" />
        </Grid>
        <Grid item md={6} className="">
          <h2>Keep it together</h2>
          <p>TruPaid organizes your existing accounts and services in one place, adding tools to automate or share.</p>

          <p>Identify subscriptions in your accounts</p>

          <p>Organize subscription details</p>

          <p>Plan for your share</p>
        </Grid>
      </Grid>

      <Grid container>

        <Grid item md={6} className="">
          <h2>Share house bills</h2>
          <p>Share bills in seconds. Split future charges automatically or share tracking so everyone can plan their share.</p>

          <p>Split bills automatically</p>

          <p>Share bill tracking and details</p>

          <p>Settle up multiple bills all at once</p>
        </Grid>
        <Grid item md={6} className="">
          <img src={GoogleIcon} alt="logo" className="" />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} className="">
          <img src={GoogleIcon} alt="logo" className="" />
        </Grid>
        <Grid item md={6} className="">
          <h2>Automate bank transfers</h2>
          <p>Transfer money on a schedule between your bank accounts or with others. Auto-save a percent of deposits or auto-sweep like a personal treasury department.</p>

          <p>Transfer between bank accounts</p>

          <p>Transfer and request with others</p>

          <p>Automate bill splitting</p>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={2} className="">
        </Grid>
        <Grid item md={4} className="">
          <Card className="">
            <h6 className="">Free</h6>
            <p>Track and split simple requests</p>
            <p>$0 / month</p>
            <ul>
              <li>Track bill charges across all accounts</li>
              <li>Track your share of categorized spend</li>
              <li>Quick split one-time charges</li>
              <li>Set simple recurring transfers</li>
            </ul>
            <Button>Get TruPaid</Button>
          </Card>
        </Grid>
        <Grid item md={4} className="">
          <Card className="">
            <h6 className="">WellPaid Pro</h6>
            <p>Less than the cost of coffee for automated tracking and transfers</p>
            <p>$3 / month</p>
            <ul>
              <li>Unlimited transfers between accounts</li>
              <li> Automated group bill tracking</li>
              <li> Advanced transfer routines</li>
              <li> Track your share of group bills</li>
            </ul>
            <Button>Get TruPaid</Button>
          </Card>
        </Grid>
        <Grid item md={2} className="">
        </Grid>
      </Grid>

    </Layout>
  );
};

export default index;
