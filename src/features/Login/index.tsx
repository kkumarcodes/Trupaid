import React, {FunctionComponent, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from 'components/Typography';

import InfographicLayout from 'components/Layouts/InfographicLayout';

import onboardingImg from 'assets/images/branding/onboarding.png';
import creditCardImg from 'assets/images/branding/creditCard.png';
import moneyChipImg from 'assets/images/branding/moneyChip.png';
import cartImg from 'assets/images/branding/cart.png';

const infographicSlides = [{
    imgSrc: onboardingImg,
    title: 'Welcome to Well Paid',
    info: 'Split bills like rent and electric without effort or reminders.'
  }, {
    imgSrc: creditCardImg,
    title: 'Financial Hub',
    info: 'Connect your accounts to see balances and all your transactions in one place.'
  }, {
    imgSrc: moneyChipImg,
    title: 'Effortless Planning',
    info: 'Build an effortless and tailored plan for your monthly finances with help from Well Paid\'s proprietary algorithm.'
  }, {
    imgSrc: cartImg,
    title: 'Catered Deals',
    info: 'Find the latest deals on home services in your local area, saving time and money.'
  },
];

const OnboardingRoutes:FunctionComponent = () => {
  const history = useHistory();
  const { loginWithRedirect, user = {}, logout } = useAuth0();

  const Content = <>
    <Button variant="contained" color="primary" onClick={() => loginWithRedirect({ redirectUri: `${window.location.origin}/redirect` })}>
      Login
    </Button>
    <Button variant="contained" onClick={() => logout()}>
      Logout
    </Button>
    <Button variant="contained" color="secondary" onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
          redirectUri: `${window.location.origin}/redirect`
        })
      }>
      Sign up
    </Button>
  </>;

  return <InfographicLayout content={Content} infographicSlides={infographicSlides}>

  </InfographicLayout>;
}

export default OnboardingRoutes;
