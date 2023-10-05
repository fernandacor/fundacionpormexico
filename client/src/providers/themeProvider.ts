import { ThemeOptions } from "@mui/material/styles";
import { defaultDarkTheme, defaultTheme } from "react-admin";

export const lightTheme: ThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: "light",
    // primary: { main: "#4ade80" },
    background: {
      default: "#fff",
      paper: "#f9fafb",
    },
    text: { primary: "#000" },
  },
  typography: {
    fontFamily: "sans-serif",
  },
};

export const darkTheme: ThemeOptions = {
  ...defaultDarkTheme,
  palette: {
    mode: "dark",
    // primary: { main: "#22c55e" },
    background: { default: "#121212", paper: "#272727" },
  },
  typography: {
    fontFamily: "sans-serif",
  },
};
