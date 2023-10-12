import { useEffect, useState } from "react";
import { LayoutComponent, LayoutProps, useTheme } from "react-admin";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import ThreeBars from "../svgs/ThreeBars";

const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, dashboard } = props;
  console.log(dashboard);

  // Que no dañe el theme cuando se haga el reload
  const [, setTheme] = useTheme();
  useEffect(() => {
    document.documentElement.className == "dark"
      ? setTheme("dark")
      : setTheme("light");
  }, [setTheme]);

  // Abrir y cerrar el menú
  const [isOpen, setIsOpen] = useState(true);
  const menuClasses = isOpen
    ? "translate-x-0"
    : "translate-x-[-100%] scale-100";
  const buttonClasses = isOpen ? "left-[20%]" : "translate-x-[-20%]";
  const mainClasses = isOpen ? "ml-[20%]" : "ml-0";
  const menuBehavior = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Menu className={menuClasses} />
      <button
        onClick={menuBehavior}
        className={`${buttonClasses} transition fixed top-0 ml-6 mt-4 z-50`}
      >
        {isOpen ? <ThreeBars /> : <ThreeBars />}
      </button>
      <main
        className={`${mainClasses} transition scroll-smooth bg-neutral-100 dark:bg-neutral-950 min-h-[100vh]`}
      >
        <NavBar />
        <div className="p-3 px-5">{children}</div>
      </main>
    </>
  );
};

export default Layout;
