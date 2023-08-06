import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { Route, Switch } from 'react-router-dom';
import OnboardingRoutes from './Onboarding';
import DashboardRoutes from './Dashboard';
import Redirect from './Redirect';
import Login from './Login';
import AstraSuccess from './Onboarding/SignUp/AstraSuccess';
import SignUp from './Onboarding/SignUp';
import OnBoardingLanding from './Login/OnboardingLanding';
import RecurringBills from './RecurringBills';
import ConfirmRecurringBills from './RecurringBills/ConfirmRecurringBills';
import SplitRecurringBills from './RecurringBills/SplitRecurringBills';

const index = () => {
  return (
    <Switch>
      <Route path="/old-login" component={Login} exact />
      <Route path="/astra-success" component={AstraSuccess} exact />
      <Route path="/login" component={OnBoardingLanding} exact />
      <Route path="/confirm-recurring-bills" component={RecurringBills} exact />
      <Route path="/onboarding/signup" component={SignUp} exact />
      <Route
        path="/split-recurring-bills"
        component={SplitRecurringBills}
        exact
      />
      <Route
        path="/redirect"
        component={withAuthenticationRequired(Redirect)}
        exact
      />
      <Route
        path="/onboarding"
        component={withAuthenticationRequired(OnboardingRoutes)}
      />
      <Route
        exact
        path="/dashboard"
        component={withAuthenticationRequired(DashboardRoutes)}
      />
    </Switch>
  );
};

export default index;
