import { RaThemeOptions, defaultDarkTheme, defaultTheme } from "react-admin";

const basicTheme: RaThemeOptions = {
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

// console.log(themeMode);

export const lightTheme: RaThemeOptions = {
  ...defaultTheme,
  ...basicTheme,
  palette: {
    mode: "light",
    background: {
      default: "#fff",
      paper: "#f9fafb",
    },
    text: { primary: "#000" },
  },
};

export const darkTheme: RaThemeOptions = {
  ...defaultDarkTheme,
  ...basicTheme,
  palette: {
    mode: "light",
    background: { default: "#121212", paper: "#272727" },
    text: { primary: "#fff" },
  },
};
