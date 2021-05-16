import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const AppTheme = {};

export const MUITheme = createMuiTheme({
  palette: {
    primary: {
      main: red['400'],
      light: red['100'],
      dark: red['700'],
    },
  },
});
