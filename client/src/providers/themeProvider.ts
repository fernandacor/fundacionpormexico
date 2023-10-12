import { RaThemeOptions, defaultDarkTheme, defaultTheme } from "react-admin";

const fontTheme: RaThemeOptions = {
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  // components: {
  //   ...defaultTheme.components,
  //   RaList: {
  //     styleOverrides: {
  //       root: {
  //         margin: "1rem",
  //       },
  //     },
  //   },
  // },
};

export const lightTheme: RaThemeOptions = {
  ...defaultTheme,
  ...fontTheme,
  palette: {
    mode: "light",
    primary: { main: "#16a34a" },
    background: { default: "#fff", paper: "#fff" },
    text: { primary: "#000" },
  },
};

export const darkTheme: RaThemeOptions = {
  ...defaultDarkTheme,
  ...fontTheme,
  palette: {
    mode: "dark",
    primary: { main: "#4ade80" },
    background: { default: "#171717", paper: "#171717" },
    text: { primary: "#fff" },
  },
};
