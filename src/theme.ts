import { createTheme } from '@mui/material/styles';
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
      100:'#f5f5f5',
      200:'#eeeeee',
      300:'#e0e0e0',
      400:'#bdbdbd',
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
});

export default theme;