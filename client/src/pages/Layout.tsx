import { LayoutComponent, LayoutProps } from "react-admin";
// import resolveConfig from "tailwindcss/resolveConfig";
// import myConfig from "../../tailwind.config";
import AppBar from "../components/AppBar";
import Menu from "../components/Menu";

const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, dashboard } = props;
  // const tailwindConfig = resolveConfig(myConfig);
  console.log(dashboard);

  // console.log(tailwindConfig.theme.colors.blue[500]);

  return (
    <main className="flex flex-row bg-white dark:bg-slate-800">
      <Menu />
      <div className="w-full flex flex-col">
        <AppBar />
        <div className="p-3">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
