import { LayoutComponent, LayoutProps } from "react-admin";
// import resolveConfig from "tailwindcss/resolveConfig";
// import myConfig from "../../tailwind.config";
import Menu from "../components/Menu";
import AppBar from "../components/NavBar";

const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, dashboard } = props;
  // const tailwindConfig = resolveConfig(myConfig);
  console.log(dashboard);

  // console.log(tailwindConfig.theme.colors.blue[500]);

  return (
    // <main className="flex flex-row bg-white dark:bg-slate-800">
    // <main className="relative">
    //   <div className="absolute overscroll-auto w-fit">
    //   </div>
    // </main>
    <main className="ml-[20%] px-2 scroll-smooth bg-white dark:bg-slate-800 min-h-[100vh]">
      <Menu />
      <AppBar />
      <div className="p-3">{children}</div>
    </main>
  );
};

export default Layout;
