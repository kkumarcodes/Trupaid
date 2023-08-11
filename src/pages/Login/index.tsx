import React, {FunctionComponent, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

import InfographicLayout from '../../components/Layouts/InfographicLayout';

import onboardingImg from '../../assets/images/branding/onboarding.png';
import creditCardImg from '../../assets/images/branding/creditCard.png';
import moneyChipImg from '../../assets/images/branding/moneyChip.png';
import cartImg from '../../assets/images/branding/cart.png';

const infographicSlides = [{
    imgSrc: onboardingImg,
    title: 'Welcome to TruPaid',
    info: 'Split bills like rent and electric without effort or reminders.'
  }, {
    imgSrc: creditCardImg,
    title: 'Financial Hub',
    info: 'Connect your accounts to see balances and all your transactions in one place.'
  }, {
    imgSrc: moneyChipImg,
    title: 'Effortless Planning',
    info: 'Build an effortless and tailored plan for your monthly finances with help from TruPaid\'s proprietary algorithm.'
  }, {
    imgSrc: cartImg,
    title: 'Catered Deals',
    info: 'Find the latest deals on home services in your local area, saving time and money.'
  },
];

const OnboardingRoutes:FunctionComponent = () => {
  const history = useHistory();

  const Content = <>
    <Button variant="contained" color="primary" onClick={() => {}}>
      Login
    </Button>
    <Button variant="contained" onClick={() => {}}>
      Logout
    </Button>
    <Button variant="contained" color="secondary" onClick={() =>
        {}
      }>
      Sign up
    </Button>
  </>;

  return <InfographicLayout content={Content} infographicSlides={infographicSlides}>

  </InfographicLayout>;
}

export default OnboardingRoutes;
