import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Ticket from "../../svgs/Ticket";
import Users from "../../svgs/Users";
const userRole = localStorage.getItem("permissions");

type MenuProps = {
  className?: string;
  isOpen?: boolean;
};

const Menu: FC<MenuProps> = ({ className, isOpen }) => {
  const location = useLocation();

  const pageName = location.pathname;
  console.log(pageName);

  const styles = {
    menu: `${className} fixed top-0 left-0 w-64 h-[100vh] transition overflow-auto overscroll-auto scroll-smooth flex flex-col py-3 gap-2 gap-y-5 shadow-xl min-h-screen bg-neutral-50 dark:bg-neutral-900 z-50`,
    link: "flex flex-row gap-4 items-center p-2 px-3 pl-4 rounded-lg hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-black",
    activePageClasses:
      "bg-green-600 text-white shadow-lg dark:bg-green-400 dark:text-black dark:shadow-lg dark:shadow-green-400/25",
    disabledPageClasses: "text-black dark:text-white",
  };

  return (
    <div className={styles.menu}>
      <div className={`flex flex-row justify-center gap-4 mb-5`}>
        <img src="./images/logo.png" alt="" className="w-9" />
        <p className={`font-title text-lg ${!isOpen && "hidden"}`}>
          Fundación por México
        </p>
      </div>

      <Link
        to={"/reports"}
        className={`${styles.link} ${
          pageName?.includes("reports")
            ? styles.activePageClasses
            : styles.disabledPageClasses
        }`}
      >
        <Users /> {isOpen && "Dashboard"}
      </Link>

      {userRole === "Ejecutivo" && (
        <Link
          to={"/users"}
          className={`${styles.link} ${
            pageName?.includes("users")
              ? styles.activePageClasses
              : styles.disabledPageClasses
          }`}
        >
          <Users /> {isOpen && "Users"}
        </Link>
      )}

      <Link
        to={"/tickets"}
        color="inherit"
        className={`${styles.link} ${
          pageName?.includes("tickets")
            ? styles.activePageClasses
            : styles.disabledPageClasses
        }`}
      >
        <Ticket /> {isOpen && "Tickets"}
      </Link>
    </div>
  );
};

export default Menu;
