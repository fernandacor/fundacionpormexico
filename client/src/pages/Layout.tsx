import { useEffect, useState } from "react";
import { LayoutComponent, LayoutProps, useTheme } from "react-admin";
import { ThreeBarsSvg } from "../components/Svgs";
import Menu from "../components/layout/Menu";
import NavBar from "../components/layout/NavBar";

const Layout: LayoutComponent = ({ children }: LayoutProps) => {
  // Que no dañe el theme cuando se haga el reload
  const [, setTheme] = useTheme();
  useEffect(() => {
    document.documentElement.className == "dark"
      ? setTheme("dark")
      : setTheme("light");
  }, [setTheme]);

  // Abrir y cerrar el menú
  const [isOpen, setIsOpen] = useState(false);
  const menuClasses = isOpen
    ? "translate-x-0 px-3"
    : "-translate-x-48 pl-48 items-center";
  const buttonClasses = isOpen ? "translate-x-0" : "-translate-x-48";
  const mainClasses = isOpen ? "ml-64" : "ml-16";
  const menuBehavior = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Menu className={menuClasses} isOpen={isOpen} />
      <button
        onClick={menuBehavior}
        className={`${buttonClasses} fixed left-64 top-0 ml-4 mt-4 z-50 transition`}
      >
        {isOpen ? <ThreeBarsSvg /> : <ThreeBarsSvg />}
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
