import React from "react";
import { Route, Switch } from "react-router-dom";
import Link from "components/Link";
// This file should just be merging routes from the feature folders.
// In a real world example, this would import the "Onboarding" routes as a component because the url below is /onboarding.
const index = () => {
  return (
    <Switch>
      <Route>
        <h1>Dashboard experience</h1>
        <Link href="#" onClick={() => ({})} color="black">
          Link
        </Link>
      </Route>
    </Switch>
  );
};

export default index;
