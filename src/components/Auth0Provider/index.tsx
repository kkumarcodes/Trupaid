import React, {ReactNode} from "react";
// import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

interface Props {
  children: ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: Props) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE || '';
  // const history = useHistory();

  // const onRedirectCallback = (appState: any) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/redirect`}
      audience={audience}
      // onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;