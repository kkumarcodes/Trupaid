import { createMuiTheme } from '@material-ui/core/styles';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import breakpoints from './breakpoints';
import typography from './typography';
import palette from './palette';
import link from './link';

const customTheme = createMuiTheme({
  breakpoints,
  typography: typography as TypographyOptions,
  palette,
  overrides: {
    MuiLink: link,
  },
});

export default customTheme;
