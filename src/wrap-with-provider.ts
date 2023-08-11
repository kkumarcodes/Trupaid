import React from "react";
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { store } from "./store";
import AppTheme from './assets/theme';
import { silentAuth } from "./utils/auth";
import Loader from "./components/Loader";

class SessionCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  handleCheckSession = () => {
    this.setState({ loading: false });
  };

  componentDidMount() {
    silentAuth(this.handleCheckSession);
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <React.Fragment>{this.props.children}</React.Fragment>
    );
  }
}

// eslint-disable-next-line react/display-name,react/prop-types
const WrapProvider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  //   const store = makeStore();
  return (
    <CssBaseline>
      <React.StrictMode>
        <SessionCheck>
          <Provider store={store}>
            <BrowserRouter>
              <ThemeProvider theme={AppTheme}>
                {element}
              </ThemeProvider>
            </BrowserRouter>
          </Provider>
        </SessionCheck>
      </React.StrictMode>
    </CssBaseline>
  );
};
export default WrapProvider;
