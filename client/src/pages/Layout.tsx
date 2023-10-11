import { useEffect } from "react";
import { LayoutComponent, LayoutProps, useTheme } from "react-admin";
import Menu from "../components/Menu";
import AppBar from "../components/NavBar";

const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, dashboard } = props;
  const [, setTheme] = useTheme();

  useEffect(() => {
    document.documentElement.className == "dark"
      ? setTheme("dark")
      : setTheme("light");
  }, [setTheme]);

  return (
    <main className="ml-[20%] px-2 scroll-smooth bg-neutral-100 dark:bg-neutral-950 min-h-[100vh]">
      <Menu />
      <AppBar />
      <div className="p-3">{children}</div>
    </main>
  );
};

export default Layout;
