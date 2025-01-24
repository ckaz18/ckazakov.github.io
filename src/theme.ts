import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: true,
  palette: {
    primary: {
      main: '#5f43b2',
      light: '#b1aebb',
      dark: '#3a3153',
    },
    error: {
      main: red.A400,
    },
    grey: {
      50: '#fefdfd',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#424242',
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
      fontSize: '2em',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '2.5em',
      },
    },
    h2: {
      fontSize: '1.5em',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '2em',
      },
    },
    h3: {
      fontSize: '1.17em',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '1.5em',
      },
    },
    h4: {
      fontSize: '1em',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '1.25em',
      },
    },
    h5: {
      fontSize: '0.9em',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '1.2em',
      },
    },
    h6: {
      fontSize: '0.9em',
      fontWeight: 400,
      '@media (min-width:600px)': {
        fontSize: '1em',
      },
    },
    body1: {
      fontSize: '0.85em',
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: '0.9em',
      },
    },
    body2: {
      fontSize: '0.875em',
      lineHeight: 1.43,
      '@media (min-width:600px)': {
        fontSize: '0.85em',
      },
    },
    
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '1rem',
          '@media (min-width:600px)': {
            padding: '1.5rem',
          },
        },
      },
    },
    
  }
} as ThemeOptions);

// = 0.25 * 2rem = 0.5rem = 8px
export default theme;