import {
  AppBar,
  Layout,
  LayoutProps,
  Menu,
  ToggleThemeButton,
} from "react-admin";
import { darkTheme, lightTheme } from "../providers/themeProvider";

const theme = lightTheme;

export const MyAppBar = () => (
  <AppBar
    toolbar={<ToggleThemeButton />}
    sx={{
      boxShadow: "none",
      backgroundColor: theme.palette?.background?.default,
    }}
  />
);

const MyMenu = () => (
  <Menu
  // sx={{
  //   height: "200%",
  //   margin: "0px",
  //   color: "blue",
  // }}
  />
);

const MyLayout = (props: LayoutProps) => {
  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      menu={MyMenu}
      sx={{
        "& .RaLayout-content": {
          borderRadius: "0.75rem",
          backgroundColor: "#F5F5F5",
          marginRight: "10px",
        },
      }}
    />
  );
};

export default MyLayout;
