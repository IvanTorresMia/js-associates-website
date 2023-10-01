import { createTheme } from "@mui/material";
import { colors } from "./constants/colors";

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.primaryWhite,
    },
    error: {
      main: colors.red,
    },
    info: {
      main: colors.primaryBlack
    }

  },
  typography: {
    fontFamily: 'Montserrat',
    // big titles
    h1: {
      fontWeight: 600,
      fontSize: "56px",
    },
    h2: {
      fontWeight: 400,
      fontSize: "56px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "44px",
    },
    // Medium Titles
    subtitle1: {
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "28px",
      "@media (max-width:1500px)": {
        fontSize: "20px",
      },
    },
    // Small Titles
    subtitle2: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
      "@media (max-width:1500px)": {
        fontSize: "18px",
      },
    },
    // Big body for tables etc.
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      "@media (max-width:1500px)": {
        fontSize: "12px",
      },
    },
    // small body for table data etc.
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20.02px",
      "@media (max-width:1500px)": {
        fontSize: "12px",
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xl: 1500,
      lg: 1300,
      md: 1000,
      sm: 600,
      xs: 0,
    },
  },
});
