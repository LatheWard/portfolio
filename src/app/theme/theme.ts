import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customizable primary color
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e', // Customizable secondary color
      light: '#ff4081',
      dark: '#9a0036',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      paper: '#f4f4f4',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents automatic uppercase
          borderRadius: 8,
        },
        containedPrimary: {
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // Base spacing unit
}));

export default theme;