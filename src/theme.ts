import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: true,
  palette: {
    primary: {
      main: '#424242',
      light: '#ebebeb',
      dark: '#060606',
    },
    secondary: {
      main: '#e9e9e9',
    },
    error: {
      main: red.A400,
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
    background: {
      default: '#efefef',
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiContainer: {

    }
  }
} as ThemeOptions);

// = 0.25 * 2rem = 0.5rem = 8px

export default theme;