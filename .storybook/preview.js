import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {StylesProvider} from "@material-ui/core";

import AppTheme from '../src/assets/theme';

import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={AppTheme}>
        <Story />
      </ThemeProvider>
    </StylesProvider >
  ),
]
