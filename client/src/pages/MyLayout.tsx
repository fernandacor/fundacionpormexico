import { useTheme } from "@mui/material/styles";
import { Layout, LayoutProps, Menu } from "react-admin";
import { MyAppBar } from "../components/AppBar";

const MyLayout = (props: LayoutProps) => {
  const theme = useTheme();

  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      menu={Menu}
      className="font-sans"
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
