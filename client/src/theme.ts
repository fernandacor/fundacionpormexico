import blue from "@mui/material/colors/blue";
import indigo from "@mui/material/colors/indigo";
import pink from "@mui/material/colors/pink";
import { ThemeOptions } from "@mui/material/styles";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: blue,
    secondary: indigo,
    error: pink,
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: blue,
    secondary: indigo,
    error: pink,
  },
};
