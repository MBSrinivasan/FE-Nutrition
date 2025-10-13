"use client";

import '@ant-design/v5-patch-for-react-19';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store/index.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Create global MUI theme with Montserrat font
const globalTheme = createTheme({
  typography: {
    fontFamily: 'var(--montserrat-font-family), Montserrat, sans-serif',
    allVariants: {
      fontFamily: 'var(--montserrat-font-family), Montserrat, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'var(--montserrat-font-family), Montserrat, sans-serif',
        },
      },
    },
  },
});

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={globalTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
