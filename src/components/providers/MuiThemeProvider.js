'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create the MUI theme in the client component
const muiTheme = createTheme({
  palette: {
    mode: 'dark', // or 'light' - you can make this dynamic based on your theme
    primary: {
      main: '#16a34a', // Your brand primary color
    },
    secondary: {
      main: '#2563eb', // Your brand secondary color
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export default function MaterialUIProvider({ children }) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}