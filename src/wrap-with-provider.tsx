import React, { FC, useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { store } from "./store";
import AppTheme from './assets/theme';
import { silentAuth } from "./utils/auth";
import Loader from "./components/Loader";

export interface Props {

}

const SessionCheck: FC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckSession = () => {
    setLoading(false)
  };

  useEffect(() => {
    silentAuth(handleCheckSession);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>{props.children} </React.Fragment>
  );
}

// eslint-disable-next-line react/display-name,react/prop-types
const WrapProvider = ({ element }: any) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  //   const store = makeStore();
  return (
    <CssBaseline>
      <React.StrictMode>
        <SessionCheck>
          <Provider store={store} >
              <ThemeProvider theme={AppTheme}>
                {element}
              </ThemeProvider>
          </Provider>
        </SessionCheck>
      </React.StrictMode>
    </CssBaseline>
  );
};
export default WrapProvider;
