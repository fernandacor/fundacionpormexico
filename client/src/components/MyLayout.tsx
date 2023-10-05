import { useTheme } from "@mui/material/styles";
import { AppBar, Layout, LayoutProps, Menu, TitlePortal } from "react-admin";
import ThemeToggler from "../hooks/useTheme";

export const MyAppBar = () => (
  <AppBar
    toolbar={<ThemeToggler />}
    color="transparent"
    sx={{
      boxShadow: "none",
    }}
  >
    <TitlePortal />
  </AppBar>
);

const MyMenu = () => <Menu />;

const MyLayout = (props: LayoutProps) => {
  const theme = useTheme();

  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      menu={MyMenu}
      sx={{
        "& .RaLayout-content": {
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
          backgroundColor: theme.palette?.background?.paper,
          marginRight: "10px",
          marginLeft: "10px",
        },
      }}
    />
  );
};

export default MyLayout;
