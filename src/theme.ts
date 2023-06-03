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
      main: colors.primaryBlue,
    },
    secondary: {
      main: colors.primaryWhite,
    },
  },
  typography: {
    // big titles
    h1: {
      fontSize: "56px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "44px",
    },
    // Medium Titles
    subtitle1: {
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "28px",
    },
    // Small Titles
    subtitle2: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    // Big body for tables etc.
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
    },
    // small body for table data etc.
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20.02px",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
