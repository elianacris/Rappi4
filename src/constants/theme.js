import { createTheme } from '@material-ui/core/styles';
export const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto'
    ]
  },
  palette: {
    primary: {
      main: '#e86e5a',
      contrastText: '#000'
    },
    secondary: {
      main: '#fefefe',
      contrastText: '#fefefe',
    },
    disabled: {
      main: '#d1d1d6',
      contrastText: '#d1d1d6',

    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});