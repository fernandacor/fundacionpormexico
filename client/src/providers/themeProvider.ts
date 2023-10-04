import { ThemeOptions, TypeBackground } from "@mui/material/styles";
import { defaultDarkTheme, defaultTheme } from "react-admin";

export const lightTheme: ThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: "light",
    primary: { main: "#4ade80" },
    secondary: { main: "#fff" },
    background: {
      default: "#fff",
      paper: "#fff",
    } as TypeBackground,
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
    primary: { main: "#111827" },
    secondary: { main: "#030712" },
    background: { default: "#141414" },
  },
  typography: {
    fontFamily: "sans-serif",
  },
};
