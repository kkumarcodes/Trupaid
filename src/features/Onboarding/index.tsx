import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SignUp from "./SignUp";
import SelectPrimaryBank from "./SelectPrimaryBank";

// This file should just be merging routes from the feature folders.
// In a real world example, this would import the "Onboarding" routes as a component because the url below is /onboarding.
const OnboardingRoutes: FunctionComponent = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/signup`} component={SignUp} />
      <Route
        path={`${path}/connect-bank-account`}
        component={SelectPrimaryBank}
      />
      <Route path={`${path}`} component={SignUp} />
    </Switch>
  );
};

export default OnboardingRoutes;
