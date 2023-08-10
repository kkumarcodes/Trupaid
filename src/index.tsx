import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import Routes from 'features';
import Auth0Provider from 'components/Auth0Provider';
import AppTheme from 'assets/theme';
import './index.css';

ReactDOM.render(
    <CssBaseline>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Auth0Provider>
              <ThemeProvider theme={AppTheme}>
                <Routes/>
              </ThemeProvider>
            </Auth0Provider>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </CssBaseline>,
  document.getElementById('root')
);

serviceWorker.unregister();
