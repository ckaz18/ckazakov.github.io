import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: true,
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#e9e9e9',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;